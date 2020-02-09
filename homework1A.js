$(document).ready(function(){
$("button").click(function(){
    var header = $(".header");
    header.css({"fontSize": '60px'}, "slow");
    header.css({"color": "rgba(150, 150, 150, 0.986)"});
    header.animate({fontSize: '30px'}, "slow");
    $(".TextWrap").css({"border": "2px solid rgb(17, 2, 2)"})
    
    
});
}); 