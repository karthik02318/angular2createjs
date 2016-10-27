/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />
/// <reference path="../../../tsdefnition/assets/commonasset.d.ts" />

import { Component,ViewChild, ElementRef } from '@angular/core';
import CStage = require("../../creatjscontainer/Cstage");
import {IafterDomLoaded} from "../../creatjscontainer/Istage";

@Component({
    selector: 'label-component',
    templateUrl: 'development/template/CanvasComponentTemplate.html'
})
export class LabelComponent extends CStage implements IafterDomLoaded {

    @ViewChild("canvas") canvasElem: ElementRef;
    ngAfterViewInit() {
        this.init(<HTMLCanvasElement>this.canvasElem.nativeElement);
    }
    constructor(){
        super();
        this.stageWidth = 500;
        this.stageHeight = 150;
        this.stageX = 400;
        this.stageY = 100;
    }
    public _confirmButton:any;
    public _clearButton:any;

    afterDomLoaded(){
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

    }
    private counter = 0;
    private _tweenEle;
    protected buttonDownHandler = (event): void => {
        console.log("Clicked");
        this._tweenEle = createjs.Tween.get(this._clearButton,{override:true}).to({x:300},1000).wait(500).to({x:100},1000);
    }
    handleInteraction = (event): void => {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    }
    ngOnDestroy() {
        this.counter++;
        console.log("destroyed",this.counter);
    }

}