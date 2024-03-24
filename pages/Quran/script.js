// https://quranenc.com/api/v1/translation/sura/english_saheeh/1

var showSurah = function (sura) {
    var url = `https://quranenc.com/api/v1/translation/sura/english_saheeh/${sura}`;
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            if (sura != 1) {
                $("#content").append(`<p class="arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>`); 
            }
            for (var i = 0; i < data.result.length; i++) {
                $("#content").append(`<p class="arabic"><span class="ayah">${data.result[i].aya}</span>${data.result[i].arabic_text}</p>`);
                $("#content").append(`<p class="arabic">${data.result[i].translation}</p>`);
            }
            for (var i = 0; i < data.result.length; i++) {
                $("#footnotes").append(`<p>${data.result[i].footnotes}</p>`);

            }
        });
};

var chapterArray = [];

var setQuranDetail = function () {
    for (var i = 0; i < 114; i++) {
        var chapter = quranObj[i].surah;
        chapterArray.push(chapter);
        $('#chapter-select').append(`<option value="${chapter}">${chapter}-${quranObj[i].name}</option>`);
    }
}
setQuranDetail();

$("#showBtn").on('click', function () {
    var surah = $('#chapter-select').find(":selected").val();
    showSurah(surah)
})