/// <reference path="../../../tsdefnition/createjs/createjs.d.ts" />

import { Component,ViewChild, ElementRef } from '@angular/core';
import CStage = require("../../creatjscontainer/Cstage");
import {IafterDomLoaded} from "../../creatjscontainer/Istage";

@Component({
    selector: 'my-component2',
    templateUrl: 'development/template/CanvasComponentTemplate.html'
})
export class MyComponent2 extends CStage implements IafterDomLoaded {

    @ViewChild("canvas") canvasElem: ElementRef;
    ngAfterViewInit() {
        this.init(<HTMLCanvasElement>this.canvasElem.nativeElement);
    }
    constructor(){
        super();
        this.stageWidth = 150;
        this.stageHeight = 150;
        this.stageX = 874;
        this.stageY = 0;
    }
    afterDomLoaded(){
        var rect = new createjs.Shape();
        rect.graphics.beginFill("blue").drawRect(0, 0, 150, 150);
        this.cStage.addChild(rect);
        this.update();
    }


}