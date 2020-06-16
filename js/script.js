var ButtonSearch = document.querySelector(".search");
var SearchPopup = document.querySelector(".appoinment-form");
var DateArrival = document.querySelector(".date-arrival-choice");


ButtonSearch.addEventListener("click", function ()
{SearchPopup.classList.toggle("appoinment-form-hidden");
SearchPopup.classList.toggle("appoinment-form");
DateArrival.focus();
});