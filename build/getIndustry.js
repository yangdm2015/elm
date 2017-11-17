/**
 * Created by yangshan on 2017/9/26.
 */
let fs = require('fs')
// let {originalIndustry} = require('./industry-simple')
let {originalIndustry} = require('./industry')
let cascade = []
let fIndustry = []
exports.f = function () {
  // console.log(' originalIndustry instanceof Array = ', originalIndustry instanceof Array)
  // console.log(' originalIndustry.forEach = ', originalIndustry.forEach)
  // finalIndustry = originalIndustry
  fIndustry = genNewIndustry(cascade, originalIndustry)
  console.log('genNewIndustry done, fIndustry = ', fIndustry)
  saveData(fIndustry)
}

function genNewIndustry (cascade, currentIndustry) {
  let finalIndustry = []
  // console.log(' currentIndustry instanceof Array = ', currentIndustry instanceof Array)
  // console.log(' currentIndustry.length = ', currentIndustry.length)
  currentIndustry.forEach(item => {
    let parent = ''
    if (cascade.length > 1) {
      parent = cascade[cascade.length - 1]
    } else {
      parent = 0
    }
    let newItem = {name: item.label, value: item.value, parent: parent}

    finalIndustry.push(newItem)
    // console.log('item.children && item.children.length > 0 ? ',item.children && item.children.length > 0)
    if (item.children && item.children.length > 0) {
      cascade.push(item.value)
      let tmp = genNewIndustry(cascade, item.children)
      // console.log('tmp.length = ', tmp.length)
      finalIndustry = finalIndustry.concat(tmp)
      cascade.pop()
    }
  })
  // console.log(' finalIndustry.length = ', finalIndustry.length)
  return finalIndustry
}
function saveData (dataToSave) {

  var t = JSON.stringify(dataToSave)
  return fs.writeFile('./out-put-files/data1.js', t, (err) => {
    console.log('ok!')
    console.log('err =', err)
  })
}
