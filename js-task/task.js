'use strict'
// -------------function to generate random color code-------------

// ex-1
function generate() {
    return "#" + Math.random().toString(16).substring(2,8);
}
const color1 = generate();
const color2 = generate();
console.log(color1);
console.log(color2);

// ex-2

function colorgenerate() {
    let value = '0123456789abcdef';
    let color = '#';
    for(let i=0;i<6;++i){
        let gerenatevalue = Math.floor(Math.random()*16);
       color += value[gerenatevalue];

    }
    return color;
}
let clr1 = colorgenerate();
let clr2 = colorgenerate();
let clr3 = colorgenerate();
console.log(clr1);
console.log(clr2);
console.log(clr3);



//---------------- Normalize(flattern) given (nested )array---------------
let y =[1,[2,3],[4,[5,6]],7];
// let flatArr = [].concat(...arr);
// let flat = [].concat.apply([],arr)
// console.log(flat);

/*let  flatmethod = y.flat(Infinity)
console.log(flatmethod);*/

function flatten (arr){
    let flatarry =[];
    for (let i = 0;i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flatarry = flatarry.concat(flatten(arr[i]));

        }
        else{
            flatarry.push(arr[i]);
        }
    }
    return flatarry
}
console.log(flatten(y));



// --------------remove duplicate---------------
 const x =[1,2,3,4,5,2,2,1];
 
 console.log([...new Set(x)]);


//  ----------------count occurences-------------

const z = [1,2,3,4,5,2,2,3];
const count = {};
z.forEach(ele => {
    if(count[ele]){
        count[ele] += 1;
    }
    else{
        count[ele] = 1;
    }
});
console.log(count);


