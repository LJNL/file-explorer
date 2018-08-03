const filesize=require("filesize");

class FileListView{
    constructor(boundingEl,dirService){
        this.dir=dirService;
        this.el=boundingEl;

        dirService.on("update",()=>this.update(dirService.getFilelist()));
    }

    static formatTime(timeString){
        const date=new Date(Date.parse(timeString));
        console.log(date)
        return date.toDateString();
    }

    update(collection){

        this.el.innerHTML = `
        <li class="file-list__li file-list__head">
        <span class="file-list__li__name">Name</span>
        <span class="file-list__li__size">Size</span>
        <span class="file-list__li__time">Modified</span>
    </li>
        `;
        collection.forEach(fInfo => {
            this.el.insertAdjacentHTML("beforeend",`
            <li class="file-list__li" data-file="${fInfo.fileName}">
            <span class="file-list__li__name">${fInfo.fileName}</span>
            <span class="file-list__li__size">${filesize(fInfo.stats.size)}</span>
            <span class="file-list__li__time">${FileListView.formatTime(fInfo.stats.mtime)}</span>
        </li>
            `);
            console.log(fInfo.stats.mtime);
        });
        this.bindUi();
    }

    bindUi(){
        Array.from(this.el.querySelectorAll(".file-list__li")).forEach(el=>{
            el.addEventListener(
                "click",e=>{
                    e.preventDefault();
                    console.log(el.dataset.file);
                    if(el.dataset.file)
                    {
                        nw.Shell.openItem(this.dir.getFile(el.dataset.file));
                    }
                },false);
        });
    }

}
exports.FileListView=FileListView;