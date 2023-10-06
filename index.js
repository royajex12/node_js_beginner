console.log("hello ajex");

function a(){
    return `${this.Fname} ${this.Lname}`
}
let obj1={Fname:"ajex",Lname:"roy"}
let obj2 ={Fname:"albert",Lname:"jon"}

console.log(a.call(obj1));

function count(){
    let x = 0
    function inc(){
        x++
        return x
    }
    return inc
}
let t =count() 
console.log(t());
console.log(t());
// console.log(count());
