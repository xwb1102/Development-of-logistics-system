/**
 * Created by Moudi on 2017/2/23.
 */
"use strict";
let express = require('express');
let router = express.Router();
let User = require('../models/user');
let Weibo = require('../models/weibo');
let Order = require('../models/order');
let Region = require('../models/region');
let multiparty = require('multiparty');
let fs = require('fs');
let resData;


router.use(function (req, res, next){
  resData = {
    code: 0,
    msg: ''
  };
  next();
});
router.post('/user/login', (req, res, next) => {
  
  let username = req.body.username;
  let password = req.body.password;
  if (username == '' || password == '') {
    resData.code = -1;
    resData.msg = '用户名或密码不能为空';
    res.json(resData);
    return;
  }
  User.findOne({
    username: username,
    password: password
  }).then((userInfo) => {
    if (!userInfo) {
      resData.code = -3;
      resData.msg = '用户不存在或密码错误'
      res.json(resData);
      return;
    }
    resData.msg = '登录成功';
    resData.userInfo = {
      _id: userInfo._id,
      username: userInfo.username
    };
    res.json(resData);
  })
});

router.post('/user/register', (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;

  if (username == '') {
    resData.code = -1;
    resData.msg = '用户名不能为空';
    res.json(resData);
    return;
  }
  if (password == '') {
    resData.code = -2;
    resData.msg = '密码不能为空';
    res.json(resData);
    return;
  }
  // let user = new User({
  //   username: username,
  //   password: password
  // });
// user.save().then(function (newUserInfo) {

  console.log(username,'这个就是前端传的name')
  User.findOne({
    username: username
  }).then(function(newUserInfo){
    console.log(newUserInfo+'OK');
    if(!newUserInfo){
      let user = new User({
        username: username,
        password: password
      });
      user.save().then(()=>{
        resData.code = 0;
        resData.msg = '注册成功！';
        console.log(resData);
        res.json(resData);
      });
    }else{
        resData.code = 1;
        resData.msg = '用户名已占用!';
        res.json(resData);
    }
  });
});

router.post('/upload', (req, res, next) => {
  //生成对象，配置上传目标路径
  let form = new multiparty.Form({
    uploadDir: './public/files/',
    encoding: 'utf-8'
  });
  form.parse(req, function (err, fields, files) {
    fs.rename(files.file[0].path, './public/files/' + files.file[0].originalFilename, function (err) {
      if (err) {
       console.log('重命名失败');
      } else {
        resData.code = 0;
        resData.msg = '上传成功！';
        res.json(resData);
      }
    })
  });
});
router.post('/weibo/login', (req, res, next) => {
//  let ll = req.query.ll;
//  Weibo.find({
//    content: ll
//  }, (err, data) => {
//    console.log(data)
//    if (err) {
//      console.log('kong')
//    } else {
//      res.json(data);
//    }
//  });
  let username = req.body.username;
  let password = req.body.password;
  if (username == '' || password == '') {
    resData.code = -1;
    resData.msg = '用户名或密码不能为空';
    res.json(resData);
    return;
  }
  Weibo.findOne({
    content: username,
    pw: password
  }).then((userInfo) => {
    if (!userInfo) {
      resData.code = -3;
      resData.msg = '用户不存在或密码错误'
      res.json(resData);
      return;
    }
    resData.msg = '登录成功';
    resData.userInfo = {
      _id: userInfo._id,
      content: userInfo.content,
      level:userInfo.level
    };
    console.log(resData.userInfo)
    res.json(resData);
  })
});
//
router.get('/region',(req,res,next)=>{
  let act = req.query.act;
  let id,province,city,county,street,xin,fang,ys,yc;
  console.log(req.query)
  // id: Number,
  //   province: String,
  //   city: String,
  //   county: String,
  //   street: Array
  switch(act){
    case 'add':
      id=+new Date;
      province = req.query.p;
      county = req.query.co;
      
      county = JSON.parse(county);
      let region = new Region({
        id, 
        province,
        county
      });
       region.save((err, newWeiboInfo) => {
        resData.code = 0;
        resData.msg = '提交成功！';
        res.json(resData);
      });
    break;
    case 'findAttr':
    let ll = req.query.ll;
    let arr = [];
      Region.find({province:ll}, (error, data) => {
        if(!ll){
          console.log('kong')
        } else {
          arr.push(data);
        }
        // console.log(arr);
        console.log(data)
          res.json(arr);
      });
      break;
      case 'tup':
      id = req.query.id;
      xin = req.query.xin;
      xin = JSON.parse(xin)
      console.log('就是这个'+xin);
      county = xin.county;
      Region.update({id: id},{county}, (err, data) => {
          if(err) console.log(err);
            if (!err) {
              resData.code = 0;
              resData.msg = '您更新了地址成功';
              res.json(resData);
            } else {
              resData.code = -1;
              resData.msg = '您更新了地址失败';
              res.json(resData);
            }
        });
      break;
      case 'all':
      let arr3 = [];
      Region.find({}, (error, data) => {
          arr3.push(data);
        // console.log(arr);
        console.log(data)
          res.json(arr3);
      });
      break;
        case 'del':
        let nid = req.query.id;
        console.log(nid)
        Region.remove({
          county: nid
        }, (err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '删除成功';
            // res.json(resData);
          } else {
            resData.code = -1;
            resData.msg = '删除失败';
          }
          res.json(resData);
        });
        break;
    default:
    resData.code = -1;
    resData.msg = '参数错误';
    res.json(resData);
  }
})
router.get('/order',(req,res,next)=>{
  let act = req.query.act;
  let id, scontent, jcontent, jPhone, sPhone, jAddr, sAddr, money,logistics,send,goods,lo;
  const PAGE_SIZE = 6;
  console.log(req.query)
  switch (act) {
    case 'add':
    // console.log(req.query)
      scontent = req.query.scontent;
      money = req.query.money;
      jcontent = req.query.jcontent;
      jPhone = req.query.jPhone;
      sPhone = req.query.sPhone;
      jAddr = req.query.jAddr;
      sAddr = req.query.sAddr;
      logistics = req.query.logistics;
      console.log('看看这个'+logistics)
      if(logistics==''){
        logistics = [{cont:'暂无物流信息'}]
      }
    //  logistics=[{ti:(+new Date),cont:'昌平区-西二旗'},{ti:(+new Date)+1000000000,cont:'昌平区-白庙村'}]
      let time = +new Date();
      id = +new Date;
      goods = '未发货'
      let order = new Order({
        id,
        jcontent: jcontent,
        time: time,
        scontent: scontent,
        jAddr: jAddr,
        sAddr: sAddr,
        jPhone: jPhone,
        sPhone: sPhone,
        send:false,
        money:money,
        logistics:logistics,
        goods:goods
      });
      order.save((err, newWeiboInfo) => {
        resData.code = 0;
        resData.msg = '提交成功！';
        res.json(resData);
      });
    break;
     case 'get':
      let page = Number(req.query.page);
      if (!page) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        Order
        .find({})
        .sort('-time')
        .skip(PAGE_SIZE * (page-1))
        .limit(PAGE_SIZE)
        .exec((err, data) => {
          console.log(data)
          let arr = [];
          for (let o of data) {
            let obj = {
              id: o.id,
              jcontent: o.jcontent,
              scontent: o.scontent,
              jAddr: o.jAddr,
              sAddr: o.sAddr,
              jPhone: o.jPhone,
              sPhone: o.sPhone,
              time: o.time,
              send: o.send,
              money: o.money,
              logistics:o.logistics,
              goods:o.goods
            };
            arr.push(obj);
          }
          // console.log(arr)
          res.json(arr);
        });
      }
      break;
      case 'get_page_count':
      Order.count({}, (err, n) => {
        resData.code = 0;
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        res.json(resData);
      });
      break;
      //已发货
      case 'yfh':
       id = req.query.id;
       logistics = [
              {
                cont:'已发货,正等待快递员上门揽件'
              }
          ]
        Order.update({id: id},{logistics}, (err, data) => {
          if(err) console.log(err);
            if (!err) {
              resData.code = 0;
              resData.msg = '物流更新成功';
              res.json(resData);
            } else {
              resData.code = -1;
              resData.msg = '物流更新失败';
              res.json(resData);
            }
      });
      break;
      //新增到达地点
        case 'sayYes':
       id = req.query.id;
       lo = req.query.lo;
      
       Order.findOne({id: id},(err, data) => {
          if(err){
             console.log(err);
             return;
          }
          let d = [...data.logistics, JSON.parse(lo)];
          if(d[0].cont == '已发货,正等待快递员上门揽件'){
            d = d.slice(1);
          }
          data.logistics = d;
          data.save((err) => {
            if (!err) {
              resData.code = 0;
              resData.msg = 'input点击成功';
              res.json(resData);
            } else {
              resData.code = -1;
              resData.msg = 'input点击失败';
              res.json(resData);
            }
          });
      });
      break;
      //点击发货的时候，改变转态，为发货转态
        case 'open':
       id = req.query.id;
       send = true;
       goods = '已发货'
        Order.update({id: id},{send,goods}, (err, data) => {
          if(err) console.log(err);
            if (!err) {
              resData.code = 0;
              resData.msg = '发货成功';
              res.json(resData);
            } else {
              resData.code = -1;
              resData.msg = '发货失败';
              res.json(resData);
            }
      });
      break;
      case 'del':
        id = req.query.id;
        console.log(id)
        Order.remove({
          id: id
        }, (err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '删除成功';
            // res.json(resData);
          } else {
            resData.code = -1;
            resData.msg = '删除失败';
          }
          res.json(resData);
        });
        break;
         case 'delAll':
          let a = req.query.a;
            let l = JSON.parse(a);
          for(let i = 0;i<a.length;i++){
                Order.remove({id: l[i]}, (err) => {
              if (!err) {
                resData.code = 0;
                resData.msg = '删除成功';
              } else {
                resData.code = -1;
                resData.msg = '删除失败';
              }
            });
          }
        res.json(resData);
          break;
          //查找某条数据
           case 'find':
          // console.log(req.query);
          let ll = req.query.ll;
          Order.findOne({id: ll}, (err, data) => {
          let arr = [];
            if(err){
              console.log('kong')
            } else {
              arr.push(data);
            }
            console.log(arr);
              res.json(arr);
          });
          break;
          //按照手机号码进行查找，前台显示是按照寄件人手机
            case 'findPhone':
          // console.log(req.query);
          let lla = req.query.ll;
          Order.findOne({sPhone: lla}, (err, data) => {
          let arr = [];
            if(err){
              console.log('kong')
            } else {
              arr.push(data);
            }
            console.log(arr);
              res.json(arr);
          });
          break;
           case 'block':
          console.log(req.query);
           let la = req.query.la;
          Order.findOne({id: la}, (err, data) => {
          let arr = [];
            if(err){
              console.log('kong')
            } else {
              arr.push(data);
            }
              res.json(arr);
          });
          break;
          case 'total':
            Order.count({}, (err, n) => {
              res.json(n);
            });
            break;
      }
})
router.post('/commodity/update', (req, res, next) => {
console.log(req.body);

// let id = Number(req.body.id);
let id = req.body.id;
let jcontent = req.body.jcontent;
let money = req.body.money;
let scontent = req.body.scontent
let jPhone = req.body.jPhone
let sPhone = req.body.sPhone
let jAddr = req.body.jAddr
let sAddr = req.body.sAddr
let obj = {
  id,
jcontent,
scontent,
jPhone,
sPhone,
jAddr,
sAddr
}
//都是查找更新
Order.update({id}, {
      id,
      jcontent,
      scontent,
      jPhone,
      sPhone,
      jAddr,
      sAddr
    }, (err, data) => {
      console.log(data);
console.log('这是我的err：' + err);
if (err) {
resData.code = -1;
resData.msg = '更新失败！';
res.json(resData);
} else {
resData.code = 0;
resData.msg = '更新成功！';
res.json(resData);
}
});
});
//weibo
router.get('/weibo', (req, res, next) => {
  let act = req.query.act;
  let id,content,phone,email,open,checked,abc,level,sex,pw;
  const PAGE_SIZE = 6;
  console.log(req.query)
  switch(act) {
    case 'add':
      content = req.query.content;
      phone = req.query.phone;
      email = req.query.email;
      level = req.query.level;
      sex = req.query.sex;
      pw = req.query.passWord;
      // abc = req.query.abc;
      if (!content) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        let time = +new Date();
        content = content.replace('\n','');
        id=+new Date;
        let weibo = new Weibo({
          id,
          checked:false,
          content,
          phone,
          email,
          time: time,
          open:false,
          level,
          sex,
          pw
        });
        weibo.save((err, newWeiboInfo) => {
          // console.log(newWeiboInfo)
          resData.code = 0;
          resData.msg = '提交成功！';
          res.json(resData);
        });
      }
      break;
      case 'open':
       id = req.query.id;
        Weibo.findOne({id: id}, (err, data) => {
          if(err) console.log(err);
          data.open = !data.open;
          data.save((err) => {
            if (!err) {
              resData.code = 0;
              resData.msg = 'input点击成功';
              res.json(resData);
            } else {
              resData.code = -1;
              resData.msg = 'input点击失败';
              res.json(resData);
            }
          });
      });
      break;
      case 'find':
        console.log(req.query);
        let ll = req.query.ll;
        Weibo.find({content: ll}, (err, data) => {
          console.log(data)
          if(err){
            console.log('kong')
          } else {
             res.json(data);
             }
        });
      break;
      case 'upd':
      id = req.query.id;
      phone = req.query.phone;
      email = req.query.email;
      pw = req.query.pass;
      level = req.query.level
      let obj = {
        id,
      phone,
      email,
      pw,
      level
      }
//都是查找更新
      Weibo.update({id}, {
                  id,
                  phone,
                  email,
                  pw,
                  level
                  }, (err, data) => {
            console.log(data);
      console.log('这是我的err：' + err);
      if (err) {
      resData.code = -1;
      resData.msg = '更新失败！';
      res.json(resData);
      } else {
      resData.code = 0;
      resData.msg = '更新成功！';
      res.json(resData);
      }
      });

      return 
      break;
      case 'checked':
       id = req.query.id;
        Weibo.findOne({id: id}, (err, data) => {
          if(err) console.log(err);
          data.checked = !data.checked;
          data.save((err) => {
            if (!err) {
              resData.code = 0;
              resData.msg = '开启或取消成功';
              res.json(resData);
            } else {
              resData.code = -1;
              resData.msg = '开启或取消失败';
              res.json(resData);
            }
          });
      });
      break;

       case 'delAll':
       let a = req.query.a;
        let l = JSON.parse(a);
        
       for(let i = 0;i<a.length;i++){
            Weibo.remove({id: l[i]}, (err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '删除成功';
          } else {
            resData.code = -1;
            resData.msg = '删除失败';
          }
        });
      }
    res.json(resData);
      break;
    case 'get_page_count':
      Weibo.count({}, (err, n) => {
        resData.code = 0;
        resData.msg = '页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
        resData.count = Math.ceil(n / PAGE_SIZE);
        res.json(resData);
      });
      break;
      case 'total':
       Weibo.count({}, (err, n) => {
         res.json(n);
       });
      break;
    case 'get':
      let page = Number(req.query.page);
      if (!page) {
        resData.code = -1;
        resData.msg = '参数错误';
        res.json(resData);
      } else {
        Weibo
        .find({})
        .sort('-time')
        .skip(PAGE_SIZE * (page-1))
        .limit(PAGE_SIZE)
        .exec((err, data) => {
          let arr = [];
          for (let o of data) {
            let obj = {
              id: o.id,
              content: o.content,
              time: o.time,
              open:o.open,
              email:o.email,
              phone:o.phone,
              checked:o.checked,
              level:o.level,
              pw:o.pw,
              sex:o.sex
            };
            arr.push(obj);
          }
          res.json(arr);
        });
      }
      break;
    case 'like':
      id = req.query.id;
      Weibo.findOne({_id: id}, (err, data) => {
        if(err) console.log(err);
        data.like = data.like + 1;
        data.save((err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '点赞成功';
            res.json(resData);
          } else {
            resData.code = -1;
            resData.msg = '点赞失败';
            res.json(resData);
          }
        });
      });
      break;
    case 'dislike':
      id = req.query.id;
      Weibo.findOne({_id: id}, (err, data) => {
        if(err) console.log(err);
        data.dislike = data.dislike + 1;
        data.save((err) => {
          if (!err) {
            resData.code = 0;
            resData.msg = '踩成功';
            res.json(resData);
          } else {
            resData.code = -1;
            resData.msg = '踩失败';
            res.json(resData);
          }
        });
      });
      break;
    case 'del':
      id = req.query.id;
      console.log(id)
      Weibo.remove({id: id}, (err) => {
        if (!err) {
          resData.code = 0;
          resData.msg = '删除成功';
          // res.json(resData);
        } else {
          resData.code = -1;
          resData.msg = '删除失败';
        }
        // res.json(resData);
      });
      break;
    default:
      resData.code = -1;
      resData.msg = '参数错误';
      res.json(resData);
  }

});

module.exports = router;