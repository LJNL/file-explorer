const {TitleBarActionsView}=require("./js/view/TitleBarActions");
const {DirService}=require("./js/service/Dir"),
    {DirListView}=require("./js/view/DirList"),
    dirService=new DirService();
    const{FileListView}=require("./js/View/FileList");

new TitleBarActionsView(document.querySelector("[data-bind=titlebar]"));

new FileListView(document.querySelector("[data-bind=fileList]"),dirService);

new DirListView(document.querySelector("[data-bind=dirList]"),dirService);
dirService.notify();