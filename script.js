
const ar1 = ['a','A','d','s'],
	  ar2 = ['d','k','n','e'],
	  ar3 = ['а','А','д','с'],
	  ar4 = ['д','к','н','е']
    arFinal = [],
    arFinal2 = [],
    arFinal3 = [],
    arFinal4 = [];
let btn = document.body.querySelector('#button'),
	elEn1 = document.body.querySelector('#f_eng'),
	elEn2 = document.body.querySelector('#i_eng'),
	elRu1 = document.body.querySelector('#f_ru'),
	elRu2 = document.body.querySelector('#i_ru');

Random = (min, max) => (Math.floor(Math.random() * (max - min)) + min)
getNewArray = (a, b) => {
	for (let i = 0; i < 4; i++){
	    r = Random(0, 4)
	        if (a.indexOf(b[r]) == -1 ){
	     	a[i] = b[r];
			}
	  		else {
	  			i--
	  		}
	}
 }

 btn.onclick = () => {
 	getNewArray(arFinal, ar1)
  	getNewArray(arFinal2, ar2)
   	getNewArray(arFinal3, ar3)
    getNewArray(arFinal4, ar4)
 	let str = arFinal.join('').toUpperCase(),
 	str2 = arFinal2.join('').toUpperCase(),
 	str3 = arFinal3.join('').toUpperCase(),
 	str4 = arFinal4.join('').toUpperCase();
 	elEn1.textContent = str;
 	elEn2.textContent = str2;
 	elRu1.textContent = str3;
 	elRu2.textContent = str4;
 	console.log(elRu2)
 	arFinal = [];
 	arFinal2 = [];
 	arFinal3 = [];
 	arFinal4 = [];
}
 