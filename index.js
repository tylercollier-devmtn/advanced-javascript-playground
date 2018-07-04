function double(x) {
  if (!Number.isInteger(x)) {
    throw new Error(`${x} is not an integer!`)
  }
  return x * 2;
}

function plus5(x) {
  return double(x + 5);
}

let result
try {
  plus5('bryson')
} catch (error) {
  console.log('WE CAUGHT THE ERROR!', error)
}

console.log('-------------- result', result);





// function sendEmailToUser(email) {
//   if (!axios.makeEmailCall()) {
//     throw new Error('Failed to send email')
//   }
// }

// function submit() {
//   // const email = // data from form;
//   let fileContents;
//   let fileHandle;
//   try {
//     fileHandle = fs.openFile('/usr/local/bin/asdf')
//     try {
//       fileContents = fileHandle.readData()
//     } catch (error) {
  
//     }
//   } catch (error) {
//     this.setState({ errorMessage: "Tried to send email but it failed" })
//   }
  
//   try {
//     doOtherThingWithFile(fileHandle)
//   } catch (error) {

//   }
// }