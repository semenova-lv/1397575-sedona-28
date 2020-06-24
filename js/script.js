var ButtonSearch = document.querySelector(".search");
var SearchForm = document.querySelector(".appoinment-form");
var DateArrival = SearchForm.querySelector("[name=date-arrival]");
var DateDeparture = SearchForm.querySelector("[name=date-departure]");

ButtonSearch.addEventListener("click", function (evt) {
    evt.preventDefault();
    SearchForm.classList.toggle("appoinment-form-hidden");
    SearchForm.classList.toggle("appoinment-form");
    SearchForm.classList.remove("appoinment-form-error");
    DateArrival.focus();
});

SearchForm.addEventListener("submit", function (evt) {
    if (!DateArrival.value || !DateDeparture.value) {
    evt.preventDefault();
    SearchForm.classList.add("appoinment-form-error");}
  });