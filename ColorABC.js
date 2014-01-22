function ColorABC() {
};


//todo: fix method - somtetimes works incorrectly

ColorABC.prototype.getColor = function() {
    var color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var num = color + '';
    while (num.length < 6) {
        num += '0';
    }
    return '#' + num;
};


//todo: think about effectiveness of this method (try another args, new techniques etc)

ColorABC.prototype.createABC = function(str, sym) {
    document.getElementById('mainForm').style.display = 'none';
    document.getElementById('mainBtn1').style.display = 'none';
    document.getElementById('mainBtn2').style.display = 'none';
    document.getElementById('mainBtn3').style.display = 'none';

    var arrayStr = str.split(sym);

    for (var i = 0; i < arrayStr.length; i++) {
        var child = document.createElement('div');
        var backgroundColor = this.getColor();
        child.style.background = backgroundColor;
        child.style.display = 'inline';
        child.innerHTML = arrayStr[i];

        child.style.padding = '0 8px';
        document.body.appendChild(child);
    }

    document.getElementById('secondBtn').style.visibility = 'visible';
};

function createABCSymbols() {
    (function() {
        var str = document.getElementById('textarea').value;
        var cABC = new ColorABC();
        cABC.createABC(str, '');
    }());
}

function createABCWords() {
    (function() {
        var str = document.getElementById('textarea').value;
        var cABC = new ColorABC(str);
        cABC.createABC(str, ' ');
    }());

}

function createABCSentences() {
    (function() {
        var str = document.getElementById('textarea').value;
        var cABC = new ColorABC(str);
        cABC.createABC(str, '.');
    }());

}