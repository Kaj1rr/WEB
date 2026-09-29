const blocks = [
    { width: 50, height: 40 },
    { width: 100, height: 60 },
    { width: 80, height: 100 },
    { width: 120, height: 70 },
    { width: 60, height: 90 }
];

//помогает найти элемент по id который мы задали 
const root = document.getElementById("root");


for (let i = 0; i < blocks.length; i++) {
    
    //создаём элемент 
    const element = document.createElement("div");
    //добавляет класс к элементу
    element.classList.add("block");
    //настраиваем высоту и ширину
    element.style.width = blocks[i].width + "px";
    element.style.height = blocks[i].height + "px";
    //метод который добавляет элемент к конец страницы
    root.appendChild(element);

}
