let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());

//let myCreatedDate = new Date(2001, 7, 7)
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2024-08-02")
console.log(myCreatedDate.toLocaleTimeString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "narrow"
});
