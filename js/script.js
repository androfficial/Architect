let isMobile = {
   Android: function() {return navigator.userAgent.match(/Android/i);},
   BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
   iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
   Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
   Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
   any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
document.addEventListener('click', (e) => {
   if (!e.target.closest('.info-header__column')) {
      for (let infoHeaderColumn of document.querySelectorAll('.info-header__column')) {
         infoHeaderColumn.classList.remove('_show');
      }
   }
});
const infoHeader = document.querySelector('.info-header');

if (infoHeader) {
   infoHeader.addEventListener('click', (e) => {
      if (e.target.classList.contains('info-header__current-lang') || e.target.classList.contains('_icon')) {
         let parent = e.target.parentElement;
         if (parent.classList.contains('info-header__column--region')) {
            if (document.querySelector('.info-header__column--lang').classList.contains('_show')) {
               document.querySelector('.info-header__column--lang._show').classList.remove('_show')
            }
            parent.classList.toggle('_show');
         } else {
            if (document.querySelector('.info-header__column--region').classList.contains('_show')) {
               document.querySelector('.info-header__column--region._show').classList.remove('_show')
            }
            parent.classList.toggle('_show');
         }
      }
   });
}
new Swiper('.projects__items', {
	// Optional parameters
	loop: false,
	slidesPerView: 3,
	spaceBetween: 20,
 
	// Navigation arrows
	navigation: {
	  nextEl: '.slider-arrow.paginations-slider__arrow-next',
	  prevEl: '.slider-arrow.paginations-slider__arrow-prev',
	},

 });

new Swiper('.holiday__items', {
	// Optional parameters
	loop: false,
	slidesPerView: 1,
 
	// Navigation arrows
	navigation: {
	  nextEl: '.slider-arrow.paginations-slider__arrow-next',
	  prevEl: '.slider-arrow.paginations-slider__arrow-prev',
	},

});