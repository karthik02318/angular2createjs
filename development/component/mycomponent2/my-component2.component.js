/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />
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
var MyComponent2 = (function (_super) {
    __extends(MyComponent2, _super);
    function MyComponent2() {
        _super.call(this);
        this.stageWidth = 150;
        this.stageHeight = 150;
        this.stageX = 874;
        this.stageY = 0;
    }
    MyComponent2.prototype.ngAfterViewInit = function () {
        this.init(this.canvasElem.nativeElement);
    };
    MyComponent2.prototype.afterDomLoaded = function () {
        var rect = new createjs.Shape();
        rect.graphics.beginFill("blue").drawRect(0, 0, 150, 150);
        this.cStage.addChild(rect);
        this.update();
    };
    __decorate([
        core_1.ViewChild("canvas"), 
        __metadata('design:type', core_1.ElementRef)
    ], MyComponent2.prototype, "canvasElem", void 0);
    MyComponent2 = __decorate([
        core_1.Component({
            selector: 'my-component2',
            templateUrl: 'development/template/CanvasComponentTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent2);
    return MyComponent2;
}(CStage));
exports.MyComponent2 = MyComponent2;
//# sourceMappingURL=my-component2.component.js.map