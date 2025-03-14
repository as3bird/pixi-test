import * as PIXI from "pixi.js";
import { ICanvasContext } from "./types";

export abstract class Display {

    public node: PIXI.Container;

    public children: Display[];

    constructor(public context: ICanvasContext) {
        this.node = new PIXI.Container();
        this.children = [];
    }

    public addChild(child: Display) {
        this.children.push(child);
        this.node.addChild(child.node);
    }

    public removeChild(child: Display) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
            this.node.removeChild(child.node);
        }
    }
}