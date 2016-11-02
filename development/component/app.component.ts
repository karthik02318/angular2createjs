import { Component, HostListener } from '@angular/core';
import { AppConfig } from '../appconfig/app.config';
@Component({
    selector: 'my-app',
    template: `<div style="position: absolute;background-color:red" [ngStyle]="{'height': _containerHeight+'px','width':_containerWidth+'px','left':_containerLeft+'px','top':_containerTop+'px','transform':'scale('+ _containerScaleX +','+ _containerScaleY +')'}">
<my-component (childListener)="onchildcalled($event)"></my-component>
<my-component2></my-component2>
<betbar-button></betbar-button>
<label-component  [major]="major" [minor]="minor" *ngIf="_testTimer == true"></label-component>
<div>{{minor}}</div>
</div>`
})

export class AppComponent {
    major: number = 25;
    minor: number = 23;
    private _containerWidth:number;
    private _containerHeight:number;
    private _containerTop:number;
    private _containerLeft:number;
    private _containerScaleX:number;
    private _containerScaleY:number;
    private _testTimer:boolean = true;
    constructor(){
        this.onResize();
        var timer = setInterval(this.timerfun,100);
    }
    onchildcalled(cnt: number) {
        this.minor = cnt;
    }
    protected timerfun = (event): void => {
        console.log(this._testTimer);
        //this._testTimer = !this._testTimer;
        this.major++;
    }
    @HostListener('window:resize', ['$event'])
    onResize() {
        let windowWidth:number = window.innerWidth;
        let windowHeight:number = window.innerHeight;

        let newWidth:number;
        let newHeight:number;
        let newGameScalex:number,newGameScaley:number;
        let leftOffset = 0;
        let topOffset = 0;

        // Are the window dimensions WIDER than the game dimensions?
        let wider = windowWidth / windowHeight > AppConfig.DEFAULT_GAME_WIDTH / AppConfig.DEFAULT_GAME_HEIGHT ? true : false;

        // If the current window dimensions are WIDER than the game dimensions then WINDOW HEIGHT is our limiting size
        //if (wider) {
        newHeight = windowHeight;
        newWidth = windowHeight * (AppConfig.DEFAULT_GAME_WIDTH / AppConfig.DEFAULT_GAME_HEIGHT);
        newGameScaley = windowHeight / AppConfig.DEFAULT_GAME_HEIGHT;
        leftOffset = -((AppConfig.DEFAULT_GAME_WIDTH-windowWidth)/2);
        //}
        //else {
        newWidth = windowWidth;
        newHeight = windowWidth * (AppConfig.DEFAULT_GAME_HEIGHT / AppConfig.DEFAULT_GAME_WIDTH);
        newGameScalex = windowWidth / AppConfig.DEFAULT_GAME_WIDTH;
        topOffset = -((AppConfig.DEFAULT_GAME_HEIGHT-windowHeight)/2);
        //}
        /*if(windowHeight>windowWidth){
            newHeight = windowHeight;
            newWidth = windowWidth;
            leftOffset = 0;
            topOffset = 0;
            newGameScalex = 1;
            newGameScaley = 1;
        }*/
        this.resizeWindow(newGameScalex,newGameScaley,newWidth,newHeight, leftOffset, topOffset);

    }
    resizeWindow(newGameScaleX:number,newGameScaleY:number,newWidth:number,newHeight:number, offsetLeft:number, offsetTop:number){
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        //var _left = -(AppConfig.DEFAULT_GAME_WIDTH-newWidth)/2;
        //var _top = -(AppConfig.DEFAULT_GAME_HEIGHT-newHeight)/2;
        this._containerWidth = AppConfig.DEFAULT_GAME_WIDTH;
        this._containerHeight = AppConfig.DEFAULT_GAME_HEIGHT;
        if(windowHeight>windowWidth){
            this._containerWidth = windowWidth;
            this._containerHeight = windowHeight;
        }
        this._containerTop= offsetTop;
        this._containerLeft= offsetLeft;
        this._containerScaleX = newGameScaleX;
        this._containerScaleY = newGameScaleY;
    }
}