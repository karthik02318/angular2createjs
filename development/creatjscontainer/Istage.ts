/**
 * Created by karthik.ar on 10/27/2016.
 */
/// <reference path="../../tsdefnition/createjs/createjs.d.ts" />

export interface Istage {
    stageWidth: number;
    stageHeight: number;
    stageX: number;
    stageY: number;
}
export interface IafterDomLoaded {
    afterDomLoaded();
}