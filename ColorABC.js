function ColorABC(text) {
    this.text = text;
};


//ColorABC.prototype.getSymArray = function() {
//    var alp = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
//    var alphabet =alp.split(" ").concat(alp.toUpperCase().split(" "));
//
//    var sym = "! @ # $ % ^ & * ( ) _ - + = { } ' \"  | / ? < > , . ";
//    var symbols = sym.split(" ");
//
//    var num = "1 2 3 4 5 6 7 8 9 0";
//    var numbers = num.split(" ");
//
//    return alphabet.concat(symbols, numbers);
//};

ColorABC.prototype.getColor = function() {

    var color = Math.floor((Math.random() * 0xFFFFFF)).toString(16);
    return '#' + color;
};



ColorABC.prototype.createABC = function() {

};

//ColorABC.SumArray = new ColorABC("").getSymArray();
//ColorABC.ColorArray = new ColorABC("").getColorArray(SumArray);

//console.log("SumArray and ColorArray", SumArray, ColorArray);


//var colorABC = new ColorABC("text");
//colorABC.createABC();
//
//var c = colorABC.getColor();
//console.log(c);
//
//var r = document.getElementById("color");
//r.style.background = c;