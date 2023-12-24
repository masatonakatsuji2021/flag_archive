import BaseException from "Exception";
import VDom from "VDom";

export default class Exception extends BaseException{

    public template : string = "default";

    handle(exps : any){
        VDom("errorMsg").text = exps;
    }

}