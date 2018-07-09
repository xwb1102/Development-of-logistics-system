function NavLeft(a){
    let mainLeft = document.getElementById('main-left');
    let spans = mainLeft.getElementsByTagName('span');
    let divUl = mainLeft.querySelectorAll('ul');
    let spansLen = spans.length;
    spans = Array.from(spans)
    let s = spans.findIndex(e=>e==a);



    for(let i = 0;i<spansLen;i++){
        if(i==s){
            continue;
        }else{
            divUl[i].classList.add('mainLeftActive');
        }
    }
    divUl[s].classList.toggle('mainLeftActive');
    
}
export default NavLeft;