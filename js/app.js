'use strict'

let name = document.getElementById('name')
let Image = document.getElementById('Image')
let release = document.getElementById('release')
let save = document.getElementById('save')
let clear = document.getElementById('clear')



let imgs = ['action.png','adventure.png','animation.png','comedy.png','detective.png','fantasy.png','history.png','horror.png','musical.png','pirate.png','romantic.png','sci-fi.png','war.png','western.png']




function Movies(src, name, year) {
    this.src = src;
    this.name = name;
    this.year = year;
    
  }

  let obj = [];

  let movie = new Movies('imgs', 'name' , 'year');


 
