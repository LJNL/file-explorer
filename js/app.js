const {TitleBarActionsView}=require("./js/view/TitleBarActions");
console.log("first");
new TitleBarActionsView(document.querySelector("[data-bind=titlebar]"));

const {DirService}=require("./js/service/Dir"),
    {DirListView}=require("./js/view/DirList"),
    dirService=new DirService();

new DirListView(document.querySelector("[data-bind=dirList]"),dirService);
dirService.notify();