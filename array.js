const myArr = [23, "Adeela" , 11,12]
console.log(myArr[1]);
console.log(myArr.indexOf("Adeela"));

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(6)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(11));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


console.log("A", myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);


const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
const alheros=marvel_heros.concat(dc_heros)
console.log(alheros);


const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherarray=another_array.flat(Infinity)
console.log(real_anotherarray);