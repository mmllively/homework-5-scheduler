var commentDataEl = $("form-control");
var commentData = commentDataEl.val();
var btnText = [];

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var timeBlock = [
  "hour-9",
  "hour-10",
  "hour-11",
  "hour-12",
  "hour-13",
  "hour-14",
  "hour-15",
  "hour-16",
  "hour-17",
];

function funcTime() {
  //Extract "hour-" from each string in the array

  for (let index = 0; index < timeBlock.length; index++) {
    var elementTest = timeBlock[index];
    // console.log(elementTest);
    var newTimeLength = elementTest.replace("hour-", "");
  
  

  // - moment js will give you the current time and convert it to a whole number
  var currentTime = moment().hour();
  if (newTimeLength > currentTime) {
    //then add future class from css to the "form-control class"
document.getElementById("hour-" + newTimeLength).classList.add("future");
  } else if (newTimeLength < currentTime) {
    document.getElementById("hour-" + newTimeLength).classList.add("past");
  }else {
    document.getElementById("hour-" + newTimeLength).classList.add("present");
  }
}
}
funcTime();

var buttonInput = document.getElementsByClassName("saveBtn");
// console.log(buttonInput);
for (let index = 0; index < buttonInput.length; index++) {
  buttonInput[index].addEventListener("click", inputForm);
  
  
}


// when the input button is clicked, then the value user inputs is saved
function inputForm() {
console.log("click")
 let hour9 = $("#hour-9").val();
 console.log(hour9);
  localStorage.setItem("hour-9", hour9);
 
  console.log("click")
 let hour10 = $("#hour-10").val();
 console.log(hour10);
  localStorage.setItem("hour-10", hour10);
  
  console.log("click")
 let hour11 = $("#hour-11").val();
 console.log(hour11);
  localStorage.setItem("hour-11", hour11);
  
  console.log("click")
 let hour12 = $("#hour-12").val();
 console.log(hour12);
  localStorage.setItem("hour-12", hour12);
  
  console.log("click")
 let hour13 = $("#hour-13").val();
 console.log(hour13);
  localStorage.setItem("hour-13", hour13);

  console.log("click")
 let hour14 = $("#hour-14").val();
 console.log(hour14);
  localStorage.setItem("hour-14", hour14);

  console.log("click")
 let hour15 = $("#hour-15").val();
 console.log(hour15);
  localStorage.setItem("hour-15", hour15);
  
  console.log("click")
  let hour16 = $("#hour-16").val();
  console.log(hour16);
   localStorage.setItem("hour-16", hour16);
   
   console.log("click")
   let hour17 = $("#hour-17").val();
   console.log(hour17);
    localStorage.setItem("hour-17", hour17);


      //  WHEN I refresh the page
      //  THEN the saved events persist
      
}
 



// - In jquery you have to add the class
// - if hour is greater than the current hour then that it is in class future
// - if its less than add.class past
// - military time

// - only need the hh in momentjs to compare to the current hour
// - could jquery to build a div, build an input, etc creating a for each loop
// - each div is given an id = "hour-9" split the id, take out the hour- and then see if 9 is greater than or less than to give the class past or class future
// - onclick jquery
// - jquery getting the value of the form



$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));
