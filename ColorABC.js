function ColorABC(text) {
    this.text = text;
};


ColorABC.prototype.getSymArray = function() {
    var alp = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var alphabet =alp.split(" ").concat(alp.toUpperCase().split(" "));

    var sym = "! @ # $ % ^ & * ( ) _ - + = { } ' \"  | / ? < > , . ";
    var symbols = sym.split(" ");

    var num = "1 2 3 4 5 6 7 8 9 0";
    var numbers = num.split(" ");

    return alphabet.concat(symbols, numbers);
};

ColorABC.prototype.getColor = function() {

    var color = Math.floor((Math.random() * 0xFFFFFF)).toString(16);
    console.log(color);
    return '#' + color;
};


ColorABC.SymArray = new ColorABC("").getSymArray();
ColorABC.ColorArray = new ColorABC("").getColorArray(ColorABC.SymArray);

ColorABC.prototype.getColorArray = function(SymArray) {
    var colorArray = [];
    for (var r in SymArray) {
        var color = new ColorABC("").getColor();
        colorArray.push(color);
    }
};

ColorABC.prototype.createABC = function() {
    for (var i = 0; i < this.text.length; i++) {
        var textItem = document.getElementsByTagName("textarea");
        textItem.style.background = ColorABC.ColorArray[Math.floor(Math.random() * ColorABC.ColorArray.length)];
    }
};


var colorABC = new ColorABC("text");
//colorABC.createABC("text");
var c = colorABC.getColor();
colorABC.getColorArray(ColorABC.SymArray);

var r = document.getElementById("color");
r.style.background = c;