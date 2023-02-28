var elem_is = document.getElementsByClassName("lang_is");
var elem_en = document.getElementsByClassName("lang_en");
document.getElementById("icelandic").addEventListener("click", () => {
    showElements(elem_is);
    hideElements(elem_en);
})
document.getElementById("english").addEventListener("click", () => {
    showElements(elem_en);
    hideElements(elem_is);
})

function showElements(elements) {
    Array.prototype.forEach.call(elements, function (el) {
        el.style.display = "inherit";
    });
}

function hideElements(elements) {
    Array.prototype.forEach.call(elements, function (el) {
        el.style.display = "none";
    });
}

function calcul(months, savings) {
    var vb = 0.036;
    var upph = 2200000;
    var vex = 0.004;
    for (let i = 0; i < months; i++) {
        upph += (upph * (vb / 12.0));
        upph += savings;
        if (i % 12 === 0) upph += (upph * vex);
    }
    console.log(upph);
}


