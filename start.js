var startBtn = $('#start-btn');
startBtn.on("click", toSantakinator);


function toSantakinator() {
  location.href = "santakinator.html";
}

var sparkle1 = $('#s1');
var sparkle2 = $('#s2');
var sparkle3 = $('#s3');

sparkle1.on("click", toTracker);
sparkle2.on("click", toTracker);
sparkle3.on("click", toTracker);

function toTracker() {
  location.href = "tracker.html";
}

var back = $('#back-btn');
back.on("click", goBack);
function goBack() {
  location.href = "index.html";
}

