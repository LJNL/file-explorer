class TitleBarPathView{
    constructor(boundingEl,dirService){
        this.el=boundingEl;
        if(this.el==null) console.log("err");
        dirService.on("update",()=>this.render(dirService.getDir()));
    }

    render(dir){
        this.el.innerHTML=dir;
    }
}

exports.TitleBarPathView=TitleBarPathView;