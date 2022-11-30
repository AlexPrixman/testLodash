let listObj = ({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7})
function testLoDash(listObj, testObj){
    delete listObj[testObj]
    return listObj
}
console.log(listObj)

testLoDash(listObj,'g')

console.log(listObj)


