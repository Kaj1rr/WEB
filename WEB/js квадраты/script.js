const blocks = [
    { width: 50, height: 40 },
    { width: 100, height: 60 },
    { width: 80, height: 100 },
    { width: 120, height: 70 },
    { width: 60, height: 90 }
];


const root = document.getElementById("root");


for (let i = 0; i < blocks.length; i++) {
    
    const element = document.createElement("div");
    element.classList.add("block");
    element.style.width = blocks[i].width + "px";
    element.style.height = blocks[i].height + "px";
    root.appendChild(element);

}
