$(function(){
    var iColumns = 3;
    var iGap = 3;
    var cont = document.getElementById('container');

   $('#less_cols').click(function(e) { // mouse click handler
        iColumns--; // decreasing amount of columns
        if (iColumns < 1) iColumns = 1;
        cont.style.MozColumnCount = iColumns; // apply styles
        cont.style.WebkitColumnCount = iColumns;
    });
    $('#more_cols').click(function(e) {
        iColumns++; // increasing amount of columns
        if (iColumns > 5) iColumns = 5;
        cont.style.MozColumnCount = iColumns; // apply styles
        cont.style.WebkitColumnCount = iColumns;
    });
    $('#less_gap').click(function(e) {
        iGap--; // decreasing value of gap
        if (iGap < 0) iGap = 0;
        cont.style.MozColumnGap = iGap+'em'; // apply styles
        cont.style.WebkitColumnGap = iGap+'em';
    });
    $('#more_gap').click(function(e) {
        iGap++; // increasing value of gap
        if (iGap > 5) iGap = 5;
        cont.style.MozColumnGap = iGap+'em'; // apply styles
        cont.style.WebkitColumnGap = iGap+'em';
    });
});