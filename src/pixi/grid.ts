import * as PIXI from 'pixi.js';
import { Display } from "./display";
import { ICanvasContext } from "./types";

export class Grid extends Display {
    constructor(context: ICanvasContext, public width: number, public height: number, public gap: number, public color: number) {
        super(context);
        this.createShape();
    }

    protected createShape() {
        const { width, height, gap, color } = this;
        const halfHNum = Math.floor(width / (2 * gap));
        const halfVNum = Math.floor(height / (2 * gap));
        const halfW = halfHNum * gap;
        const halfH = halfVNum * gap;

        const graphics = new PIXI.Graphics();

        graphics.setStrokeStyle({ width: 1, color, alpha: 1 });
        graphics.moveTo(0, -halfH);
        graphics.lineTo(0, halfH);
        for (let i = 1; i <= halfHNum; i++) {
            const x = i * gap
            graphics.moveTo(x, -halfH);
            graphics.lineTo(x, halfH);

            graphics.moveTo(-x, -halfH);
            graphics.lineTo(-x, halfH);
        }

        graphics.moveTo(-halfW, 0);
        graphics.lineTo(halfW, 0);
        for (let i = 1; i <= halfVNum; i++) {
            const y = i * gap;
            graphics.moveTo(-halfW, y);
            graphics.lineTo(halfW, y);

            graphics.moveTo(-halfW, -y);
            graphics.lineTo(halfW, -y);
        }

        graphics.stroke();

        this.node.addChild(graphics);
    }
}