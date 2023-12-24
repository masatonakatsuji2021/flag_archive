import View from "app/View/View";
import { VDom, Util } from "Core";

export default class PageView extends View{

    public dtt : number;
    public handle(){
        VDom("text1").text = Util.datetime().format("YYYY/MM/DD HH:II:SS");
        this.dtt = setInterval(()=>{
            VDom("text1").text = Util.datetime().format("YYYY/MM/DD HH:II:SS");
        }, 500);
    }

    public handleLeave(){
        clearInterval(this.dtt);
    }
}