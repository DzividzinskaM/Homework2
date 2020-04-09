let area = document.querySelector(".area");
let figure = {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "black",
    createElement:  function (x, y){
        let f = document.createElement("DIV.figure");
        f.style.width = this.width + "px";
        f.style.height = this.height + "px";
        f.style.borderRadius = this.borderRadius + "%";
        f.style.background = this.backgroundColor;
        f.style.position = "absolute";
        f.style.transform = `translateX(${x-this.width}px) translateY(${y-this.height}px)`;
        return f;
    },
    squareElement: function(){
        return this.width*this.height;
    } 
}

area.addEventListener("click", (e) => {
    e.target.append(figure.createElement(e.clientX, e.clientY));
    
});

