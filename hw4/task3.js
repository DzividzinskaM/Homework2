let area = document.querySelector(".area");
let figure = {
    borderRadius: 50,
    backgroundColor: "black",
    width: 50,
    height: 50,
    GetWidth: function(){
        this.width = document.getElementById('figureWidth').value;
    },
    GetHeight: function(){
       this.height = document.getElementById('figureHeight').value
    },
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


let AvailableAreaSquare = area.clientHeight*area.clientWidth;

function CheckAvailableSpace(){
    if(AvailableAreaSquare>=figure.squareElement()){
        AvailableAreaSquare -= figure.squareElement();
        return true;
    }
    return false;
}


area.addEventListener("click", (e) => { 
    figure.GetWidth();
    figure.GetHeight();
    if(!CheckAvailableSpace()){
        alert("You can not to add");
        return;
    }
    e.target.append(figure.createElement());
});





