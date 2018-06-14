let mainLeft = document.getElementById('main-left');
let spans = mainLeft.getElementsByTagName('span');
let divUl = mainLeft.querySelectorAll('ul');
let spansLen = spans.length;

for(let i = 0;i<spansLen;i++){
    divUl[i].classList.add('mainLeftActive');
    spans[i].onclick = function(){
        for(let j = 0;j<spansLen;j++){
            if(j==i){
                divUl[i].classList.toggle('mainLeftActive');
            }else{
                divUl[j].classList.add('mainLeftActive');
                
                 divUl[i].classList.toggle('mainLeftActive');
            }
        }
    }
} 