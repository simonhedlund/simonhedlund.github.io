/*=================== DEAR EXPLORER ===================//
  WASSAP NNERD. Looking at code n stuff!
  If you are searching for how I rotate divs
  The following css row is manipulated with jquery:
  transform: translateZ(30px) perspective(600px) rotateX(mouseY) rotateY(mouseX);
  Best Regards, Simon.
//====================================================*/
"use strict";
var EventListener = (function () {
    function EventListener(iface) {
        var _this = this;
        this.onMouseMove = function (e) {
            var rotX = -20 * (e.pageY) / window.innerHeight + window.innerHeight * 0.01;
            var rotY = 30 * (e.pageX) / window.innerWidth - window.innerWidth * 0.015;
            $("#phone").css({ 'transform': ' perspective(600px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)' });
        };
        this.onMouseDown = function (e) {
            var d = new Date();
            //console.log(e.target);
            switch (e.target.value) {
                case "index":
                    _this._interface.setContext(e.target.value);
                    break;
                case "reel":
                    _this._interface.setContext(e.target.value);
                    break;
                case "contact":
                    _this._interface.setContext(e.target.value);
                    break;
                case "resume":
                    _this._interface.setContext(e.target.value);
                    break;
                case "Save Contact":
                    _this._interface.setContext("contact");
                    break;
                case "Give Blood":
                    window.open('https://vimeo.com/204744576', '_blank');
                    break;
                case "SPH Simulation":
                    window.open('https://github.com/Hedlundaren/vattenoverhuvudet', '_blank');
                    break;
                case "The Lake":
                    window.open('https://github.com/Hedlundaren/theLake', '_blank');
                    break;
                case "Web Ocean":
                    window.open('http://hedlundaren.github.io/displacementWater/', '_blank');
                    break;
                case "Temojano":
                    window.open('https://github.com/Grahnen92/Temoji', '_blank');
                    break;
                case "Cloth Simulation":
                    window.open('https://github.com/Hedlundaren/cloth-simulation', '_blank');
                    break;
                case "Galaxy Goose":
                    window.open('http://jonathangrangien.se/myGalaxy/', '_blank');
                    break;
                case "Particle Water":
                    window.open('http://hedlundaren.github.io/SPHwater/', '_blank');
                    break;
                case "Hack for Sweden":
                    window.open('http://sofiekhullar.github.io/hack4swe/', '_blank');
                    break;
                case "Looking for Host":
                    window.open('https://www.youtube.com/watch?v=xwJPhZyZ-6A', '_blank');
                    break;
                case "Rob's Vengeance":
                    window.open('https://www.youtube.com/watch?v=Hiiruh8nHKQ', '_blank');
                    break;
                case "Web Clock":
                    window.open('http://hedlundaren.github.io/clock/', '_blank');
                    break;
                case "Fireworks":
                    window.open('http://hedlundaren.github.io/fireworks2/', '_blank');
                    break;
                case "Path Finder":
                    window.open('https://github.com/Hedlundaren/hide-and-seek/', '_blank');
                    break;
                case "facebook":
                    window.open('https://www.facebook.com/sermon.hedlund', '_blank');
                    break;
                case "soundcloud":
                    window.open('https://soundcloud.com/simon-hedlund', '_blank');
                    break;
                case "instagram":
                    window.open('https://www.instagram.com/simonboi/', '_blank');
                    break;
                case "linkedin":
                    window.open('https://www.linkedin.com/in/simon-hedlund-a1a656128/', '_blank');
                    break;
                case "github":
                    window.open('https://github.com/Hedlundaren', '_blank');
                    break;
                case "facebook":
                    window.open('https://www.facebook.com/sermon.hedlund', '_blank');
                    break;
                case "spotify":
                    window.open('https://open.spotify.com/user/hedlundaren', '_blank');
                    break;
            }
        };
        this.onKeyDown = function (e) {
            if (e) {
                switch (e.key) {
                    case "1":
                        _this._interface.setContext("index");
                        break;
                    case "2":
                        _this._interface.setContext("reel");
                        break;
                    case "3":
                        _this._interface.setContext("contact");
                        break;
                    case "4":
                        _this._interface.setContext("resume");
                        break;
                }
            }
        };
        this._interface = iface;
        window.addEventListener('mousedown', this.onMouseDown, false);
        window.addEventListener('mousemove', this.onMouseMove, false);
        window.addEventListener('keydown', this.onKeyDown, false);
    }
    return EventListener;
}());
