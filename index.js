$("#start").on( "click", function() {
    $( "#text1" ).fadeOut( 800, function() {
        $( "#text2" ).fadeIn( 800, function() {
            $("#start").animate ({
                width: "toggle", height: "toggle", opacity: "0"}, 800
            );
            setTimeout(() => {
                $("#continue").css ("display", "flex")
            }, 1000);
        });
    });
});

$("#continue").on( "click", function() {
    window.location = "home.html";
});

$(".grid-item-g").on( "mouseover", function() {
    let id = $(this).attr('id');
    $("#" + id).css ( "filter", "none" );
});

$("#burger-menu").on( "click", function() {
    var popup = document.getElementById("burger-menu");
    if (popup.classList.contains("black")) {
        popup.classList.toggle("white");
    };
    $(".nav-sections").toggle (400, function() {});
    $(".nav-sections").css ("display", "block");
});

$("#book-button").on( "click", function() {
    $(".content").css ("display", "none");
    $(".content2").css ("display", "block");
});

$("#submit").on( "click", function() {
    $(".content2").css ("display", "none");
    $(".content3").css ("display", "block");
});

