

$(".get-quote").on("click", () => {
    getInfo();
});
$(".clear-quote").on("click", () => {
    clearQuote();
});

var clearQuote = () => {
    $(".quote-title").text("Quote Title");
    $(".quote-text").text("Quote Text");
    $(".quote-category").text("Quote Category");
};
var getInfo = () =>{
    var request = new XMLHttpRequest();
    request.open('GET', 'https://talaikis.com/api/quotes/random/', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        $(".quote-title").text(data.author);
        $(".quote-text").text(data.quote);
        $(".quote-category").text("Category: " + data.cat);
    };
    request.send();

        
};
