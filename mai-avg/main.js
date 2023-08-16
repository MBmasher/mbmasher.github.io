(function() {
    'use strict';

    var bas = document.getElementsByClassName("music_basic_score_back")
    var adv = document.getElementsByClassName("music_advanced_score_back")
    var exp = document.getElementsByClassName("music_expert_score_back")
    var mas = document.getElementsByClassName("music_master_score_back")
    var remas = document.getElementsByClassName("music_remaster_score_back")
    var songList = [...bas, ...adv, ...exp, ...mas, ...remas]

    var scoreList = document.getElementsByClassName("music_score_block w_120 t_r f_l f_12")
    var sum = 0
    var len = songList.length
    for (let i = 0; i < scoreList.length; i++) {
        var score = parseFloat(scoreList[i].innerHTML.substring(0, scoreList[i].innerHTML.length-1))
        sum += score
    }
    var avg = Math.round(10000*sum/len)/10000 + "%"

    var selection = document.getElementsByName("word")
    if (selection.length == 0) {
        selection = document.getElementsByName("level")
    }
    if (selection.length == 0) {
        selection = document.getElementsByName("version")
    }
    if (selection.length == 0) {
        selection = document.getElementsByName("genre")
    }
    if (selection.length == 0) {
        selection = document.getElementsByName("search")
    }
    var select = selection[0]
    var option = select.value
    var options = document.getElementsByTagName("option")
    for (let i = 0; i < options.length; i++) {
        if (options[i].value == option) {
            options[i].innerHTML += " (Avg: " + avg + ")"
        }
    }
})();
