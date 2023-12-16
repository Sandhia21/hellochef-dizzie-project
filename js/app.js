function refreshPage() {
    location.reload();
}

// Add an event listener for the window resize event
window.addEventListener('resize', function () {
    // Use a timeout to avoid triggering the refresh too frequently during resizing
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(refreshPage, 200); // Adjust the timeout value as needed
});



var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}






const blogDiv = document.querySelector('#footer #blog-div');
// console.log(workWithUs);
let screenWidth = window.innerWidth;

if(screenWidth <= 768){
  footerRows();
  settingStarIcons();
  settingReviewOnGoogle();
  settingFollowUs();
  blogDiv.remove();
}

function footerRows(){
  const footerRow = document.querySelector('#footer .row');
  footerRow.style.borderTop = "2px solid rgba(128,128,128,0.3)";
  footerRow.style.borderBottom = "2px solid rgba(128,128,128,0.3)";
  footerRow.classList.add('row-cols-2'); // for setting the rows
  const moreInfo = document.querySelector('#footer #more-info');
  moreInfo.classList.add('text-end');
  const contactUs = document.querySelector('#footer #contact-us');
  contactUs.classList.add('text-end');

}


function settingStarIcons(){
//  variable
const ratingIcons = document.querySelector('#footer #review-on-google .rating-icons');

  ratingIcons.classList.remove('align-items-end'); // for star icons 
  ratingIcons.classList.remove('justify-content-end'); // for start icons
  ratingIcons.classList.add('align-items-center'); // for star icons 
  ratingIcons.classList.add('justify-content-center'); // for star icons 
}

function settingReviewOnGoogle(){
  const reviewOnGoogle = document.querySelector('#footer #review-on-google');
  reviewOnGoogle.parentElement.classList.remove('text-end'); // for reviews 
  reviewOnGoogle.parentElement.classList.add('text-center'); // for reviews 
}

function settingFollowUs(){
  const followUs = document.querySelector('#footer #follow-us');

  followUs.parentElement.parentElement.classList.remove('text-end'); // for follow us icons
  followUs.parentElement.parentElement.classList.add('text-center'); // for follow us icons
}