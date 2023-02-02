/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(length, height, width) {
  let output = []
  let area = 2 * ((length*width) + (length*height) + (width*height))
  let volume = width*height*length
  output.push(area)
  output.push(volume)
  return output
}