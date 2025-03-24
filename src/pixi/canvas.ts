import * as PIXI from "pixi.js";
import { Viewport } from 'pixi-viewport';
import { Scene } from "./scene";
import { ICanvasContext } from "./types";

export class Canvas {
    public context!: ICanvasContext;
    public domElement: HTMLElement;
    public engine!: PIXI.Application;
    public viewport!: Viewport;
    public scene!: Scene;
    constructor(domElement: HTMLElement) {
        this.domElement = domElement;
        this.init();
    }

    protected init() {
        this.engine = new PIXI.Application();
        this.context = { engine: this.engine };
        this.engine.init({ background: 0xffffff, width: window.innerWidth, height: window.innerHeight,antialias: true }).then(() => {
            this.domElement.appendChild(this.engine.canvas);

            const viewport = new Viewport({ screenWidth: window.innerWidth, screenHeight: window.innerHeight, worldWidth: 100000, worldHeight: 100000, events: this.engine.renderer.events })
            this.engine.stage.addChild(viewport);
            this.scene = new Scene(this.context);
            viewport.addChild(this.scene.node);
            // 启用Viewport的拖拽、缩放和鼠标滚轮缩放
            viewport
                .drag()
                .pinch()
                .wheel();
            viewport.moveCenter(0,0)
        });


    }
}