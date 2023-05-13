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

