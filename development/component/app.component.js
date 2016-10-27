"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_config_1 = require('../appconfig/app.config');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this._testTimer = true;
        this.timerfun = function (event) {
            console.log(_this._testTimer);
            _this._testTimer = !_this._testTimer;
        };
        this.onResize();
        // var timer = setInterval(this.timerfun,2000)
    }
    AppComponent.prototype.onResize = function () {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var newWidth;
        var newHeight;
        var newGameScalex, newGameScaley;
        var leftOffset = 0;
        var topOffset = 0;
        // Are the window dimensions WIDER than the game dimensions?
        var wider = windowWidth / windowHeight > app_config_1.AppConfig.DEFAULT_GAME_WIDTH / app_config_1.AppConfig.DEFAULT_GAME_HEIGHT ? true : false;
        // If the current window dimensions are WIDER than the game dimensions then WINDOW HEIGHT is our limiting size
        //if (wider) {
        newHeight = windowHeight;
        newWidth = windowHeight * (app_config_1.AppConfig.DEFAULT_GAME_WIDTH / app_config_1.AppConfig.DEFAULT_GAME_HEIGHT);
        newGameScaley = windowHeight / app_config_1.AppConfig.DEFAULT_GAME_HEIGHT;
        leftOffset = -((app_config_1.AppConfig.DEFAULT_GAME_WIDTH - windowWidth) / 2);
        //}
        //else {
        newWidth = windowWidth;
        newHeight = windowWidth * (app_config_1.AppConfig.DEFAULT_GAME_HEIGHT / app_config_1.AppConfig.DEFAULT_GAME_WIDTH);
        newGameScalex = windowWidth / app_config_1.AppConfig.DEFAULT_GAME_WIDTH;
        topOffset = -((app_config_1.AppConfig.DEFAULT_GAME_HEIGHT - windowHeight) / 2);
        //}
        /*if(windowHeight>windowWidth){
            newHeight = windowHeight;
            newWidth = windowWidth;
            leftOffset = 0;
            topOffset = 0;
            newGameScalex = 1;
            newGameScaley = 1;
        }*/
        this.resizeWindow(newGameScalex, newGameScaley, newWidth, newHeight, leftOffset, topOffset);
    };
    AppComponent.prototype.resizeWindow = function (newGameScaleX, newGameScaleY, newWidth, newHeight, offsetLeft, offsetTop) {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        //var _left = -(AppConfig.DEFAULT_GAME_WIDTH-newWidth)/2;
        //var _top = -(AppConfig.DEFAULT_GAME_HEIGHT-newHeight)/2;
        this._containerWidth = app_config_1.AppConfig.DEFAULT_GAME_WIDTH;
        this._containerHeight = app_config_1.AppConfig.DEFAULT_GAME_HEIGHT;
        if (windowHeight > windowWidth) {
            this._containerWidth = windowWidth;
            this._containerHeight = windowHeight;
        }
        this._containerTop = offsetTop;
        this._containerLeft = offsetLeft;
        this._containerScaleX = newGameScaleX;
        this._containerScaleY = newGameScaleY;
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div style=\"position: absolute;background-color:red\" [ngStyle]=\"{'height': _containerHeight+'px','width':_containerWidth+'px','left':_containerLeft+'px','top':_containerTop+'px','transform':'scale('+ _containerScaleX +','+ _containerScaleY +')'}\">\n<my-component></my-component>\n<my-component2></my-component2>\n<betbar-button></betbar-button>\n<label-component *ngIf=\"_testTimer == true\"></label-component>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
//# sourceMappingURL=app.component.js.map