function ColorABC(text) {
    this.text = text;
};

ColorABC.prototype.createABC = function(text) {
    var alphabet_string = "abcdefghijklmnopqrstuvwxyz";
    var alphabet = alphabet_string.split(",");
    console.log(typeof alphabet);
}

var colorABC = new ColorABC("text");
colorABC.createABC("text");