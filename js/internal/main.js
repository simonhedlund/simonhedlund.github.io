/*=================== DEAR EXPLORER ===================//
  WASSAP NNERD. Looking at code n stuff!
  If you are searching for how I rotate the phone
  The following css row is manipulated with jquery:
  transform: translateZ(30px) perspective(600px) rotateX(mouseY) rotateY(mouseX);
  Best Regards, Simon.
//====================================================*/
"use strict";
var Main = (function () {
    function Main() {
        this._eventListener = new EventListener(this);
        this.setContext("reel");
        $("img.lazy").lazyload();
    }
    Main.prototype.setContext = function (id) {
        this.setActiveMenuBtn(id);
        switch (id) {
            case "index":
                this.removeContext();
                for (var i = 1; i < 13; i++) {
                    $("#row-counter").append("<p class='row-count-number'>" + i + "</p> <br>");
                }
                $("#code").append("<p class='comment'> /*===============  Simon Hedlund ==================// </p> <br>");
                $("#code").append("<p class='comment'> &nbsp I am a Computer Graphics enthusiast </p> <br>");
                $("#code").append("<p class='comment'> &nbsp currently looking for work. </p> <br>");
                $("#code").append("<p class='comment'> //===============================================*/ </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='comment'> #include </p> <p class='orange'> &nbsp&ltiostream> </p>  <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='white'> int</p><p class='blue'> &nbspmain </p><p class='white'>() { </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cout << </p> <p class='orange'>&nbsp&quotMy name is Simon, and I like polygons.&#92n&quot </p> <p class='white'>; </p> <br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cout << </p> <p class='orange'>&nbsp&quotTip: Use keys 1, 2, 3, 4 to navigate around the page.&#92n&quot </p> <p class='white'>; </p> <br>");
                $("#code").append("<p class='blue'> &nbsp&nbspreturn </p><p class='white'>&nbsp0;</p><br>");
                $("#code").append("<p class='white'>} </p> <br>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-giveblood' ><input class='inner-cell inner-cell-text' type='button' value='Give Blood'/></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-sphsimulation' ><input class='inner-cell inner-cell-text' type='button' value='SPH Simulation'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-thelake' ><input class='inner-cell inner-cell-text' type='button' value='The Lake'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-webocean' ><input class='inner-cell inner-cell-text' type='button' value='Web Ocean'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-temojano' ><input class='inner-cell inner-cell-text' type='button' value='Temojano'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-clothsimulation' ><input class='inner-cell inner-cell-text' type='button' value='Cloth Simulation'/></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-hackforsweden' ><input class='inner-cell inner-cell-text' type='button' value='Hack for Sweden'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-galaxygoose' ><input class='inner-cell inner-cell-text' type='button' value='Galaxy Goose'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-particlewaterweb' ><input class='inner-cell inner-cell-text' type='button' value='Particle Water'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-lookingforhost' ><input class='inner-cell inner-cell-text' type='button' value='Looking for Host'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-robsvengeance' ><input class='inner-cell inner-cell-text' type='button' value='Rob&#39s Vengeance'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-pathfinder' ><input class='inner-cell inner-cell-text' type='button' value='Path Finder'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-fireworks' ><input class='inner-cell inner-cell-text' type='button' value='Fireworks'></div>");
                $("#right-content").append(" <div class='right-content-cell lazy' id='cell-webclock' ><input class='inner-cell inner-cell-text' type='button' value='Web Clock'></div>");
                break;
            case "reel":
                this.removeContext();
                for (var i = 1; i < 27; i++) {
                    $("#row-counter").append("<p class='row-count-number'>" + i + "</p> <br>");
                }
                $("#right-content").append(" <iframe id='reelvideo' src='https://player.vimeo.com/video/199848802?title=0&amp;byline=0&amp;portrait=0&amp;color=d6744a&amp;autoplay=1' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
                $("#code").append("<p class='comment'> /*================  Demo Reel ===================// </p> <br>");
                $("#code").append("<p class='comment'> &nbsp Projects I have participated in, 2015-2017. </p> <br>");
                $("#code").append("<p class='comment'> &nbsp Animated shorts, OpenGL, Web. </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='comment'> &nbsp Launching small projects <3. </p> <br>");
                $("#code").append("<p class='comment'> //===============================================*/ </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='comment'> #include </p> <p class='orange'> &nbsp&ltiostream> </p>  <br>");
                $("#code").append("<p class='comment'> #include </p> <p class='orange'> &nbsp&ltstring> </p>  <br>");
                $("#code").append("<p class='comment'> #include </p> <p class='orange'> &nbsp&quotContact.h&quot </p>  <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='white'> int</p><p class='blue'> &nbspmain </p><p class='white'>() { </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='cyan'>&nbsp&nbspContact</p><p class='white'> &nbsp*c = </p><p class='blue'>&nbspnew </p><p class='cyan'>&nbspContact </p> <p class='white'>(); </p><br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd:: </p> <p class='cyan'>string </p> <p class='white'> &nbspanswer; </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cout << </p> <p class='orange'>&nbsp&quotMy name is Simon, and I like polygons.&#92n&quot </p> <p class='white'>; </p> <br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cout << </p> <p class='orange'>&nbsp&quotDo you like polygons (y/n):&nbsp&quot </p> <p class='white'>; </p> <br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cin >> answer;  </p> <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='blue'> &nbsp&nbspif </p><p class='white'>&nbsp(answer == </p> <p class='orange'>&nbsp&quoty&quot</p>");
                $("#code").append("<p class='white'>)&nbsp</p><button class='save-button white' value='Save Contact'>c->save()</button><p class='white'>;</p><br>");
                $("#code").append("<p class='blue'> &nbsp&nbspelse&nbsp </p><a href='https://goo.gl/SsAhv' target='_blank'class='white'>c->discard()</a> <p class='white'>;</p><br>");
                $("#code").append("<br>");
                $("#code").append("<p class='blue'> &nbsp&nbspreturn </p><p class='white'>&nbsp0;</p><br>");
                $("#code").append("<p class='white'>} </p> <br>");
                break;
            case "contact":
                this.removeContext();
                for (var i = 1; i < 15; i++) {
                    $("#row-counter").append("<p class='row-count-number'>" + i + "</p> <br>");
                }
                $("#code").append("<p class='comment'> #include </p> <p class='orange'> &nbsp&quotContact.h&quot </p>  <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='blue'> void&nbsp </p> <p class='cyan'> Contact </p><p class='white'> ::save(){ </p>  <br>");
                $("#code").append("<br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cout << </p> <p class='orange'>&nbsp&quotsermonhedlund@gmail.com&quot </p> <p class='white'>&nbsp<< std::endl; </p> <br>");
                $("#code").append("<p class='white'>&nbsp&nbspstd::cout << </p> <p class='orange'>&nbsp&quot+46 76815 1570&quot </p> <p class='white'>&nbsp<< std::endl; </p> <br>");
                $("#code").append("<p class='blue'> &nbsp&nbspthis </p> <p class='white'>->reply();</p> <br>");
                $("#code").append("<p class='white'> } </p><br>");
                $("#code").append("<br>");
                $("#code").append("<p class='blue'> void&nbsp </p> <p class='cyan'> Contact </p><p class='white'> ::discard(){ </p>  <br>");
                $("#code").append("<p class='blue'> &nbsp&nbspthis </p> <p class='white'>-></p> <a href='https://goo.gl/SsAhv' target='_blank' class='white'>link()</a><p class='white'>;</p><br>");
                $("#code").append("<p class='white'> } </p><br>");
                $("#right-content").append(" <div src='../img/hack4swe.jpg' id='phone'> <div class='phone-layer' id='phone-layer-1'>  </div> <div class='phone-layer' id='phone-layer-2'> </div> <div class='phone-layer' id='phone-layer-3'> </div> </div>");
                $("#phone-layer-2").append("<div class='phone-cell' id='phone-cell-1'/>");
                $("#phone-layer-2").append("<div class='phone-cell' id='phone-cell-2'/>");
                $("#phone-layer-2").append("<div class='phone-cell' id='phone-cell-3'/>");
                $("#phone-layer-2").append("<div class='phone-cell' id='phone-cell-4'/>");
                $("#phone-layer-2").append("<div class='phone-cell' id='phone-cell-5'/>");
                $("#phone-layer-2").append("<div class='phone-cell' id='phone-cell-6'/>");
                $("#phone-cell-1").append("<div class='phone-button' id='phone-icon-github' > <input class='phone-button-inner' type='button' value='github'/></div>");
                $("#phone-cell-2").append("<div class='phone-button' id='phone-icon-linkedin' > <input class='phone-button-inner' type='button' value='linkedin'/></div>");
                $("#phone-cell-3").append("<div class='phone-button' id='phone-icon-facebook' > <input class='phone-button-inner' type='button' value='facebook'/></div>");
                $("#phone-cell-4").append("<div class='phone-button' id='phone-icon-instagram' > <input class='phone-button-inner' type='button' value='instagram'/></div>");
                $("#phone-cell-5").append("<div class='phone-button' id='phone-icon-soundcloud' > <input class='phone-button-inner' type='button' value='soundcloud'/></div>");
                $("#phone-cell-6").append("<div class='phone-button' id='phone-icon-spotify' > <input class='phone-button-inner' type='button' value='spotify'/></div>");
                $("#phone-layer-2").append("<p class='phone-text'> sermonhedlund@gmail.com</p>");
                break;
            case "resume":
                window.open('https://drive.google.com/file/d/0B27xknhl0xrNUWIwSXFzYXF2R3c/preview', '_blank');
                this.setContext("contact");
                break;
        }
    };
    Main.prototype.removeContext = function () {
        $("#right-content").children("*").remove();
        $("#code").children("*").remove();
        $("#row-counter").children("*").remove();
    };
    Main.prototype.setActiveMenuBtn = function (id) {
        var element = document.getElementById(id);
        $(".menu-btn").removeClass("menu-btn-active");
        $(element).addClass("menu-btn-active");
    };
    Main.prototype.start = function () {
        var fadeTime = 100;
        var toggleTime = 100;
        // // mouse over
        // $(".menu-btn").mouseover(function(){
        //   $(this).find(".close-tab-symbol").toggle(toggleTime);
        // });
        // // mouse out
        // $(".menu-btn").mouseleave(function(){
        //   $(this).find(".close-tab-symbol").toggle(toggleTime);
        // });
        $(".right-content-cell").mouseover(function () {
            $(this).find(".cell-description").addClass("cell-description-active");
        });
        // mouse out
        $(".right-content-cell").mouseleave(function () {
            $(this).find(".cell-description").removeClass("cell-description-active");
        });
    };
    return Main;
}());
// When window has loaded
window.onload = function () {
    var main = new Main();
    main.start();
};
