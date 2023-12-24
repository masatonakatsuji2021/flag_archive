import BaseView from "View";
import Response from "Response";

export default class View extends BaseView{
    public template : string = "default";

    public handleRenderBefore(){
        console.log("mode = " + Response.vectol);
    }
}