let area = document.querySelector(".area");
let figure = {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "black",
    createElement:  function (){
        let f = document.createElement("DIV.figure");
        f.style.width = this.width + "px";
        f.style.height = this.height + "px";
        f.style.borderRadius = this.borderRadius + "%";
        f.style.background = this.backgroundColor;
        return f;
    },
    squareElement: function(){
        return this.width*this.height;
    }
}


let AvailableNumberFigure = Math.floor((area.clientHeight*area.clientWidth)/(figure.squareElement()));

function CheckAvailableSpace(){
    if(AvailableNumberFigure>0){
        --AvailableNumberFigure;
        return true;
    }
    return false;
}

area.addEventListener("click", (e) => { 
    if(!CheckAvailableSpace()){
        alert("You can not to add any");
        return;
    }
    e.target.appendChild(figure.createElement());
});



