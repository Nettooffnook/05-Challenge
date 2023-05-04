let currentHour = dayjs().format("HH"); 
const timeBlockArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
let currentDay = $("#currentDay");
let timeBlock = $(".time-block");
let hour9 = $("#hour9");
let hour10 = $("#hour10");
let hour11 = $("#hour11");
let hour12 = $("#hour12");
let hour1 = $("#hour1");
let hour2 = $("#hour2");
let hour3 = $("#hour3");
let hour4 = $("#hour4");
let hour5 = $("#hour5");
let saveBtn = $(".saveBtn");
let Input = $(".description");

console.log(currentHour);

$(function () {
  saveBtn.click(function () {
    let key = $(this).data("key"); 
    let value = $("#" + key).val(); 
    localStorage.setItem(key, value); 
    console.log(localStorage);
  });

  Input.each(function () {
    let key = $(this).attr("id"); 
    let storedValue = localStorage.getItem(key); 
    if (storedValue) {
      $(this).val(storedValue); 
    }
  });

  for (const id of timeBlockArray) {
    if (id < currentHour) {
      $(`#${id}`).addClass("past"); 
    } else if (id === currentHour) {
      $(`#${id}`).addClass("present"); 
    } else if (id > currentHour) {
      $(`#${id}`).addClass("future"); 
    }
  }

  let today = dayjs().format("dddd, MMM D, YYYY"); 

  currentDay.text(today);
});