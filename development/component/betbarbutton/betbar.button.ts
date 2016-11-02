/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />
/// <reference path="../../../tsdefnition/assets/commonasset.d.ts" />

import { Component,ViewChild, ElementRef } from '@angular/core';
import CStage = require("../../creatjscontainer/Cstage");
import {IafterDomLoaded} from "../../creatjscontainer/Istage";

@Component({
    selector: 'betbar-button',
    templateUrl: 'development/template/CanvasComponentTemplate.html'
})
export class BetBarButton extends CStage implements IafterDomLoaded {

    @ViewChild("canvas") canvasElem: ElementRef;
    ngAfterViewInit() {
        this.init(<HTMLCanvasElement>this.canvasElem.nativeElement);
    }
    constructor(){
        super();
        this.stageWidth = 72;
        this.stageHeight = 381;
        this.stageX = 952;
        this.stageY = 100;
    }
    public _cashierButton:any;
    afterDomLoaded(){
        var rect = new createjs.Shape();
        rect.graphics.beginFill("yellow").drawRect(0, 0, 72, 381);
        this.cStage.addChild(rect);

        this._cashierButton = new BetBarbuttonsDesign["CashierButtonMC"];
        this._cashierButton.gotoAndStop(0);
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
        this._cashierButton.cursor="pointer";
        this.cStage.addChild(this._cashierButton);
        this.update();
    }
    protected buttonDownHandler = (event): void => {
        console.log("buttonDownHandler");
        this._cashierButton.cashierBtn.gotoAndStop("down");
        this.update();
    };
    protected buttonPressMoveHandler = (event): void => {
        console.log("buttonPressMoveHandler");
        this._cashierButton.gotoAndStop("down");
        this.update();
    };
    protected buttonOverHandler = (event): void => {
        console.log("buttonOverHandler");
        this._cashierButton.cashierBtn.gotoAndStop("over");
        this.update();
    };

    protected buttonOutHandler = (event): void => {
        console.log("buttonOutHandler");
        this._cashierButton.cashierBtn.gotoAndStop("out");
        this.update();
    };

    protected buttonUpHandler = (event): void => {};
}