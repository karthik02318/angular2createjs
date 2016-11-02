/**
 * Created by karthik.ar on 10/27/2016.
 */
/// <reference path="../../tsdefnition/createjs/createjs.d.ts" />
import {Istage} from "../creatjscontainer/Istage";

class CStage extends createjs.Container implements Istage{
    private _stageCanvas:HTMLCanvasElement;
    private _stageContext:CanvasRenderingContext2D;
    public cStage: createjs.Stage;
    public stageWidth: number;
    public stageHeight: number;
    public stageX: number;
    public stageY: number;
    public stageZ: number = 5;
    public mouseOverFrequency: number;
    public stageMouseEnabled: boolean = true;
    public init(stageCanvas:HTMLCanvasElement){
        this._stageCanvas = stageCanvas;
        this._stageContext = this._stageCanvas.getContext("2d");
        this.cStage = new createjs.Stage(stageCanvas);
        this.cStage.enableMouseOver(10);
        createjs.Ticker.addEventListener("tick", this.cStage);
        this.afterDomLoaded();
    }
    afterDomLoaded(){

    }

    public getCanvas(){
        return this._stageCanvas;
    }
    public setCanvas(stageCanvas:HTMLCanvasElement){
        this._stageCanvas = stageCanvas;
    }
    public getCanvas2DContext(){
        return this._stageContext;
    }
    public setCanvas2DContext(Canvas2DContext:CanvasRenderingContext2D){
        this._stageContext = Canvas2DContext;
    }
    public update(){
        this.cStage.update();
    }



}


export = CStage;