var element = document.getElementById("counterWrapper");
var innerElement = document.getElementById("startSlide1");

function scrollTracking() {
    var test = 1;
    console.log("scroll");

    var scrollingWidth = element.scrollWidth;
    var scrollingDepth = innerElement.getBoundingClientRect();

    console.log(scrollingWidth);
    console.log(scrollingDepth.left);
}