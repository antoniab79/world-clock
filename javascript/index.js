function updateLiveTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("GB");

  londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let zagrebElement = document.querySelector("#zagreb");
  let zagrebDateElement = zagrebElement.querySelector(".date");
  let zagrebTimeElement = zagrebElement.querySelector(".time");
  let zagrebTime = moment().tz("Europe/Zagreb");

  zagrebDateElement.innerHTML = zagrebTime.format("MMMM Do, YYYY");
  zagrebTimeElement.innerHTML = zagrebTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}
updateLiveTime();
setInterval(updateLiveTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
