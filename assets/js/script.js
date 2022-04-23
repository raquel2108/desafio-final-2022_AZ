$(function(){
    // métodos de jQuery...
    $("a").on("click",function (event){
        if (this.hash !=="") {
            event.preventDefault();

            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top-100
            }, 800, function () {
                
                        });
        }

    });
});
