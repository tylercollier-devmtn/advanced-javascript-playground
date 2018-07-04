const myFunc = () => {
  return new Promise(resolve => {
    console.log('in promise')
    resolve(1)
  })
}
const myFunc2 = () => {
  console.log('myFunc2')
  return 2
}
const myFunc3 = () => {
  throw new Error('error happend in myFunc3')
  console.log('myFunc3')
  return 3
}
const catch1 = () => {
  console.log('catch1')
  return 'catch1'
}
const myFunc4 = () => {
  console.log('myFunc4')
  return 4
}
const catch2 = () => {
  console.log('catch2')
  return 'catch2'
}
myFunc()
  .then(myFunc2)
  .then(myFunc3)
  .catch(catch1)
  .then(myFunc4)
  .catch(catch2)

