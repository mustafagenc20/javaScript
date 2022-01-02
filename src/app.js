let sayi1 = 10;
// console.log(sayi1);

// object
let student = {id:1, name: "Mustafa"};
sayi1 = "MG";

// function
function save(score=10, ogrenci){
    console.log(ogrenci.name + " : " + score)
}

save(undefined, student);

// arrays
let students = ["Mustafa", "Engin", "Busra"];
// console.log(students)

let students2 = [student, {id: 2, name: "Hakan"}, "Ankara", {city: "Istanbul"}]

// console.log(students2)

// ========== REST PARAMETER ===========
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

// console.log(showProducts(typeof showProducts))

// showProducts(10, ["Apple", "Peer", "Watermelon"])

// ========== SPREAD PARAMETER ===========

let points = [1,2,3,14,50,40,75,6]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H") // ... => parcalara ayiriyor

// ========== DESTRUCTURING PARAMETER ===========
// Eldeki degerlerin degiskenlere aktarilmasi []

let populations = [10000,20000,30000,[40000,100000]]

let [small,medium,high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"drink"}
console.log(category.id)
console.log(category["name"])

let {id,nae} = category
console.log(id)
console.log(name)

