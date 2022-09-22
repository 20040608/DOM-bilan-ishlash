let arr = ['black', 'blue', 'brown', 'green', 'grey', 'magenta', 'orange', 'pink', 'red', 'white', 'yellow']

let colors = arr[Math.floor(Math.random() * arr.length)]

let body = document.getElementsByTagName('body') 

body[0].style.backgroundColor = (colors)

console.log(colors);