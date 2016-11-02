/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />

import { Component,EventEmitter, Input, Output,ViewChild, ElementRef } from '@angular/core';
import CStage = require("../../creatjscontainer/Cstage");
import {IafterDomLoaded} from "../../creatjscontainer/Istage";


@Component({
    selector: 'my-component',
    templateUrl: 'development/template/CanvasComponentTemplate.html'
})
export class MyComponent extends CStage implements IafterDomLoaded{
    protected parenCounter:number = 0;
    @Output() childListener = new EventEmitter<number>();
    @ViewChild("canvas") canvasElem: ElementRef;
    ngAfterViewInit() { // wait for the view to init before using the element
        this.init(<HTMLCanvasElement>this.canvasElem.nativeElement);
    }
    constructor(){
        super();
        this.stageWidth = 150;
        this.stageHeight = 150;
        this.stageX = 0;
        this.stageY = 0;
        var timer = setInterval(this.timerfun,100);
    }
    protected timerfun = (event): void => {        
        this.parenCounter++;
        this.childListener.emit(this.parenCounter);
    }
    afterDomLoaded(){
        console.log("after comp load");
        var rect = new createjs.Shape();
        rect.graphics.beginFill("orange").drawRect(0, 0, 150, 150);
        this.cStage.addChild(rect);
        this.update();
    }


}