//animation for image homepage
var section = document.querySelector('.section-has-animation');
var elementsToAnimate = document.querySelectorAll('.image-animation-scroll');
var elementsToAnimateVertical = document.querySelectorAll('.image-animation-scroll-vertical');
if (section && elementsToAnimate.length > 0) {

    function updateScrollAnimation() {
        var sectionY = section.getBoundingClientRect().top;
        var intDistantSmall = parseInt(sectionY/10);
        var intDistantMedium = parseInt(sectionY/3);

        if (sectionY > -325 && sectionY < -205) {
            elementsToAnimate.forEach(function(element) {
                element.style.transform = 'translate3d(-100px,' + (intDistantMedium-150) + 'px,0px)';
            });
            elementsToAnimateVertical.forEach(function(element) {
              element.style.transform = 'translateY(' + intDistantSmall + 'px)';
            });
        }
    }
    window.addEventListener('scroll', updateScrollAnimation);
    updateScrollAnimation();
} else {
}

//custome nav slide
document.getElementById('preBtn').addEventListener('click', function() {
    const buttons = document.querySelectorAll('.flickity-prev-next-button.previous');
    
    if (buttons.length > 0) {
        buttons[0].click();
    }
  });
  
  document.getElementById('nextBtn').addEventListener('click', function() {
    const buttons = document.querySelectorAll('.flickity-prev-next-button.next');
    
    if (buttons.length > 0) {
        buttons[0].click();
    }
  });