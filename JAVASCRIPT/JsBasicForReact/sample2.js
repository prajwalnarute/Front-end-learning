// normal function
function msg1(){
    console.log("hello reacts")
}

function msg2(){
    console.log("hello friends")
}

// Object
let emp = {
    name:"rocky",
    age:33
}

let emp1 = [ {
    name:"bhai",
    age:34

},
{
    name:"raj",
    age:40,
    address:"banglore"
}]

// Arrow Function
let fun1 = () =>{
    console.log("arrow function");
}
//export default msg1;

export {msg1, msg2, emp, fun1, emp1};