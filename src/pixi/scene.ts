import * as PIXI from 'pixi.js';
import { Display } from "./display";
import { Polygon } from "./polygon";
import { ICanvasContext } from "./types";
import { Background } from './background';
import { Grid } from './grid';

export class Scene extends Display {

    public background: Background;
    public grid: Grid;

    constructor(context: ICanvasContext) {
        super(context);

        this.background = new Background(context, 10000, 10000, 0xeeeeee);
        this.grid = new Grid(context, 10000, 10000, 100, 0xffffff);
        this.addChild(this.background);
        this.addChild(this.grid);
        this.addChild(new Polygon(context));
    }

}