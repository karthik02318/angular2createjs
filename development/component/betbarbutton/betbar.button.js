/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />
/// <reference path="../../../tsdefnition/assets/commonasset.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var CStage = require("../../creatjscontainer/Cstage");
var BetBarButton = (function (_super) {
    __extends(BetBarButton, _super);
    function BetBarButton() {
        var _this = this;
        _super.call(this);
        this.buttonDownHandler = function (event) {
            console.log("buttonDownHandler");
            _this._cashierButton.cashierBtn.gotoAndStop("down");
            _this.update();
        };
        this.buttonPressMoveHandler = function (event) {
            console.log("buttonPressMoveHandler");
            _this._cashierButton.gotoAndStop("down");
            _this.update();
        };
        this.buttonOverHandler = function (event) {
            console.log("buttonOverHandler");
            _this._cashierButton.cashierBtn.gotoAndStop("over");
            _this.update();
        };
        this.buttonOutHandler = function (event) {
            console.log("buttonOutHandler");
            _this._cashierButton.cashierBtn.gotoAndStop("out");
            _this.update();
        };
        this.buttonUpHandler = function (event) { };
        this.stageWidth = 72;
        this.stageHeight = 381;
        this.stageX = 952;
        this.stageY = 100;
    }
    BetBarButton.prototype.ngAfterViewInit = function () {
        this.init(this.canvasElem.nativeElement);
    };
    BetBarButton.prototype.afterDomLoaded = function () {
        var rect = new createjs.Shape();
        rect.graphics.beginFill("yellow").drawRect(0, 0, 72, 381);
        this.cStage.addChild(rect);
        this._cashierButton = new BetBarbuttonsDesign["CashierButtonMC"];
        this._cashierButton.x = 0;
        this._cashierButton.y = 0;
        this._cashierButton.cashierBtn.gotoAndStop(0);
        this._cashierButton.cashierBtn.stop();
        this._cashierButton.cashierBtn.gotoAndStop("out");
        this._cashierButton.addEventListener("mousedown", this.buttonDownHandler);
        //this._cashierButton.addEventListener("pressmove", this.buttonPressMoveHandler);
        this._cashierButton.addEventListener("mouseover", this.buttonOverHandler);
        this._cashierButton.addEventListener("mouseout", this.buttonOutHandler);
        //this._cashierButton.addEventListener("pressup", this.buttonUpHandler);
        this._cashierButton.cursor = "pointer";
        this.cStage.addChild(this._cashierButton);
        this.update();
    };
    __decorate([
        core_1.ViewChild("canvas"), 
        __metadata('design:type', core_1.ElementRef)
    ], BetBarButton.prototype, "canvasElem", void 0);
    BetBarButton = __decorate([
        core_1.Component({
            selector: 'betbar-button',
            templateUrl: 'development/template/CanvasComponentTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BetBarButton);
    return BetBarButton;
}(CStage));
exports.BetBarButton = BetBarButton;
//# sourceMappingURL=betbar.button.js.map