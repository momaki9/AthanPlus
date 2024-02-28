console.log("data")
var athanTimesURL = "https://api.aladhan.com/v1/timingsByAddress/09-03-2015?address=Dubai,UAE&method=8";
// http://api.quran-tafseer.com/quran/{sura_number}/{ayah_number}
var quranTafseerURL = "http://api.quran-tafseer.com/quran/1/2";
fetch(quranTafseerURL)
    .then(function(res){
        return res.json()
    })
    .then(function (data){
        console.log(data)
    })