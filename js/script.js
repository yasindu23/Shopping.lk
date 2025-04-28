//sale
let timeOutput = document.getElementById("time");

setInterval(timer, 1000);
let hour, minets,seconds;

hour = "01";
minets = 40;
seconds = 50;

function timer() {
 // seconds
 seconds--; 
 if(seconds == 0) {
     minets--;
     seconds = 40;
 } else if(seconds < 10) {
     seconds = "0" + seconds;
 }

 // minets
 if(minets == 0) {
     hour = "00";
 }
 
 // hover
 if(hour == "00") {
     hour = "00";
     minets = "00";
     seconds = "00";
 }

 document.getElementById("hour").innerHTML = hour;
 document.getElementById("minets").innerHTML = minets;
 document.getElementById("seconds").innerHTML = seconds;

}

// card-inner-share-dropdown : jQuery
$(document).ready(function() {
    $(".d-list-in-share").click(function() {
        $(".card-inner-share-dropdown").fadeToggle();
    });
});

// search
function search() {
    let searchbox = document.getElementById("searchInput").value;
    
    // search results
    if(searchbox == "Fashions") {
        window.location = "f-page/f-main.html";
    } else if(searchbox == "Kids Toys") {
        window.location = "k-page/k-main.html";
    } else if(searchbox == "Electronic Devices") {
        window.location = "e-page/e-main.html";
    } else if(searchbox == "Sports") {
        window.location = "s-page/s-page.html";
    } else {
        document.getElementById("searchInput").value = "";
    }
}

// contact up page message
function sentYourMessage() {
    alert("Message is send");
}

// review
function reviewSubmit() {
    let review = document.getElementById("review").value;
    let name = document.getElementById("name").value;

    document.getElementById("Review-name").innerText = name + " - " + " " + "Today";
    document.getElementById("Review-user").innerText = review;
}