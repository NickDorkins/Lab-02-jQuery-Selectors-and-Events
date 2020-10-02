'use strict';

function Horn(item) {
this.image = item.image_url;
this.title = item.title;
this.description = item.description;
this.keyword = item.keyword;
this.horns = item.horns;
}

Horn.prototype.render = function() {
  let $photoClone = $('.photo-template').clone();
  $('main').append($photoClone);
  $photoClone.find('h2').text(this.title);
  $photoClone.find('img').attr('src', this.image);
  $photoClone.find('img').attr('alt', this.keyword)
  $photoClone.find('p').text(this.description);
  $photoClone.removeClass('.photo-template');
  $photoClone.attr('class', this.title);
}




Horn.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  }

  $.ajax('../data/page-1.json',ajaxSettings)
    .then(data => {
      console.log(data);
      data.forEach(item => {
        let horn = new Horn(item);
        console.log(horn);
        horn.render();        
      });
    })
}

$(() => Horn.readJson());

console.log('Hello');