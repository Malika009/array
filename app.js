// array methods
//push, pop, shift, unshift

//push
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log (fruits);

// // pop
// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// fruit.pop();
// console.log(fruit);

// // shift
// const colors = ["yellow", "red", "black", "blue"];
// colors.shift();
// console.log(colors);

// // unshift

// const color = ["yellow", "red", "black", "blue"];
// color.unshift("green");
// console.log(color);



//map, filter, reduce

//map
// const nums =[3,12,7,9];
// const mapNums=nums.map((n) => n*2);
// console.log(mapNums);

// //filter
// const filterNums=nums.filter((n) => n>5);
// console.log(filterNums);

// //reduce
// const reduceNums=nums.reduce((n, total)=> n+total,0);
// console.log(reduceNums);


//map, filter, reduce 2 болук

const fruits=['banana', 'orANge','apple', 'kiwi', 'orange']

const upperFruits = fruits.map((fr)=>{
    console.log(fr, 'fr');
    return fr.charAt(0).toUpperCase()+fr.slice(1).toLowerCase();
});
console.log(upperFruits);

const minFruits=fruits.filter((fr)=>fr!=='orange')
console.log(minFruits)

const letters=fruits.reduce((total, fr)=>{
    console.log(total, "total");
    console.log(fr, fr.length);
    return  total+fr.length
},0)
console.log(letters);

const students=[
    {id:1, name:'John', age:16},
    {id:2, name:'Jane', age:17},
    {id:3, name:'Bob', age:20}
]
const mature=students
.filter((stud)=>stud.age<18)
.reduce((total, st)=>total+st.age,0)
console.log(mature);

const totalAge=students.reduce((total,student)=>student.age+total,0)
console.log(totalAge)