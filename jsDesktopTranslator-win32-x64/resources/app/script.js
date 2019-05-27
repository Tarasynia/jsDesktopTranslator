//translate button
window.onload=function(){
    $("#btnTranslate").click(function () {
        var link = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyB09myWSktgP4ViPmdHGzfL27O9tym0UYI";
        link = link + "&source=" + $("#inputLang").val();
        link = link + "&target=" + $("#outputLang").val();
        link = link + "&q=" + escape($("#inputText").val());
        $.get(link, function (data) {
            $("#outputText").val(data.data.translations[0].translatedText);
        });
    });
}

//swap button
function getLang(tag) {
    return tag.options[tag.selectedIndex].value;
}
function swapLang( selector_1, selector_2 ) {
var tag_1 = document.querySelector(selector_1),
    tag_2 = document.querySelector(selector_2),
    selectedLang = tag_1.selectedIndex;
    
tag_1.selectedIndex = tag_2.selectedIndex;
tag_2.selectedIndex = selectedLang;
}

//choose lang
function setEs() {
document.getElementById("inputLang").value = "ES";
}
function setPl() {
document.getElementById("inputLang").value = "PL";
}
function setEn() {
document.getElementById("inputLang").value = "EN";
}
function setDe() {
document.getElementById("inputLang").value = "DE";
}
