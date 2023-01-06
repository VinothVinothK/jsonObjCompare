let obj1 = {name: "person 1",
            age:"5",
           };
let obj2 = {age:"5",
            name: "person 1 ",
           };

const obj1keys = Object.keys(obj1);
const obj2keys = Object.keys(obj2);

if (obj1keys.length ==obj2keys.length){
    console.log("True");
}else{
    console.log("false");

}
