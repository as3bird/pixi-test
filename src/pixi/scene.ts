import { Display } from "./display";
import { Polygon } from "./polygon";
import { ICanvasContext } from "./types";

export class Scene extends Display {


    constructor(context: ICanvasContext) {
        super(context);

        this.addChild(new Polygon(context));
    }
}