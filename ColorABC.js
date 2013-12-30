function ColorABC(text) {
    this.text = text;
};

ColorABC.prototype.createABC = function(text) {
    var alp = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var alphabet =alp.split(" ").concat(alp.toUpperCase().split(" "));
    console.log(alphabet);
    var sym = "! @ # $ % ^ & * ( ) _ - + = { } ' \"  | / ? < > , . ";
    var symbols = sym.split(" ");
    console.log(symbols);
},

ColorABC.prototype.getColor = function() {
    return "#" + Math.floor(Math.random() * 0xff);
}

var colorABC = new ColorABC("text");
colorABC.createABC("text");
var c = colorABC.getColor();

var r = document.getElementById("color");
r.style.background = c;