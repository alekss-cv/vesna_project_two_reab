
//slider doctors section
$(document).ready(function (){
    $('.single-item').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:300,
        easing:'ease',
        autoplay:false,
        autoplaySpeed:4000,
    })
})


//slider reviews section
$(document).ready(function (){
    $('.single-item_reviews').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:2,
        slidesToScroll:1,
        speed:300,
        easing:'ease',
        autoplay:false,
        autoplaySpeed:4000,
    })
})



$('.single-item_reviews').slick({
    slidesToShow: 2,
    dots:true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});













