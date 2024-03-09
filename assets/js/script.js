// http://api.quran-tafseer.com/quran/{sura_number}/{ayah_number}
var quranTafseerURL = "http://api.quran-tafseer.com/quran/1/2";
//http://api.aladhan.com/v1/calendarByCity/:year/:month?city={city}&country={country}&method={method}
var athanTimesURL = "http://api.aladhan.com/v1/calendarByCity/2024/3?city=cerritos&country=United%20states&method=2";

var gregorianDate = $("#gregorian");
var hijriDateEl = $("#hijri-date");
var today = moment().format("MMMM, Do YYYY");
var currentTime = moment().format("h:mm A");
var dayOfMonth = moment().format("D");
var prayerTimesEl = $("#prayer-times");

var index = dayOfMonth - 1;
var prayerArr = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

var athan = new Audio("assets/audio/Athan_Egypt.mp3");
// var myAudioEl = $("#my-audio");
var myAudioEl = document.getElementById("my-audio");

$("#test-btn").on("click", function () {
    // $("#exampleModal").modal()
    $("#myModal").modal("show");
});

$("#play-athan").on("click", function(){
    myAudioEl.play();
});

$("#dismiss-btn").on("click", function(){
    myAudioEl.pause()
});

fetch(athanTimesURL)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {

        hijriDateEl.text(`${data.data[index].date.hijri.day} of ${data.data[index].date.hijri.month.en}, ${data.data[index].date.hijri.year}`);
        // var myIndex = index;
        // var indexArr = [];
        for (let j = 0; j < 5; j++) {
            // indexArr.push(myIndex);
            var listEl = $("<li>");
            listEl.attr("id", `list-${j}`);
            prayerTimesEl.append(listEl);
            // myIndex++;
        };
        // console.log(myIndex)
        // console.log(indexArr)
        var fajrTime = formatTime(data.data[index].timings.Fajr);
        var dhuhrTime = formatTime(data.data[index].timings.Dhuhr);
        var asrTime = formatTime(data.data[index].timings.Asr);
        var maghribTime = formatTime(data.data[index].timings.Maghrib);
        var ishaTime = formatTime(data.data[index].timings.Isha);

        $("#list-0").text(`${prayerArr[0]}: ${fajrTime}`);
        $("#list-1").text(`${prayerArr[1]}: ${dhuhrTime}`);
        $("#list-2").text(`${prayerArr[2]}: ${asrTime}`);
        $("#list-3").text(`${prayerArr[3]}: ${maghribTime}`);
        $("#list-4").text(`${prayerArr[4]}: ${ishaTime}`);

        callAthan(fajrTime);
        callAthan(dhuhrTime);
        callAthan(asrTime);
        callAthan(maghribTime);
        callAthan(ishaTime);

    })


gregorianDate.text(today);

function formatTime(time) {
    var militaryTime = time.split(" ")[0];
    var formatted = moment(militaryTime, "HH:mm").format("h:mm A");
    return formatted;
};

function callAthan(time) {
    var givenTime = moment(time, "h:mm A").format("h:mm");
    currentTime = moment(currentTime, "h:mm A").format("h:mm");

    if (givenTime === currentTime) {
        $("#myModal").modal("show");
    }
};

// callAthan("6:36 PM");