$(document).ready(() => {
    $(".card").slice(0, 6).show();
    if ($(".moreCard:hidden").length != 0) {
        $(".load-more").show();
    }
    $(".load-more").click((e) => {
        e.preventDefault()
        if ($(".card:hidden").length == 0) {
            $(".load-more").hide();
            $(".text").show()
        }
        $(".card:hidden").slice(0, 12).fadeIn();
    });
});