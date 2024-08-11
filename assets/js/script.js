// hadith APIs:
// https://api.hadith.gading.dev/books?range=1-150
// https://api.hadith.gading.dev/books/bukhari?range=1-150
// https://api.hadith.gading.dev/

// api_key = $2y$10$K1k3Q9SQcaZ40CGNUx5NOU3nHyoY9lkrRfhsMJIBYKX9XCLwUwi
// hadith_url = 

//http://api.aladhan.com/v1/calendarByCity/:year/:month?city={city}&country={country}&method={method}

var gregorianDate = $("#gregorian");
var hijriDateEl = $("#hijri-date");
var today = moment().format("dddd MMMM, Do YYYY");
var currentTime = moment().format("h:mm A");
var dayOfMonth = moment().format("D");
var prayerTimesEl = $("#prayer-times");

var currentMonth = moment().format("M");
var currentYear = moment().format("YYYY")

var index = dayOfMonth - 1;
var prayerArr = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

// var athan = new Audio("assets/audio/Athan_Egypt.mp3");
// var myAudioEl = $("#my-audio");
var myAudioEl = document.getElementById("my-audio");

$("#test-btn").on("click", function () {
    // $("#exampleModal").modal()
    $("#myModal").modal("show");
});

$("#play-athan").on("click", function () {
    myAudioEl.play();
});

$("#dismiss-btn").on("click", function () {
    myAudioEl.pause();
});

var url = `https://api.aladhan.com/v1/calendarByCity/${currentYear}/${currentMonth}?city=norwalk&country=United%20states&method=2&adjustment=2`;

fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        // console.log(data)
        hijriDateEl.text(`${data.data[index].date.hijri.day} of ${data.data[index].date.hijri.month.en}, ${data.data[index].date.hijri.year}`);
        // var myIndex = index;
        // var indexArr = [];
        for (let j = 0; j < 5; j++) {
            // indexArr.push(myIndex);
            var listEl = $("<li>");
            listEl.attr("id", `list-${j}`);
            listEl.attr("class", "col-2 text-light bg-dark")
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

        var timeTillFajr = calculateDuration(fajrTime);
        var timeTillDhur = calculateDuration(dhuhrTime);
        var timeTillAsr = calculateDuration(asrTime);
        var timeTillMaghrib = calculateDuration(maghribTime);
        var timeTillIsha = calculateDuration(ishaTime);
        callAthan(fajrTime, timeTillFajr);
        callAthan(dhuhrTime, timeTillDhur);
        callAthan(asrTime, timeTillAsr);
        callAthan(maghribTime, timeTillMaghrib);
        callAthan(ishaTime, timeTillIsha);
    });


gregorianDate.text(today);

function displayCurrentTime() {

    setInterval(function () {
        var accurateTime = moment().format("h:mm:ss A");
        $("#current-time").text(`Current time: ${accurateTime}`);
        // console.log("hello")
    }, 1000);

};

displayCurrentTime();

function formatTime(time) {
    var militaryTime = time.split(" ")[0];
    var formatted = moment(militaryTime, "HH:mm").format("h:mm A");
    return formatted;
};

function callAthan(time, interval) {
    var duration = calculateDuration(time)
    if (duration < 0) {
        // console.log("A Prayer time has passed thus far")
        return;
    } else {
        // console.log("A prayer is coming up")
        setTimeout(function () {
            $("#myModal").modal("show");
            myAudioEl.play();
        }, interval);
    }
};

// console.log(calculateDuration("12:03 PM"));

function calculateDuration(time) {
    var givenTime = moment(time, "h:mm A");
    var timeNow = moment(currentTime, "h:mm A");
    var duration = moment.duration(givenTime.diff(timeNow));
    var timeInmSec = duration._milliseconds;
    return timeInmSec;
};

$("#update-settings").on("click", function(){
    var cityInput = $("#city-input").val().trim();
    var methodSelected = $("#method-select option:selected").val();
    // console.log(cityInput)
    // console.log(methodSelected)
    $("#settingsModal").modal("hide");
})

const apiUrl = 'https://www.hadithapi.com/api/sahih-bukhari/chapters?apiKey=$2y$10$K1k3Q9SQcaZ40CGNUx5NOU3nHyoY9lkrRfhsMJIBYKX9XCLwUwi';
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})