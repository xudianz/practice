var a = {name:'我', sex:'男'}
var b = {name:'你', sex:'女', address:'中国'}

function Fn (obj1, obj2) {
  for (var key1 in obj1) {
   for (var key2 in obj2) {
     if (key1 == key2) {
        obj1[key1] = obj2[key2]
      } 
    }
  }
  return obj1
}
console.log(Fn(a, b))

function Cat (name) {
  this.name = name
}
Cat.sex = '女'
Cat.prototype.age = 10
var cat = new Cat('xiaogou')
console.log(cat.name, cat.sex, cat.age, cat.hasOwnProperty('age'), cat.constructor)

var str = 'abcdaaadcccccc'
function fn (str) {
  var len = str.length, obj = {}
  for (var i = 0; i < len; i++) {
    var key = str[i]
    if (!obj[key]) {
      obj[key] = 1
    } else {
      obj[key]++
    }
  }
  console.log(obj)
  var max = -1, max_key = ''
  for (var j in obj) {
    if (max < obj[j]) {
      max = obj[j]
      max_key = j
    }
  }
  console.log(max_key + '为最多出现的字符，出现次数为' + max)
}
fn(str)

