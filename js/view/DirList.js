class DirListView{
    constructor(boundingEl,dirService){
        this.el=boundingEl;
        this.dir=dirService;

        dirService.on("update",()=>this.update(dirService.getDirList()));
    }

    onOpenDir(e){
        e.preventDefault();
        this.dir.setDir(e.target.dataset.file);
    }

    update(collection){
        this.el.innerHTML="";
        collection.forEach(fInfo => {
            //引用外部ion-folder
            this.el.insertAdjacentHTML("beforeend",
        `<li class="dir-list__li" data-file="${fInfo.fileName}">
        <i class="icon ion-folder"></i> ${fInfo.fileName}</li>`);
        });
        this.bindUi();
    }

    bindUi(){
        const liArr=Array.from(this.el.querySelectorAll("li[data-file]"));
        liArr.forEach((el)=>{
            el.addEventListener("click",e=>this.onOpenDir(e),false);
        });
    }
}
exports.DirListView=DirListView;