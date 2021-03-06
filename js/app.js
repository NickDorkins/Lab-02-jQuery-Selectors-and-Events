'use strict';

// Global Variables
let hornArr1 = [];
let hornArr2 = [];
let keyWordArr1 = [];
let keyWordArr2 = [];

// Constructor Function
function Horn(obj) {
this.src = obj.image_url;
this.name = obj.title;
this.description = obj.description;
this.alt = obj.keyword;
this.horns = obj.horns;
// this.page = page;
}



// Horn.prototype.render = function() {
//   let $photoClone = $('.photo-template').clone();
//   $('main').append($photoClone);
//   $photoClone.find('h2').text(this.title);
//   $photoClone.find('img').attr('src', this.image);
//   $photoClone.find('img').attr('obj', this.keyword)
//   $photoClone.find('p').text(this.description);
//   $photoClone.removeClass('.photo-template');
//   $photoClone.attr('class', this.title);
// }

function render(obj) {
  console.log('render');
  let hornObj = {
    name: obj.name,
    src: obj.src,
    description: obj.description,
    alt: obj.keyword
  };
  let $template = $('#template').html();
  let render = Mustache.render($template, hornObj);
  $('section').append(render);
}


Horn.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  }
  
  $.ajax('../data/page-01.json',ajaxSettings).then(data => {
    console.log(data);
    data.forEach(item => {
      let horn = new Horn(item);
      render(horn);
      console.log(horn);       
    });

  })
}

$(() => Horn.readJson());

// console.log('Hello');


function filter(obj) {
  console.log('filter');
  let hornFilter = {
    alt: obj.keyword
  };
  let $template = $('#template').html();
  let filter = Mustache.render($template, hornFilter);
  $('selection').append(filter);
}
