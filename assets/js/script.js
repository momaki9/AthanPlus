// http://api.quran-tafseer.com/quran/{sura_number}/{ayah_number}
var quranTafseerURL = "http://api.quran-tafseer.com/quran/1/2";
//http://api.aladhan.com/v1/calendarByCity/:year/:month?city={city}&country={country}&method={method}
var athanTimesURL = "http://api.aladhan.com/v1/calendarByCity/2024/3?city=cerritos&country=United%20states&method=2";

var gregorianDate = $("#gregorian");
var hijriDateEl = $("#hijri-date");
var today = moment().format("MMMM, Do YYYY");
var dayOfMonth = moment().format("D");
var prayerTimesEl = $("#prayer-times");

var index = dayOfMonth - 1;
var prayerArr = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

fetch(athanTimesURL)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        // console.log(data.data)
        hijriDateEl.text(`${data.data[index].date.hijri.day} of ${data.data[index].date.hijri.month.en}, ${data.data[index].date.hijri.year}`);
        var myIndex = index;
        var indexArr = [];
        for (let j = 0; j < 5; j++) {
            indexArr.push(myIndex);
            var listEl = $("<li>");
            listEl.attr("id", `list-${j}`);
            prayerTimesEl.append(listEl);
            myIndex++;
        };

        $("#list-0").text(`${prayerArr[0]}: ${data.data[myIndex].timings.Fajr}`);
        $("#list-1").text(`${prayerArr[1]}: ${data.data[myIndex].timings.Dhuhr}`);
        $("#list-2").text(`${prayerArr[2]}: ${data.data[myIndex].timings.Asr}`);
        $("#list-3").text(`${prayerArr[3]}: ${data.data[myIndex].timings.Maghrib}`);
        $("#list-4").text(`${prayerArr[4]}: ${data.data[myIndex].timings.Isha}`);
    })


gregorianDate.text(today);