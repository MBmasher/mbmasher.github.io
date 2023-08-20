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

    var friend = document.getElementsByClassName("friend_vs_block").length > 0
    if (friend) {
        var youSum = 0
        var themSum = 0
        for (let i = 0; i < songList.length; i++) {
            var song = songList[i]
            var scores = song.getElementsByClassName("p_r w_120 f_b")
            var youScore = parseFloat(scores[0].innerHTML.substring(0, scores[0].innerHTML.length-1))
            if (!isNaN(youScore)) {
                youSum += youScore
            }
            var themScore = parseFloat(scores[1].innerHTML.substring(0, scores[1].innerHTML.length-1))
            if (!isNaN(themScore)) {
                themSum += themScore
            }
        }
        var youAvg = Math.round(10000*youSum/len)/10000 + "%"
        var themAvg = Math.round(10000*themSum/len)/10000 + "%"

        var resultsParent = document.getElementsByClassName("see_through_block m_15 p_5 p_t_0")[0]
        var you = document.createElement("div")
        you.className = "black"
        var them = document.createElement("div")
        them.className = "black"
        var youBlock = document.getElementsByClassName("friend_vs_you_block")
        var youName = youBlock[0].getElementsByClassName("p_l_5 t_l f_l f_12 f_b")[0].innerHTML
        var themBlock = document.getElementsByClassName("friend_vs_friend_block")
        var themName = themBlock[0].getElementsByClassName("p_l_5 t_l f_l f_12 f_b")[0].innerHTML
        you.innerHTML = youName + " Avg: " + youAvg
        you.style.marginTop = "10px"
        them.innerHTML = themName + " Avg: " + themAvg
        them.style.marginTop = "10px"
        resultsParent.appendChild(you)
        resultsParent.appendChild(them)
        console.log(youName)
    } else {
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
        console.log(len)
        var options = document.getElementsByTagName("option")
        for (let i = 0; i < options.length; i++) {
            if (options[i].value == option) {
                options[i].innerHTML += " (Avg: " + avg + ")"
            }
        }
    }
})();
