// http://api.quran-tafseer.com/quran/{sura_number}/{ayah_number}
var quranTafseerURL = "http://api.quran-tafseer.com/quran/1/2";
var url = "https://api.quran.com/api/v4/quran/translations/131"

// tafseer id = 169 for Ibn Kathir
// translation id = 131 for Dr. Mustafa Khattab

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
});