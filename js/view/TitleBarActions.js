class TitleBarActionsView{
    constructor (boundingEl){

        this.closeEl=boundingEl.querySelector("[data-bind=close]");
        this.maxEl=boundingEl.querySelector("[data-bind=maximize]");
        this.unmaxEl=boundingEl.querySelector("[data-bind=unmaximize]");
        this.miniEl=boundingEl.querySelector("[data-bind=minimize]");

        console.log("binding closeEle");
        this.bindUI();
    }
    bindUI(){
        this.closeEl.addEventListener("click",this.onClose.bind(this),false);
        this.maxEl.addEventListener("click",this.onMaximize.bind(this),false);
        this.unmaxEl.addEventListener("click",this.onUnmaximize.bind(this),false);
        this.miniEl.addEventListener("click",this.onMinimize.bind(this),false);
        console.log("binding click");
    }
    toggleMaximize(){
        this.maxEl.classList.toggle("is-hidden");
        this.unmaxEl.classList.toggle("is-hidden");
    }
    onMaximize(e){
        e.preventDefault();
        nw.Window.get().maximize();
        this.toggleMaximize();
    }
    onUnmaximize(e){
        e.preventDefault();
        nw.Window.get().unmaximize();
        this.toggleMaximize();
    }
    onMinimize(e){
        e.preventDefault();
        nw.Window.get().minimize();
    }
    onClose(e){
        console.log("Emitting click");
        e.preventDefault();
        nw.Window.get().close();
    }
}

exports.TitleBarActionsView=TitleBarActionsView;