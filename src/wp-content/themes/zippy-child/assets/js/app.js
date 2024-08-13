document.addEventListener('DOMContentLoaded', function() {
  var section = document.querySelector('.section-has-animation');
  var elementsToAnimate = document.querySelectorAll('.image-animation-scroll');
  var elementsToAnimateVertical = document.querySelectorAll('.image-animation-scroll-vertical');
  if (section && elementsToAnimate.length > 0) {
      // Hàm để cập nhật vị trí translateY khi cuộn
      function updateScrollAnimation() {
          var sectionY = section.getBoundingClientRect().top;
          var intDistantSmall = parseInt(sectionY/10);
          var intDistantMedium = parseInt(sectionY/3);
          // Áp dụng translateY cho các phần tử với class image-animation-scroll
          if (sectionY > -325 && sectionY < -205) {
            elementsToAnimate.forEach(function(element) {
                element.style.transform = 'translate3d(-100px,' + (intDistantMedium-150) + 'px,0px)';
            });
            elementsToAnimateVertical.forEach(function(element) {
              element.style.transform = 'translateY(' + intDistantSmall + 'px)';
          });
          }
          console.log(sectionY);
      }

      // Gọi hàm khi cuộn trang
      window.addEventListener('scroll', updateScrollAnimation);
      
      // Gọi hàm ngay khi trang vừa tải
      updateScrollAnimation();
  } else {
      console.log('Không tìm thấy phần tử có class section-has-animation hoặc image-animation-scroll');
  }
});
