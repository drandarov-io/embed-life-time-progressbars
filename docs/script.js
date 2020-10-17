const params = new URLSearchParams(document.location.search);

// Now
var now = new Date()

// Birth
const year = parseInt(params.get("birth_year"));
const month = parseInt(params.get("birth_month") - 1);
const day = parseInt(params.get("birth_day"));
var birth = new Date()
birth.setDate(day)
birth.setMonth(month)
birth.setFullYear(year)

// Life
const life_length = parseInt(params.get("life_length"));
var life = new Date(birth.getTime())
life.setFullYear(life.getFullYear() + life_length)

var life_total_diff = life - birth

function update() {
    now = new Date()

    ///////
    // Year
    ///////
    bar_year = document.getElementById("year_bar")
    text_year = document.getElementById("year")

    var year_start = new Date(now.getTime())
    year_start.setHours(0)
    year_start.setMinutes(0)
    year_start.setSeconds(0)
    year_start.setDate(1)
    year_start.setMonth(0)
    var year_end = new Date(year_start.getTime())
    year_end.setFullYear(year_start.getFullYear() + 1)

    var year_total_diff = year_end - year_start
    var year_start_diff = now - year_start
    var year_end_diff = year_end - now
    var year_percent = year_start_diff / year_total_diff * 100
    bar_year.style.width = year_percent + "%"
    text_year.innerHTML = text_year.innerHTML.replace(/\(.*\)/, "(" + year_percent.toFixed(8) + "%)")

    ////////
    // Month
    ////////
    bar_month = document.getElementById("month_bar")
    text_month = document.getElementById("month")

    var month_start = new Date(now.getTime())
    month_start.setHours(0)
    month_start.setMinutes(0)
    month_start.setSeconds(0)
    month_start.setDate(1)
    var month_end = new Date(month_start.getTime())
    month_end.setMonth(month_start.getMonth() + 1)

    var month_total_diff = month_end - month_start
    var month_start_diff = now - month_start
    var month_end_diff = month_end - now
    var month_percent = month_start_diff / month_total_diff * 100
    bar_month.style.width = month_percent + "%"
    text_month.innerHTML = text_month.innerHTML.replace(/\(.*\)/, "(" + month_percent.toFixed(8) + "%)")

    //////
    // Day
    //////
    bar_day = document.getElementById("day_bar")
    text_day = document.getElementById("day")

    var day_start = new Date(now.getTime())
    day_start.setHours(0)
    day_start.setMinutes(0)
    day_start.setSeconds(0)
    var day_end = new Date(day_start.getTime())
    day_end.setDate(day_start.getDate() + 1)

    var day_total_diff = day_end - day_start
    var day_start_diff = now - day_start
    var day_end_diff = day_end - now
    var day_percent = day_start_diff / day_total_diff * 100
    bar_day.style.width = day_percent + "%"
    text_day.innerHTML = text_day.innerHTML.replace(/\(.*\)/, "(" + day_percent.toFixed(8) + "%)")

    ///////
    // Hour
    ///////
    bar_hour = document.getElementById("hour_bar")
    text_hour = document.getElementById("hour")

    var hour_start = new Date(now.getTime())
    hour_start.setMinutes(0)
    hour_start.setSeconds(0)
    var hour_end = new Date(hour_start.getTime())
    hour_end.setHours(hour_start.getHours() + 1)

    var hour_total_diff = hour_end - hour_start
    var hour_start_diff = now - hour_start
    var hour_end_diff = hour_end - now
    var hour_percent = hour_start_diff / hour_total_diff * 100
    bar_hour.style.width = hour_percent + "%"
    text_hour.innerHTML = text_hour.innerHTML.replace(/\(.*\)/, "(" + hour_percent.toFixed(8) + "%)")

    // Life
    bar_life = document.getElementById("life_bar")
    text_life = document.getElementById("life")

    var life_start_diff = now - birth
    var life_end_diff = life - now
    var life_percent = life_start_diff / life_total_diff * 100
    bar_life.style.width = life_percent + "%"
    text_life.innerHTML = text_life.innerHTML.replace(/\(.*\)/, "(" + life_percent.toFixed(8) + "%)")
}

update()
setInterval(update, 1000);