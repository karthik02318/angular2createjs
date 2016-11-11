/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />
/// <reference path="../../../tsdefnition/assets/commonasset.d.ts" />

import { Component,ViewChild, Input, ElementRef } from '@angular/core';
import CStage = require("../../creatjscontainer/Cstage");
import {IafterDomLoaded} from "../../creatjscontainer/Istage";

@Component({
    selector: 'label-component',
    templateUrl: 'development/template/CanvasComponentTemplate.html'
})
export class LabelComponent extends CStage implements IafterDomLoaded {
    @Input() major: number;
    @Input() minor: number;
    
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
        var timer = setInterval(this.timerfun,100);
    }
    protected timerfun = (event): void => {
        this.major++;
    }
    public _confirmButton:any;
    public _clearButton:any;
    modelUpdate=():void =>{
        if(!this.label1)return;
        this.label1.text = this.major.toString();
        this.minor++;
        this.label2.text = this.minor.toString();
        this.update();
    }
    afterDomLoaded(){
        this.label1 = new createjs.Text(this.major.toString(), "48px Arial", "black");
        this.label1.x = this.label1.y = 10;
        this.label2 = new createjs.Text(this.minor.toString(), "48px Arial", "black");
        this.label2.x = this.label2.y = 30;
        this.rect = new createjs.Shape();
        this.rect.graphics.beginFill("#82BFF2").drawRect(0, 0, 500, 150);
        this.cStage.addChild(this.rect);
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
        this.cStage.addChild(this.label1);
        this.cStage.addChild(this.label2);
        this.update();    
    }
    private label1:createjs.Text;
    private label2:createjs.Text;
    private rect = new createjs.Shape();
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