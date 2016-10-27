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
var LabelComponent = (function (_super) {
    __extends(LabelComponent, _super);
    function LabelComponent() {
        var _this = this;
        _super.call(this);
        this.counter = 0;
        this.buttonDownHandler = function (event) {
            console.log("Clicked");
            _this._tweenEle = createjs.Tween.get(_this._clearButton, { override: true }).to({ x: 300 }, 1000).wait(500).to({ x: 100 }, 1000);
        };
        this.handleInteraction = function (event) {
            event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        };
        this.stageWidth = 500;
        this.stageHeight = 150;
        this.stageX = 400;
        this.stageY = 100;
    }
    LabelComponent.prototype.ngAfterViewInit = function () {
        this.init(this.canvasElem.nativeElement);
    };
    LabelComponent.prototype.afterDomLoaded = function () {
        /*var label1 = new createjs.Text("text without hitArea", "48px Arial", "#8097BD");
        label1.x = label1.y = 10;
        label1.alpha = 0.5;

        var label2 = new createjs.Text("text with hitArea", "48px Arial", "#00F");
        label2.x = 10;
        label2.y = 80;
        label2.alpha = 0.5;

        // create a rectangle shape the same size as the text, and assign it as the hitArea
        // note that it is never added to the display list.
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, label2.getMeasuredWidth(), label2.getMeasuredHeight());
        label2.hitArea = hit;

        label1.on("mouseover", this.handleInteraction);
        label2.on("mouseover", this.handleInteraction);

        label1.on("mouseout", this.handleInteraction);
        label2.on("mouseout", this.handleInteraction);

        this.cStage.addChild(label1, label2);
        this.cStage.update();
        createjs.Ticker.addEventListener("tick", this.cStage);*/
        var rect = new createjs.Shape();
        rect.graphics.beginFill("#82BFF2").drawRect(0, 0, 500, 150);
        this.cStage.addChild(rect);
        this._confirmButton = new BetBarbuttonsDesign["confirmBtn"];
        this._confirmButton.gotoAndStop(0);
        this._confirmButton.x = 0;
        this._confirmButton.y = 0;
        this._clearButton = new BetBarbuttonsDesign["clearBtn"];
        this._clearButton.gotoAndStop(0);
        this._clearButton.x = 100;
        this._clearButton.y = 0;
        this._confirmButton.addEventListener("mousedown", this.buttonDownHandler);
        this.cStage.addChild(this._confirmButton);
        this.cStage.addChild(this._clearButton);
        this.update();
        createjs.Ticker.addEventListener("tick", this.cStage);
    };
    LabelComponent.prototype.ngOnDestroy = function () {
        this.counter++;
        console.log("destroyed", this.counter);
    };
    __decorate([
        core_1.ViewChild("canvas"), 
        __metadata('design:type', core_1.ElementRef)
    ], LabelComponent.prototype, "canvasElem", void 0);
    LabelComponent = __decorate([
        core_1.Component({
            selector: 'label-component',
            templateUrl: 'development/template/CanvasComponentTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LabelComponent);
    return LabelComponent;
}(CStage));
exports.LabelComponent = LabelComponent;
//# sourceMappingURL=label.component.js.map