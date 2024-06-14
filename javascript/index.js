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
updateLiveTime();
setInterval(updateLiveTime, 1000);
