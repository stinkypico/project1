let boxCounter = 0;
let paletteIndex = 0;
const colorPalette = ["#277da1", "#577590", "#4d908e", "#43aa8b", "#90be6d", "#f9c74f", "#f9844a", "#f8961e", "#f3722c", "#f94144"];
 
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
});
 
class box{
    constructor(id,posX,posY){
        this.id = id;
        this.posX = posX;
        this.posY = posY;
 
        boxCounter++;
 
        if(paletteIndex > colorPalette.length){
            paletteIndex = 0;
        }else{
            paletteIndex++;
        }
    }
    boxMaker(){
        var newBox = document.createElement("div");
        newBox.setAttribute("class", "boxes");
        newBox.setAttribute("id", this.id);
 
 
        newBox.innerHTML = `<div>${this.id}</div>`;
        newBox.innerHTML += `<div>Pozycja x wynosi: ${this.posX}</div>`;
        newBox.innerHTML += `<div>Pozycja y wynosi: ${this.posY}</div>`;

        newBox.style.top = `${this.posY}px`;
        newBox.style.left = `${this.posX}px`;
        newBox.style.backgroundColor = colorPalette[paletteIndex];
 
        document.body.appendChild(newBox);
 
        var textFiled = document.createElement("textarea");
        textFiled.setAttribute("class", "textField");

        newBox.appendChild(textFiled);

        newBox.addEventListener("contextmenu",()=>{
            newBox.style.display = "none";
        })

    }

}
var pagePosX;
var pagePosY;
document.addEventListener("mousemove", (e)=>{
    pagePosX = e.pageX;
    pagePosY = e.pageY;
    if(pagePosY > window.innerHeight-250){
        pagePosY = pagePosY-250;
    }
    if(pagePosX > window.innerWidth-250){
        pagePosX = pagePosX - 250;
    }
});
 
 
document.addEventListener("dblclick", ()=>{
    const newBox = new box(boxCounter,pagePosX,pagePosY);
    newBox.boxMaker();
});