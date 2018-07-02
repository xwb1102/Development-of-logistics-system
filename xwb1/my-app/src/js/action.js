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

// export function open(data){
//     return {
//         type: 'OPEN',
//         data
//     }
// }
// export function del(data) {
//     return {
//         type: 'OPEN',
//         data
//     }
// }
//thunk 请求商品数据
// export const axiosData = () => {
//     return dispatch => {
           
//         return axios.get("https://5b2e075b47942a001493693d.mockapi.io/lala").then(
//             response => {
//                 dispatch(cl(response.data))
//             }
//         )
//     };
// };
export const axiosData = (num=1) => {
    // return dispatch => {

    //     return axios.get("http://localhost:88/api/weibo?act=get&page=1").then(
    //         response => {
    //             dispatch(cl(response.data))
    //         }
    //     )
    // };
  return dispatch => { 
      return fetch('http://localhost:88/api/weibo?act=get&page='+num)
    .then(e => e.json())
        .then(data=>{
            dispatch(cl(data))
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
export const addN = (content,phone,email) => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=add&content='+content+'&phone='+phone+'&email='+email)
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
//inout的点击
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
export const total = () => {
    return dispatch => {
        return fetch('http://localhost:88/api/weibo?act=total')
            .then(e => e.json())
            .then(data => {
                dispatch(totall(data))
            });
    }
};



export function orders(data) {
    return {
        type: 'ORDERS',
        data
    }
}
export function getNew(data) {
    return {
        type: 'GETNEW',
        data
    }
}
export function pageList(data) {
    return {
        type: 'PAGELIST',
        data
    }
}
export function findLists(data) {
    return {
        type: 'FINDLISTS',
        data
    }
}
export function totList(data) {
    return {
        type: 'TOTLIST',
        data
    }
}
export function blockList(data) {
    return {
        type: 'BLOCK',
        data
    }
}



//下单，添加数据
export const order = (a,b,c,d,e,f,g) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=add&jcontent='+a+'&scontent='+b+'&jPhone='+c+'&sPhone='+d+'&jAddr='+e+'&sAddr='+f+'&money='+g)
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
export const findList = (id) => {
    return dispatch => {
        return fetch('http://localhost:88/api/order?act=find&ll=' + id)
            .then(e => e.json())
            .then(data => {
                console.log(data)
                if(data[0]==null){
                    alert('请输入正确的单号！')
                    return
                }else{
                     dispatch(findLists(data))
                }
               
            });
    }
};
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