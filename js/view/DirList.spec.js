
const {DirListView}=require("./DirList"),
    {DirService}=require("../Service/Dir");

describe("View/DirList",function(){
    beforeEach(()=>{
        this.sandbox=document.getElementById("sandbox");
        this.sandbox.innerHTML=`<ul data-bind="dirList"></ul>`;
        console.log(this)
    });
    afterEach(()=>{
        this.sandbox.innerHTML=``;
        console.log(this)
    });
    describe("#update",function(){
        it("updates from a given collection",()=>{
            console.log(this)
            
            const dirService=new DirService(),
                view=new DirListView(sandbox.querySelector("[data-bind=dirList]"),dirService);
            view.update([
                {fileName:"foo"},{fileName:"bar"}
            ]);
            expect(sandbox.querySelectorAll(".dir-list__li").length).toBe( 2 );
        })
    });
});
