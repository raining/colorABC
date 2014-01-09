function ColorABC(text) {
    this.text = text;
};


//todo: fix method - somtetimes works incorrectly

ColorABC.prototype.getColor = function() {

    var color = Math.floor((Math.random() * 0xFFFFFF)).toString(16);
    return '#' + color;
};


//todo: think about effectiveness of this method (try another args, new techniques etc)

ColorABC.prototype.createABC = function(str, sym) {
    document.getElementById('mainForm').style.display = 'none';
    document.getElementById('mainBtn').style.display = 'none';

    var arrayStr = str.split(sym);

    for (var i in arrayStr) {

        var child = document.createElement('div');
        child.innerHTML = arrayStr[i];
        child.style.background = this.getColor();
        child.style.display = 'inline';

        child.style.padding = '0 8px';
        document.body.appendChild(child);
    }

    document.getElementById('secondBtn').style.visibility = 'visible';
};