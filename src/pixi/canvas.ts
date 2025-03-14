import * as PIXI from "pixi.js";
import { Scene } from "./scene";
import { ICanvasContext } from "./types";

export class Canvas {
    public context!: ICanvasContext;
    public domElement: HTMLElement;
    public engine!: PIXI.Application;
    public scene!: Scene;
    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.init();
    }

    protected init() {
        this.engine = new PIXI.Application();
        this.context = { engine: this.engine };
        this.engine.init({ background: 0xeeeeee, resizeTo: window }).then(() => {
            this.domElement.appendChild(this.engine.canvas);
            this.scene = new Scene(this.context);
            this.engine.stage.addChild(this.scene.node);
        });
    }
}