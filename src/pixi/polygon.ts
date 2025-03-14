import * as PIXI from "pixi.js";
import { Display } from "./display";
import { ICanvasContext } from "./types";

export class Polygon extends Display {
    
    constructor(context: ICanvasContext) {
        super(context);
        this.createShape();
    }

    protected createShape() {
        const graphics = new PIXI.Graphics();

        // Rectangle
        graphics.rect(0, 0, 100, 100);
        graphics.fill(0xde3249);

        this.node.addChild(graphics);
    }
}