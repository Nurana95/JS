"use strict"
const user = {
    name: "Terlan",
    age: 36,
    gender: "female",




}
const user1 = Object.assign({}, user)
const user2 = user
const user3 = user2



///object.assign => metod yeni bir object yaradir ve yeni referans edir 
console.log(user === user1);
//false:ram->heap=>(user=#124 )===(user1=#256) (#124===#256)=>false

console.log(user2 === user1);
//false:ram->heap=>(user2=#124 )===(user1=#256) (#124===#256)=>false

//////////////////////




// true  cunki yeni referans yaratmir eyni referans menimsedir 
console.log(user2 === user)
//true :ram->heap=>(user2=#124 )===(user=#124) (#124===#124)=>true 
console.log(user3 === user)
//true :ram->heap=>(user3=#124 )===(user=#124) (#124===#124)=>true 



