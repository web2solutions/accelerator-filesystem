const fs = require('fs')
const path = require('path')
// const root = path.resolve('./')
fs.readdir(__dirname, (error, files) => {
  if (error) {
    return console.error(error)
  }
  console.log(files)
})
