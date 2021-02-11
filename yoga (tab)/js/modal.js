let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descrBtn = document.querySelectorAll('.description-btn');

more.addEventListener('click', modalWind);
  for(let i = 0; i < descrBtn.length; i++) {
    descrBtn[i].addEventListener('click', modalWind);
  }
      

 
function modalWind() {
    overlay.style.display = 'block';
   this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';

}

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

 

   

