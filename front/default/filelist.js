const fs = require("fs");

const getIgnore = ()=>{
    let res = [
        "/filelist",
        "/filelist.js",
        "/.gitignore",
    ];
    const ignoreList = fs.readFileSync(".gitignore").toString().split("\n");
    for(let n = 0 ; n < ignoreList.length ; n++){
        const l_ = ignoreList[n];        
        res.push(l_);
    }
    return res;
};

const deepSearch = (targetPath) => {
    let res = [];
    const search = fs.readdirSync(targetPath);
    for(let n = 0 ; n < search.length ; n++){
        const fullpath = targetPath + "/" + search[n];
        const basepath = search[n];
        if(fs.statSync(fullpath).isDirectory()){
            const subSearch = deepSearch(fullpath);            
            for(let n2 = 0 ; n2 < subSearch.length ; n2++){
                res.push(subSearch[n2]);
            }
        }
        else{
            const _path = fullpath.replace(__dirname, "");
            let juge = true;
            for(let n2 = 0 ; n2 < ignore.length; n2++){
                const i_ = ignore[n2];
                if(_path.indexOf(i_) > -1){
                    juge = false;
                }
            }
            if(juge){
                res.push(_path);
            }
        }
    }
    return res;
};

const ignore = getIgnore();
const list = deepSearch(__dirname);

fs.writeFileSync("filelist", list.join("\n"));

console.log(".... write ok");
