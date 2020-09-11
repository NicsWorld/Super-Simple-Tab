setInitialValue();
setQuote();
setTopSites();
setRandomColor();
initializeColors();

function convert(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

function sliceString(string) {
  let x = string.slice(0,1);
  if(x === "0") {
    return string.slice(1);
  } else {
    return string;
  }
}
function setInitialValue() {
  const timeDiv = document.getElementById("time");
  const dateDiv = document.getElementById("date");
  var d = new Date();
  var dd = String(d.getDate()).padStart(2, '0');
  var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var month_by_name = month[d.getMonth()];
  var convertedDate = convert(dd);
  var formattedDate = sliceString(dd) + convertedDate;
  var yyyy = d.getFullYear();
  var date = month_by_name + '  ' + formattedDate;
  var dd = String(d.getDate()).padStart(2, '0');

  var time = d.toLocaleTimeString();

  timeDiv.innerHTML = time;
  dateDiv.innerHTML = date;
}

setInterval(function() {
  const timeDiv = document.getElementById("time");
  const dateDiv = document.getElementById("date");
  var d = new Date();
  var dd = String(d.getDate()).padStart(2, '0');

  var time = d.toLocaleTimeString();

  timeDiv.innerHTML = time;
}, 1000);

function setTopSites() {
  const topSitesDiv = document.getElementById("topSites");
  var top = chrome.topSites.get((arr) => {
    for(let i = 0; i<arr.length; i++) {
      const current = arr[i];
      const url = `https://logo.clearbit.com/${current.url}`;

      topSitesDiv.insertAdjacentHTML('beforeend',
      `<a class="site" href=${current.url}>
        <img id="logo${i}" class="logo" src="chrome://favicon/size/16@2x/${current.url}">
        <div class="site-title">${current.title}</div>
      </a>`);
    }
    document.getElementById("logo0").addEventListener("error", handleError);
    document.getElementById("logo1").addEventListener("error", handleError);
    document.getElementById("logo2").addEventListener("error", handleError);
    document.getElementById("logo3").addEventListener("error", handleError);
    document.getElementById("logo4").addEventListener("error", handleError);
    document.getElementById("logo5").addEventListener("error", handleError);
    document.getElementById("logo6").addEventListener("error", handleError);
    document.getElementById("logo7").addEventListener("error", handleError);
    document.getElementById("logo8").addEventListener("error", handleError);
    document.getElementById("logo9").addEventListener("error", handleError);
});
}

function handleError(element) {
  element.target.src = "lizard.png";
  return true;
}

function setQuote() {
  const quotes = [
    "You look great today",
    "You are so beautiful",
    "I'm not even lying, you are adorable",
    "You are so smart jeez",
    "I love you",
    "How can someone be as talented as you?",
    "Dang you fine",
    "You a fine ass bitch",
    "You are crushing it today",
    "You are so productive, wow",
    "You can do something!",
    "I totally believe in you",
    "Wow, you are amazing",
    "You are definitely capable of something",
    "Do it, or else",
    "Hi"
  ];
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  const quoteContainer = document.getElementById("quote");

  quoteContainer.innerHTML = randomQuote;
}

function initializeColors() {
  document.getElementById("peach").addEventListener("click", function() {
    setColor("#ffe5b4");
  });
  document.getElementById("blue").addEventListener("click", function() {
    setColor("#ADD8E6");
  });
  document.getElementById("green").addEventListener("click", function() {
    setColor("#98FB98");
  });
  document.getElementById("yellow").addEventListener("click", function() {
    setColor("#FFFFE0");
  });
  document.getElementById("red").addEventListener("click", function() {
    setColor("#ff9999");
  });
  document.getElementById("violet").addEventListener("click", function() {
    setColor("#ccccff");
  });
}

function setColor(color) {
  let body = document.querySelector("body");
  body.style.backgroundColor = color;
}

function setRandomColor() {
  const colors = [
    "#ffe5b4",
    "#ADD8E6",
    "#98FB98",
    "#FFFFE0",
    "#ff9999",
    "#ccccff",
  ];
  const randomColor = colors[Math.floor(Math.random()*colors.length)];

  setColor(randomColor);
}
