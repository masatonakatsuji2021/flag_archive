import View from "app/View/View";
import { VDom, Response } from "Core";

export default class PageView extends View{

    public ind : number = 0;
    public target = VDom();

    public handle(){
        this.target = VDom("target");
    }

    public clickHandle(){
        alert("click handle ..... ok");        
    }

    public clickHandle2(){
        console.log("click Handle2 .... ok (view)");
    }

    public addHandle(){
        this.ind++;

        const item = Response.viewPart("page2item");

        this.target.stamp(item, (i_) => {
            i_.virtual("ind", this.ind);
            i_.childVirtual("name").text = "name text " + this.ind;
            i_.childVirtual("code").text = ("0000" + this.ind).slice(-5);
            i_.childVirtual("deleteBtn").virtual("ind", this.ind);
        });
    }

    public deleteHandle(i_){
        const targetInd = i_.virtual("ind");
        this.target.childDom().findOnVirtual("ind", targetInd).remove();
    }
}