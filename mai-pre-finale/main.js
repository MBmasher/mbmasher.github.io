(function() {
    'use strict';

    const preFinaleUrl = "https://mbmasher.github.io/mai-pre-finale/pre-finale.txt"
    const preFinaleRemasUrl = "https://mbmasher.github.io/mai-pre-finale/pre-finale-remas.txt"
    var preFinale;
    var preFinaleRemas

    var selection = document.getElementsByName("genre")
    if (selection.length == 0) {

        fetch(preFinaleUrl)
            .then(function(response) {
            response.text().then(function(text) {
                preFinale = text;
            }).then(fetch(preFinaleRemasUrl)
                    .then(function(response) {
                response.text().then(function(text) {
                    preFinaleRemas = text;
                    processPreFinale(preFinale, preFinaleRemas);
                });
            })
                   )
        });
    }
})();

function processPreFinale(preFinale, preFinaleRemas) {
    var preFinaleSongs = preFinale.split("\n");
    preFinaleSongs.pop();
    console.log("Pre-Finale count: " + preFinaleSongs.length);

    var preFinaleRemasSongs = preFinaleRemas.split("\n");
    preFinaleRemasSongs.pop();
    console.log("Re:MAS pre-Finale: " + preFinaleRemasSongs.length);

    const dx_url = "https://maimaidx-eng.com/maimai-mobile/img/music_dx.png"
    var bas = document.getElementsByClassName("music_basic_score_back")
    var adv = document.getElementsByClassName("music_advanced_score_back")
    var exp = document.getElementsByClassName("music_expert_score_back")
    var mas = document.getElementsByClassName("music_master_score_back")
    var songList = [...bas, ...adv, ...exp, ...mas]

    var toRemove = []
    for (const song of songList) {
        var name = song.getElementsByClassName("music_name_block t_l f_13 break")[0].innerHTML
        var remove = false
        if (!preFinaleSongs.includes(name)) {
            remove = true
        } else {
            var imgs = song.getElementsByTagName("img")
            for (const img of imgs) { if (img.src.startsWith(dx_url)) { remove = true } }
        }
        if (remove) { toRemove.push(song) }
    }

    var remas = document.getElementsByClassName("music_remaster_score_back")

    console.log("Old song count: " + (songList.length + remas.length))
    for (const song of remas) {
        name = song.getElementsByClassName("music_name_block t_l f_13 break")[0].innerHTML
        remove = false
        if (!preFinaleRemasSongs.includes(name)) {
            remove = true
        } else {
            imgs = song.getElementsByTagName("img")
            for (const img of imgs) { if (img.src.startsWith(dx_url)) { remove = true } }
        }
        if (remove) { toRemove.push(song) }
    }

    for (const remove of toRemove) { remove.remove() }

    var newBas = document.getElementsByClassName("music_basic_score_back")
    var newAdv = document.getElementsByClassName("music_advanced_score_back")
    var newExp = document.getElementsByClassName("music_expert_score_back")
    var newMas = document.getElementsByClassName("music_master_score_back")
    var newRemas = document.getElementsByClassName("music_remaster_score_back")
    var newSongList = [...newBas, ...newAdv, ...newExp, ...newMas, ...newRemas]

    console.log("New song count: " + newSongList.length)
    var totalSongs = newSongList.length

    var clear = 0
    var s = 0
    var sp = 0
    var ss = 0
    var ssp = 0
    var sss = 0
    var sssp = 0

    var fc = 0
    var fcp = 0
    var ap = 0
    var app = 0

    var fs = 0
    var fsp = 0
    var fd = 0
    var fdp = 0

    var d1 = 0
    var d2 = 0
    var d3 = 0
    var d4 = 0
    var d5 = 0

    const clear_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_clear.png"
    const s_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_s.png"
    const sp_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_sp.png"
    const ss_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_ss.png"
    const ssp_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_ssp.png"
    const sss_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_sss.png"
    const sssp_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_sssp.png"

    const fc_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_fc.png"
    const fcp_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_fcp.png"
    const ap_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_ap.png"
    const app_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_app.png"

    const fs_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_fs.png"
    const fsp_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_fsp.png"
    const fd_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_fsd.png"
    const fdp_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_fsdp.png"

    const d1_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_dxstar_1.png"
    const d2_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_dxstar_2.png"
    const d3_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_dxstar_3.png"
    const d4_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_dxstar_4.png"
    const d5_url = "https://maimaidx-eng.com/maimai-mobile/img/music_icon_dxstar_5.png"

    for (const song of newSongList) {
        var score = song.getElementsByClassName("music_score_block w_120 t_r f_l f_12")
        if (score.length > 0) {
            clear++
            score = score[0].innerHTML
            score = parseFloat(score.substring(0, score.length-1))
            if (score >= 97) {s += 1}
            if (score >= 98) {sp += 1}
            if (score >= 99) {ss += 1}
            if (score >= 99.5) {ssp += 1}
            if (score >= 100) {sss += 1}
            if (score >= 100.5) {sssp += 1}
            imgs = song.getElementsByTagName("img")
            for (const img of imgs) {
                if (img.src.startsWith(fc_url)) { fc++; }
                if (img.src.startsWith(fcp_url)) { fcp++;fc++; }
                if (img.src.startsWith(ap_url)) { ap++;fcp++;fc++; }
                if (img.src.startsWith(app_url)) { app++;ap++;fcp++;fc++; }

                if (img.src.startsWith(fs_url)) { fs++; }
                if (img.src.startsWith(fsp_url)) { fsp++;fs++; }
                if (img.src.startsWith(fd_url)) { fd++;fsp++;fs++; }
                if (img.src.startsWith(fdp_url)) { fdp++;fd++;fsp++;fs++; }
            }
            var dx = song.getElementsByClassName("music_score_block w_180 t_r f_l f_12")[0].innerHTML
            var myDx = parseInt(dx.split(">")[1].split(" / ")[0].replace(",",""))
            var totalDx = parseInt(dx.split(">")[1].split(" / ")[1].replace(",",""))
            var dxPercent = myDx/totalDx

            if (dxPercent >= 0.85) {d1 += 1}
            if (dxPercent >= 0.9) {d2 += 1}
            if (dxPercent >= 0.93) {d3 += 1}
            if (dxPercent >= 0.95) {d4 += 1}
            if (dxPercent >= 0.97) {d5 += 1}
        }
    }

    var clear_s = clear + "/" + totalSongs
    var s_s = s + "/" + totalSongs
    var sp_s = sp + "/" + totalSongs
    var ss_s = ss + "/" + totalSongs
    var ssp_s = ssp + "/" + totalSongs
    var sss_s = sss + "/" + totalSongs
    var sssp_s = sssp + "/" + totalSongs

    var fc_s = fc + "/" + totalSongs
    var fcp_s = fcp + "/" + totalSongs
    var ap_s = ap + "/" + totalSongs
    var app_s = app + "/" + totalSongs

    var fs_s = fs + "/" + totalSongs
    var fsp_s = fsp + "/" + totalSongs
    var fd_s = fd + "/" + totalSongs
    var fdp_s = fdp + "/" + totalSongs

    var d1_s = d1 + "/" + totalSongs
    var d2_s = d2 + "/" + totalSongs
    var d3_s = d3 + "/" + totalSongs
    var d4_s = d4 + "/" + totalSongs
    var d5_s = d5 + "/" + totalSongs

    var table = document.getElementsByClassName("col8 t_c")
    for (const el of table) {
        var img = el.getElementsByTagName("img")
        if (img.length > 0) {
            img = img[0]

            if (img.src.startsWith(clear_url)) {el.getElementsByClassName("f_10")[0].innerHTML = clear_s}
            if (img.src.startsWith(s_url)) {el.getElementsByClassName("f_10")[0].innerHTML = s_s}
            if (img.src.startsWith(sp_url)) {el.getElementsByClassName("f_10")[0].innerHTML = sp_s}
            if (img.src.startsWith(ss_url)) {el.getElementsByClassName("f_10")[0].innerHTML = ss_s}
            if (img.src.startsWith(ssp_url)) {el.getElementsByClassName("f_10")[0].innerHTML = ssp_s}
            if (img.src.startsWith(sss_url)) {el.getElementsByClassName("f_10")[0].innerHTML = sss_s}
            if (img.src.startsWith(sssp_url)) {el.getElementsByClassName("f_10")[0].innerHTML = sssp_s}

            if (img.src.startsWith(fc_url)) {el.getElementsByClassName("f_10")[0].innerHTML = fc_s}
            if (img.src.startsWith(fcp_url)) {el.getElementsByClassName("f_10")[0].innerHTML = fcp_s}
            if (img.src.startsWith(ap_url)) {el.getElementsByClassName("f_10")[0].innerHTML = ap_s}
            if (img.src.startsWith(app_url)) {el.getElementsByClassName("f_10")[0].innerHTML = app_s}

            if (img.src.startsWith(fs_url)) {el.getElementsByClassName("f_10")[0].innerHTML = fs_s}
            if (img.src.startsWith(fsp_url)) {el.getElementsByClassName("f_10")[0].innerHTML = fsp_s}
            if (img.src.startsWith(fd_url)) {el.getElementsByClassName("f_10")[0].innerHTML = fd_s}
            if (img.src.startsWith(fdp_url)) {el.getElementsByClassName("f_10")[0].innerHTML = fdp_s}

            if (img.src.startsWith(d1_url)) {el.getElementsByClassName("f_10")[0].innerHTML = d1_s}
            if (img.src.startsWith(d2_url)) {el.getElementsByClassName("f_10")[0].innerHTML = d2_s}
            if (img.src.startsWith(d3_url)) {el.getElementsByClassName("f_10")[0].innerHTML = d3_s}
            if (img.src.startsWith(d4_url)) {el.getElementsByClassName("f_10")[0].innerHTML = d4_s}
            if (img.src.startsWith(d5_url)) {el.getElementsByClassName("f_10")[0].innerHTML = d5_s}
        }
    }

    var screw = document.getElementsByClassName("screw_block m_15 f_15 p_s")[0]
    screw.innerHTML += " (Filtering only maimai ~ FiNALE)"
}
