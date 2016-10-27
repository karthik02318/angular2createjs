"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CStage = (function (_super) {
    __extends(CStage, _super);
    function CStage() {
        _super.apply(this, arguments);
        this.stageZ = 5;
        this.stageMouseEnabled = true;
    }
    CStage.prototype.init = function (stageCanvas) {
        this._stageCanvas = stageCanvas;
        this._stageContext = this._stageCanvas.getContext("2d");
        this.cStage = new createjs.Stage(stageCanvas);
        this.cStage.enableMouseOver(10);
        this.afterDomLoaded();
    };
    CStage.prototype.afterDomLoaded = function () {
    };
    CStage.prototype.getCanvas = function () {
        return this._stageCanvas;
    };
    CStage.prototype.setCanvas = function (stageCanvas) {
        this._stageCanvas = stageCanvas;
    };
    CStage.prototype.getCanvas2DContext = function () {
        return this._stageContext;
    };
    CStage.prototype.setCanvas2DContext = function (Canvas2DContext) {
        this._stageContext = Canvas2DContext;
    };
    CStage.prototype.update = function () {
        this.cStage.update();
    };
    return CStage;
}(createjs.Container));
module.exports = CStage;
//# sourceMappingURL=Cstage.js.map