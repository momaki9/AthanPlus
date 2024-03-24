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