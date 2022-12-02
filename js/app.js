$(function (){
    'use strict' ;
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Botton To Scroll Top 
    scrollButton.click(function () {
        $("html ,body").animate({ scrollTop: 0 }, 600);

    });
});

let sectionSkills = document.querySelector('.my-info');
let progress = document.querySelectorAll('.progress-bar');


window.onscroll = function(){
    if(window.scrollY >= sectionSkills.offsetTop + 30){
        progress.forEach((prog)=>{
            prog.style.width = prog.dataset.width;
        })
    }
}

AOS.init({
    duration:1000
  });