import * as PIXI from "pixi.js";
import { Display } from "./display";
import { ICanvasContext } from "./types";

export class Background extends Display {
    constructor(context: ICanvasContext, public width: number, public height: number, public color: number) {
        super(context);
        this.createShape();
    }

    protected createShape() {
        const graphics = new PIXI.Graphics();

        const {width, height, color} = this;
        graphics.rect(-width/2, -height/2, width, height);
        graphics.fill(color);

        this.node.addChild(graphics);
    }
}