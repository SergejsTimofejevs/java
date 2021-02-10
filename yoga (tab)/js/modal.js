let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');
    descrBtn = document.querySelector('.description-btn');

    more.addEventListener('click', modalWind);
    descrBtn.addEventListener('click', modalWind);

function modalWind() {
    overlay.style.display = 'block';
 //  this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';

}

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

