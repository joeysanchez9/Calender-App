
$(function () {
  

  // Loop through each hour of the workday (6am to 5pm)
  for (var i = 9; i <= 17; i++) {
    // Create a new time block element
    var timeBlock = $('<div>');
    timeBlock.addClass('time-block');

    // Create a new time element
    var time = $('<div>');
    time.addClass('time');
    time.text(dayjs({ hour: i }).format('h a'));

    // Create a new description element
    var description = $('<textarea>');
    description.addClass('description');
    description.attr('data-time', i);

    // Check the time and set the class accordingly (past, present, future)
    if (dayjs().hour() > i) {
      description.addClass('past');
    } else if (dayjs().hour() < i) {
      description.addClass('future');
    } else {
      description.addClass('present');
    }

  }

});
/// Get current date and time
var now = dayjs();

setInterval(function() {
  // Increment the current time by one second
  now = now.add(1, 'second');
  
  // Format the date and time with seconds
  var formatted = now.format("dddd, MMMM D, hh:mm:ss");
  
  // Update the text of the element with the ID "day"
  $("#day").text(formatted);
}, 1000); // repeat every 1000 milliseconds (i.e. 1 second)

// Display current date at top of page
$("#day").text(now.format("dddd, MMMM D, hh:mm:ss"));

// Loop through each time block
$(".time-block").each(function () {
  var hour = parseInt($(this).attr("id").split("-")[1]);
  
  // Check if the hour is in the past, present, or future
  if (hour < now.hour()) {
    $(this).addClass("past");
  } else if (hour === now.hour()) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});


// Save button click listener
$(".saveBtn").on("click", function () {
  // get the text content of the description textarea and the hour of the time-block
  var description = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id").split("-")[1];
  
  // Save the data to local storage
  localStorage.setItem(hour, description);
});

// Load saved data from local storage
$("#hour-6 .description").val(localStorage.getItem("6"));
$("#hour-7 .description").val(localStorage.getItem("7"));
$("#hour-8 .description").val(localStorage.getItem("8"));
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("1"));
$("#hour-14 .description").val(localStorage.getItem("2"));
$("#hour-15 .description").val(localStorage.getItem("3"));
$("#hour-16 .description").val(localStorage.getItem("4"));
$("#hour-17 .description").val(localStorage.getItem("5"));

