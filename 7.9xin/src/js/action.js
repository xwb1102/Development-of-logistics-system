import axios from 'axios';

export function cl(data) {
    return {
        type: 'GET',
        data
    }
}
export function find(data) {
    return {
        type: 'FIND',
        data
    }

}
export function pageNum(page) {
    return {
        type: 'PAGE',
        page
    }
}
export function addLi(data) {
    return {
        type:'ADD',
        data
    }
}
export function totall(data) {
    return {
        type: 'TOTAL',
        data
    }
}
//获取所有数据
export function getA(data) {
    return {
        type: 'GETALL',
        data
    }
}
//获取单页数据
export const axiosData = (num=1) => {
  return dispatch => { 
      return fetch('http://localhost:88/api/weibo?act=get&page='+num)
    .then(e => e.json())
        .then(data=>{
            dispatch(cl(data))
            // console.log(data);
        });
    }
};
//获取所有数据
export const getAll = () => {
  return dispatch => { 
      return fetch('http://localhost:88/api/weibo?act=getAll')
    .then(e => e.json())
        .then(data=>{
            console.log(data)
            dispatch(getA(data))
            // console.log(data);
        });
    }
};
//获取页码
export const page = () => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=get_page_count')
            .then(e => e.json())
            .then(data => {
                dispatch(pageNum(data.count))
            });
    }
};
//添加用户
export const addN = (content,se,phone,email,pw,l) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=add&content='+content+'&sex='+se+'&phone='+phone+'&email='+email+'&passWord='+pw+'&level='+l)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                dispatch(addLi(data))
            });
    }
};
//是否开启状态的点击
export const openLi = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=open&id='+id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                // dispatch(open(data))
            });
    }
};
//input的点击
export const checkedLi = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=checked&id='+ id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                // dispatch(open(data))
            });
    }
};
//删除单个
export const delOne = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=del&id=' + id)
            .then(e => e.json())
            .then(data => {
                // console.log(data)
                // dispatch(del(data))
            });
    }
};
//批量删除
export const delAll = (ch) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=delAll&a='+ch)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                // dispatch(del(data))
            });
    }
};
//查找
export const findOne = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=find&ll=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if(data[0]==null){
                    alert('请输入正确的用户名！')
                    return
                }else{
                     dispatch(find(data))
                }
               
            });
    }
};
//计算总计
export const total = () => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=total')
            .then(e => e.json())
            .then(data => {
                dispatch(totall(data))
            });
    }
};
//更新内容
export const upda = (p,e,ps,l,i) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=upd&phone='+p+'&email='+e+'&pass='+ps+'&level='+l+'&id='+i)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if(data.code==0){
                    alert('修改成功')
                }else{
                    alert('修改失败')
                }
                // dispatch(totall(data))
            });
    }
};


//下单、添加数据
export function orders(data) {
    return {
        type: 'ORDERS',
        data
    }
}
//获取单页数据
export function getNew(data) {
    return {
        type: 'GETNEW',
        data
    }
}
//获取页码
export function pageList(data) {
    return {
        type: 'PAGELIST',
        data
    }
}
//通过订单寻找
export function findLists(data) {
    return {
        type: 'FINDLISTS',
        data
    }
}
//找总计
export function totList(data) {
    return {
        type: 'TOTLIST',
        data
    }
}
//通过id寻找
export function blockList(data) {
    return {
        type: 'BLOCK',
        data
    }
}
//通过手机号寻找
export function findPl(data) {
    return {
        type: 'FINDPL',
        data
    }
}


//下单，添加数据
export const order = (a,b,c,d,e,f,g,h=[]) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=add&jcontent='+a+'&scontent='+b+'&jPhone='+c+'&sPhone='+d+'&jAddr='+e+'&sAddr='+f+'&money='+g+'&logistics'+h)
            .then(e => e.json())
            .then(data => {
                dispatch(orders(data))
            });
    }
};
//获取数据
export const getNews = (num=1) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=get&page=' + num)
            .then(e => e.json())
            .then(data => {
                dispatch(getNew(data))
            });
    }
};
//获取页码
export const menPage = () => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=get_page_count')
            .then(e => e.json())
            .then(data => {
                dispatch(pageList(data.count))
            });
    }
};
//删除单个
export const delList = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=del&id=' + id)
            .then(e => e.json())
            .then(data => {
                // console.log(data)
                // dispatch(del(data))
            });
    }
};
//删除多个
export const delAllList = (ch) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=delAll&a=' + ch)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                // dispatch(del(data))
            });
    }
};
//通过id找某条数据
export const blockA = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=block&la=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                    dispatch(blockList(data))

            });
    }
};
//计算总订单
export const totalList = () => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=total')
            .then(e => e.json())
            .then(data => {
                console.log(data)
                dispatch(totList(data))
            });
    }
};
//修改内容
export const creat = (records) => {
    return dispatch => {
         fetch('http://localhost:88/api/commodity/update', {
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             },
             method: 'post',
             body: new URLSearchParams(records).toString()
         }).then(e=>e.json()).then(data=>{
            console.log(data)
         })
    };
};
//点击发货按钮
export const sendGoo = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=open&id=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                // dispatch(open(data))
            });
    }
};
//点击已发货的时候，物流信息更改为已发货，正在等待快递员上门揽件
export const loadMen = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=yfh&id=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if(data.code == '-1'){
                    alert('请输入正确的单号！');
                    return;
                }
                // dispatch(open(data))
            });
    }
};
//确定订单到达某个地点
export const sayAtion = (id,a) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=sayYes&id=' + id+'&lo='+a)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if (data.code == '-1') {
                    alert('请输入正确的单号！');
                    return;
                }else{
                    alert('更新成功')
                }
                // dispatch(open(data))
            });
    }
};
//通过订单号找某条数据，这边是需要用到里面的东西
export const findList = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=find&ll=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if (data[0] == null) {
                    alert('请输入正确的单号！')
                    dispatch(findLists(data))
                    return
                } else {
                    dispatch(findLists(data))
                }
            });
    }
};
//按照手机查找
export const findP = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=findPhone&ll=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                 if(data[0]==null){
                    alert('请输入正确的寄件人手机号！')
                    dispatch(findPl(data))
                    return
                }else{
                    dispatch(findPl(data))
                }
            });
    }
};
// export const axiosDel = () => {
//     return dispatch => {

//         return axios.get("https://5b2e075b47942a001493693d.mockapi.io/lala/2").then(
//             response => {
//                 dispatch(del(response.data))
//             }
//         )
//     };
// };

// dingdan ? p = 1 & l = 10     地址后面加上这些，可以控制每一次请求过来数据的数量


//查询收寄范围了


//添加收寄范围
export function searcA(data) {
    return {
        type: 'SEARCHA',
        data
    }
}
 //添加收寄范围
export function xuanA(data) {
    return {
        type: 'XUANA',
        data
    }
}
//添加收寄范围
export const searchAdd = (p,co) => {
    return dispatch => {
        return fetch('http://localhost:88/api/region?act=add&p=' + p + '&co=' + co )
            .then(e => e.json())
            .then(data => {
                console.log(data)
                 dispatch(searcA(data))
            });
    }
};

export const findAttr = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/region?act=findAttr&ll=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if (data[0] == null) {
                    alert('请输入正确的寄件人手机号！')
                    dispatch(findPl(data))
                    return
                } else {
                    dispatch(findPl(data))
                }
            });
    }
};
//删除单个
export const delAttr = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/region?act=del&id=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if(data.code == 0){
                    alert('删除成功！')
                }
                // dispatch(del(data))
            });
    }
};
//更新
export const rexin = (id,xin) => {
    return dispatch => {
        return fetch('http://localhost:88/api/region?act=tup&id=' + id+'&xin='+xin)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if (data.code == '-1') {
                    alert('请输入正确的单号！');
                    return;
                }
                if(data.code == '0'){
                    alert('添加地点成功')
                }
                // dispatch(open(data))
            });
    }
};
//全选
export const xuanAll = (id, xin, fang) => {
    return dispatch => {
        return fetch('http://localhost:88/api/region?act=all')
            .then(e => e.json())
            .then(data => {
                console.log(data)
                dispatch(xuanA(data));
                // if (data.code == '-1') {
                //     alert('请输入正确的单号！');
                //     return;
                // }
                // dispatch(open(data))
            });
    }
};