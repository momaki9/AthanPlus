// Quran Surahs data
var quranObj = [
    {
        surah: 1,
        name: 'Al-Fatiha (The Opening)',
        verses: 7
    },
    {
        surah: 2,
        name: 'Al-Baqarah (The Cow)',
        verses: 286
    },
    {
        surah: 3,
        name: 'Aali-Imran (The Family of Imraan)',
        verses: 200
    },
    {
        surah: 4,
        name: 'An-Nisa (The Women)',
        verses: 176
    },
    {
        surah: 5,
        name: "Al-Ma'ida (The Table)",
        verses: 120
    },
    {
        surah: 6,
        name: "Al-An'am (The Cattle)",
        verses: 165
    },
    {
        surah: 7,
        name: "Al-A'raf (The Heights)",
        verses: 206
    },
    {
        surah: 8,
        name: "Al-Anfal (The Spoils of War)",
        verses: 75
    },
    {
        surah: 9,
        name: "At-Tawbah (The Repentance)",
        verses: 129
    },
    {
        surah: 10,
        name: "Yunus (Prophet Jonah)",
        verses: 109
    },
    {
        surah: 11,
        name: "Hud (Prophet Hud)",
        verses: 123
    },
    {
        surah: 12,
        name: "Yusuf (Prophet Joseph)",
        verses: 111
    },
    {
        surah: 13,
        name: "AR-Ra'd (The Thunder)",
        verses: 43
    },
    {
        surah: 14,
        name: "Ibraheem (Prophet Ibraheem)",
        verses: 52
    },
    {
        surah: 15,
        name: "Al-Hijr (The Rocky Tract)",
        verses: 99
    },
    {
        surah: 16,
        name: "An-nahl (The Bee)",
        verses: 128
    },
    {
        surah: 17,
        name: "Al-Isra' (The Night Journey)",
        verses: 111
    },
    {
        surah: 18,
        name: "Al-Kahf (The Cave)",
        verses: 110
    },
    {
        surah: 19,
        name: "Maryam (Mary)",
        verses: 98
    },
    {
        surah: 20,
        name: "Ta-Ha (Ta-Ha)",
        verses: 135
    },
    {
        surah: 21,
        name: "Al-Anbiya' (The Prophets)",
        verses: 112
    },
    {
        surah: 22,
        name: "Al-Hajj (The Pilgrimage)",
        verses: 78
    },
    {
        surah: 23,
        name: "Al-Mu'minoon (The Believers)",
        verses: 118
    },
    {
        surah: 24,
        name: "Al-Noor (The Light)",
        verses: 64
    },
    {
        surah: 25,
        name: "Al-Furqan (The Criterion)",
        verses: 77
    },
    {
        surah: 26,
        name: "Al-Shu'ara' (The Poets)",
        verses: 227
    },
    {
        surah: 27,
        name: "Al-Naml (The Ants)",
        verses: 93
    },
    {
        surah: 28,
        name: "Al-Qasas (The Stories)",
        verses: 88
    },
    {
        surah: 29,
        name: "Al-Ankaboot (The Spider)",
        verses: 69
    },
    {
        surah: 30,
        name: "Al-Room (The Romans)",
        verses: 60
    },
    {
        surah: 31,
        name: "Luqman (Luqman)",
        verses: 34
    },
    {
        surah: 32,
        name: "As-Sajda (The Prostration)",
        verses: 30
    },
    {
        surah: 33,
        name: "Al-Ahzab (The Coalition)",
        verses: 73
    },
    {
        surah: 34,
        name: "Saba (Sheva)",
        verses: 54
    },
    {
        surah: 35,
        name: "Fatir (Originator)",
        verses: 45
    },
    {
        surah: 36,
        name: "Ya-Seen (Yaseen)",
        verses: 83
    },
    {
        surah: 37,
        name: "As-Saaffat (Those who set the ranks)",
        verses: 182
    },
    {
        surah: 38,
        name: "Saad (The letter Saad)",
        verses: 88
    },
    {
        surah: 39,
        name: "Az-Zumar (The Companies)",
        verses: 75
    },
    {
        surah: 40,
        name: "Gafir (The Forgiver)",
        verses: 85
    },
    {
        surah: 41,
        name: "Fussilat (Explained in detail)",
        verses: 54
    },
    {
        surah: 42,
        name: "Ash-Shura (Council)",
        verses: 53
    },
    {
        surah: 43,
        name: "Az-Zukhruf (The Ornaments of Gold)",
        verses: 89
    },
    {
        surah: 44,
        name: "Ad-Dukhan (The Smoke)",
        verses: 59
    },
    {
        surah: 45,
        name: "Al-Jasiyah (The Kneeling)",
        verses: 37
    },
    {
        surah: 46,
        name: "Al-Ahqaf (The Sandhills)",
        verses: 35
    },
    {
        surah: 47,
        name: "Muhammad (Muhammad)",
        verses: 38
    },
    {
        surah: 48,
        name: "Al-Fath (The Victory)",
        verses: 29
    },
    {
        surah: 49,
        name: "Al-Hujuraat (The Apartments)",
        verses: 18
    },
    {
        surah: 50,
        name: "Qaaf (The letter Qaaf)",
        verses: 45
    },
    {
        surah: 51,
        name: "Adh-Dhariyat (The Scatterers)",
        verses: 60
    },
    {
        surah: 52,
        name: "At-Tur (The Mountain)",
        verses: 49
    },
    {
        surah: 53,
        name: "An-Najm (The Star)",
        verses: 62
    },
    {
        surah: 54,
        name: "Al-Qamar (The Moon)",
        verses: 55
    },
    {
        surah: 55,
        name: "AR-Rahman (The Most Gracious)",
        verses: 78
    },
    {
        surah: 56,
        name: "Al-Waqiah (The Event)",
        verses: 96
    },
    {
        surah: 57,
        name: "Al-Hadid (The Iron)",
        verses: 29
    },
    {
        surah: 58,
        name: "Al-Mujadilah (The Pleading Woman)",
        verses: 22
    },
    {
        surah: 59,
        name: "Al-Hashr (The Banishment)",
        verses: 24
    },
    {
        surah: 60,
        name: "Al-Mumtahanah (The Woman who is Examined)",
        verses: 13
    },
    {
        surah: 61,
        name: "As-Saff (The Ranks)",
        verses: 14
    },
    {
        surah: 62,
        name: "Al-Jumua (The Congregation - Friday)",
        verses: 11
    },
    {
        surah: 63,
        name: "Al-Munafiqoon (The Hypocrites)",
        verses: 11
    },
    {
        surah: 64,
        name: "At-Taghabun (The Manifestation of Losses)",
        verses: 18
    },
    {
        surah: 65,
        name: "At-Talaq (Divorce)",
        verses: 12
    },
    {
        surah: 66,
        name: "At-Tahrim (The Prohibition)",
        verses: 12
    },
    {
        surah: 67,
        name: "Al-Mulk (The Kingdom)",
        verses: 30
    },
    {
        surah: 68,
        name: "Al-Qalam (The Pen)",
        verses: 52
    },
    {
        surah: 69,
        name: "Al-Haqqah (The Sure Truth)",
        verses: 52
    },
    {
        surah: 70,
        name: "Al-Ma'arij (The Ways of Ascent)",
        verses: 44
    },
    {
        surah: 71,
        name: "Nuh (Prophet Noah)",
        verses: 28
    },
    {
        surah: 72,
        name: "Al-Jinn (The Jinn)",
        verses: 28
    },
    {
        surah: 73,
        name: "Al-Muzzammil (The One Covering Himself)",
        verses: 20
    },
    {
        surah: 74,
        name: "Al-Muddath-thir (The One Wrapping Himself Up)",
        verses: 56
    },
    {
        surah: 75,
        name: "Al-Qiyamah (The Resurrection)",
        verses: 40
    },
    {
        surah: 76,
        name: "Al-Insan (The Man)",
        verses: 31
    },
    {
        surah: 77,
        name: "Al-Mursalaat (Those Sent Forth)",
        verses: 50
    },
    {
        surah: 78,
        name: "An-Naba' (The News)",
        verses: 40
    },
    {
        surah: 79,
        name: "An-Naziat (Those Whol Pull Out)",
        verses: 46
    },
    {
        surah: 80,
        name: "Abasa (He Frowned)",
        verses: 42
    },
    {
        surah: 81,
        name: "At-Takwir (The Overthrowing)",
        verses: 29
    },
    {
        surah: 82,
        name: "Al-Infitaar (The Splitting Asunder)",
        verses: 19
    },
    {
        surah: 83,
        name: "Al-Mutaffifin (The Defrauding)",
        verses: 36
    },
    {
        surah: 84,
        name: "Al-Inshiqaq (The Splitting Asunder)",
        verses: 25
    },
    {
        surah: 85,
        name: "Al-Burooj (The Big Stars)",
        verses: 22
    },
    {
        surah: 86,
        name: "At-Tariq (The Night Comer)",
        verses: 17
    },
    {
        surah: 87,
        name: "Al-Ala (The Most High)",
        verses: 19
    },
    {
        surah: 88,
        name: "Al-Ghaashiyah (The Overwhelming)",
        verses: 26
    },
    {
        surah: 89,
        name: "Al-Fajr (The Dawn)",
        verses: 30
    },
    {
        surah: 90,
        name: "Al-Balad (The City)",
        verses: 20
    },
    {
        surah: 91,
        name: "Ash-Shams (The Sun)",
        verses: 15
    },
    {
        surah: 92,
        name: "Al-Lail (The Night)",
        verses: 21
    },
    {
        surah: 93,
        name: "Ad-Dhuha (The Early Hours)",
        verses: 11
    },
    {
        surah: 94,
        name: "Al-Inshirah (The Opening Up)",
        verses: 8
    },
    {
        surah: 95,
        name: "At-Tin (The Fig)",
        verses: 8
    },
    {
        surah: 96,
        name: "Al-Alaq (The Clot)",
        verses: 19
    },
    {
        surah: 97,
        name: "Al-Qadr (The Majesty)",
        verses: 5
    },
    {
        surah: 98,
        name: "Al-Bayyinah (The Clear Evidence)",
        verses: 8
    },
    {
        surah: 99,
        name: "Az-Zalzalah (The Shaking)",
        verses: 8
    },
    {
        surah: 100,
        name: "Al-Adiyat (The Assaulters)",
        verses: 11
    },
    {
        surah: 101,
        name: "Al-Qari'a (The Calamity)",
        verses: 11
    },
    {
        surah: 102,
        name: "At-Takathur (The Rivalry in World Increase)",
        verses: 8
    },
    {
        surah: 103,
        name: "Al-Asr (The Time)",
        verses: 3
    },
    {
        surah: 104,
        name: "Al-Humazah (The Slanderer)",
        verses: 9
    },
    {
        surah: 105,
        name: "Al-Fil (The Elephant)",
        verses: 5
    },
    {
        surah: 106,
        name: "Quraish (Quraish)",
        verses: 4
    },
    {
        surah: 107,
        name: "Al-Maun (Act of Kindness)",
        verses: 7
    },
    {
        surah: 108,
        name: "Al-Kauthar (The Abundance)",
        verses: 3
    },
    {
        surah: 109,
        name: "Al-Kafirun (The Disbelievers)",
        verses: 6
    },
    {
        surah: 110,
        name: "An-Nasr (The Help)",
        verses: 3
    },
    {
        surah: 111,
        name: "Al-Masad (The Palm Fiber)",
        verses: 5
    },
    {
        surah: 112,
        name: 'Al-Ikhlas (The Unity)',
        verses: 4
    },
    {
        surah: 113,
        name: 'Al-Falaq (The Dawn)',
        verses: 5
    },
    {
        surah: 114,
        name: 'An-Nas (Mankind)',
        verses: 6
    }
];

// http://api.quran-tafseer.com/quran/{sura_number}/{ayah_number}
// https://api.quran.com/api/v4/quran/translations/131
var quranTafseerURL = "http://api.quran-tafseer.com/quran/1/2";
var url = "http://api.quran-tafseer.com/quran/1/1"

// tafseer id = 169 for Ibn Kathir
// translation id = 131 for Dr. Mustafa Khattab

var getVerse = function (chapter, verse) {
    //http://api.quran-tafseer.com/tafseer/1/1/1
    // https://quranenc.com/api/v1/translation/aya/{translation_key}/{sura_number}/{aya_number}
    // https://quranenc.com/api/v1/translation/sura/english_saheeh/1
    var quranUrl = `http://api.quran-tafseer.com/quran/${chapter}/${verse}`;
    // var surahUrl = `https://quranenc.com/api/v1/translation/sura/english_saheeh/1`
    var tafseerUrl = `https://quranenc.com/api/v1/translation/aya/english_saheeh/${chapter}/${verse}`;
    fetch(tafseerUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            $("#verse-arabic").text(data.result.arabic_text);
            $("#verse-tafseer").text(data.result.translation);
            $("#foot-notes").text(data.result.footnotes);
        });
};

var chapterArray = [];
var verseArray = [];

var setQuranDetail = function () {
    for (var i = 0; i < 114; i++) {
        var chapter = quranObj[i].surah;
        var verseNum = quranObj[i].verses;
        chapterArray.push(chapter);
        verseArray.push(verseNum);
        $('#chapter-select').append(`<option value="${chapter}">${chapter}-${quranObj[i].name}</option>`);
    }
}
setQuranDetail();

$("#aya-select").attr("disabled", true);

// dynamic chapter and verse select    
$('#chapter-select').on('change', function () {
    $("#aya-select").attr("disabled", false);
    $('#aya-select').html('');
    for (var j = 0; j < chapterArray.length; j++) {
        if ($('#chapter-select').val() == chapterArray[j]) {
            for (var i = 1; i < verseArray[j] + 1; i++) {
                $('#aya-select').append(`<option value="${i}">${i}</option>`);
            }
        }
    }
    if ($('#chapter-select').val() == 0) {
        $("#aya-select").attr("disabled", true);
    }
});

$("#showBtn").on('click', function () {
    var selectedChapter = $('#chapter-select').find(":selected").val();
    var selectedAyah = $('#aya-select').find(":selected").val();
    console.log(selectedChapter, selectedAyah)
    getVerse(selectedChapter, selectedAyah)
})