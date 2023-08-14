// run the program

const fs = require('fs')
const FileSaver = require('file-saver')
const Blob = require('buffer')

function createVariables (input) {
  let count = 0
  const allLines = input.split(/\r\n|\n/)
  console.log(allLines)
  allLines.forEach((line) => {
    if (line.length === 1 || line.charAt(0) === line.charAt(line.length - 1)) {
      count++
    }
  })
  return count
}

fs.readFile('C:/Users/marca/Desktop/input.txt', (err, data) => {
  if (err) throw err
  const input = data.toString()
  createVariables(input)
  const blob = new Blob([`count: ${createVariables(input)}`], { type: 'text/plain;charset=utf-8' })
  FileSaver.saveAs(blob, 'testfile1.txt')
})
