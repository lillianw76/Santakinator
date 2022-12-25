// go back
var back = $('#back-btn');
back.on("click", goBack);
function goBack() {
  location.href="index.html";
}

// sparkles to tracker
var sparkle1 = $('#s1');
var sparkle2 = $('#s2');
var sparkle3 = $('#s3');

sparkle1.on("click", toTracker);
sparkle2.on("click", toTracker);
sparkle3.on("click", toTracker);

function toTracker() {
  location.href = "tracker.html";
}

// gift randomizer for middle school + high school
const yeschoco = ["Lindt truffles", "Chocolate chip cookies", "Hot cocoa bombs", "Hot chocolate on a stick", "Brownies", "Ferrero rocher"];
const nochoco = ["Portable charger", "Phone case", "Pretzels", "Airpod case", "Sour patch kids", "Candle"];
const maybechoco = ["Milano cookies", "Lindt truffles", "Snickerdoodle cookies", "Frosted sugar cookies", "Sour patch kids", "Pretzels"];
const girlsyk = ["LANEIGE lip sleeping mask", "Spotify premium gift card", "Claw clips", "Fuzzy socks", "Tote bag", "Lip gloss"];
const boysyk = ["Water bottle", "Nike gift card", "A beanie", "Fuzzy socks", "Bluetooth speaker", "Spotify premium gift card"];
const othersyk = ["Spotify premium gift card", "Fuzzy socks", "Tote bag", "A beanie", "Water bottle", "Throw blanket"];
const strangers = ["Candle", "Portable charger", "VISA gift card", "Water bottle", "Throw blanket", "Fuzzy socks"];
var arrayIndex = Math.floor(Math.random() * 6);

// questions
var q = document.getElementById('q'); //og question element 
var qn = document.createElement('h2') 
qn.classList.add('q-new');

// choices
var c1 = document.getElementById('c1'); //og choices element

var c2 = document.createElement('div');
c2.className = "choices";

var c3 = document.createElement('div');
c3.className = "choices";

var c4 = document.createElement('div');
c4.className = "choices";

// submit buttons
var sdiv1 = document.getElementById('sdiv1'); //og submit button div element
var sbtn1 = document.getElementById('sbtn1'); //og submit button element 

var sdiv2 = document.createElement('div');
var sbtn2 = document.createElement('button');
sbtn2.id = "sbtn2";
sbtn2.type = "button";
sbtn2.className = "submit-btn";
sbtn2.innerHTML = "Next";
sdiv2.appendChild(sbtn2);

var sdiv3 = document.createElement('div');
var sbtn3 = document.createElement('button');
sbtn3.id = "sbtn3";
sbtn3.type = "button";
sbtn3.className = "submit-btn";
sbtn3.innerHTML = "Next";
sdiv3.appendChild(sbtn3);

var sdiv4 = document.createElement('div');
var sbtn4 = document.createElement('button');
sbtn4.id = "sbtn4";
sbtn4.type = "button";
sbtn4.className = "submit-btn";
sbtn4.innerHTML = "Next";
sdiv4.appendChild(sbtn4);

// reset button & tracker button for end
var rdiv = document.createElement('div');
var rbtn = document.createElement('button');
rbtn.id = "rbtn";
rbtn.type = "button";
rbtn.className = "submit-btn";
rbtn.innerHTML = "Restart";
rdiv.appendChild(rbtn);

function restart() {
  event.preventDefault();
  location.href="start.html";
}

var tbtn = document.createElement('button');
tbtn.id = "tbtn";
tbtn.type = "button";
tbtn.className = "tracker-btn";
tbtn.innerHTML = "Add to Gift Tracker"
rdiv.appendChild(tbtn);

function toTracker() {
  event.preventDefault();
  location.href="tracker.html";
}

// starting the quiz
var sbtn1 = $('#sbtn1');
sbtn1.on("click", startAgeTrack);

function startAgeTrack() {
  event.preventDefault();

  if (document.getElementById("elem").checked) {
    elemQ1();
  } else if (document.getElementById("mid").checked) {
    highQ1(); // the same gifts are appropriate for both groups 
  } else if (document.getElementById("high").checked) {
    highQ1();
  } else if (document.getElementById("college").checked) {
    collegeQ1();
  } else if (document.getElementById("younga").checked) {
    collegeQ1(); // the same gifts are appropriate for both groups
  } else if (document.getElementById("mida").checked) {
    midaQ1();
  } 
}

// elementary school questions
function elemQ1() {
  qn.innerHTML = '<h2>What are their hobbies?</h2>';
  q.parentNode.replaceChild(qn, q);
  c2.innerHTML = '<label> <input type="radio" id="dg" name="hobbies"> Dance/Gymnastics</label> <br> <label> <input type="radio" id="sports" name="hobbies"> Sports</label> <br> <label> <input type="radio" id="music" name="hobbies"> Music</label> <br> <label> <input type="radio" id="art" name="hobbies"> Art</label> <br> <label> <input type="radio" id="other" name="hobbies"> Other</label> <br>';
  c1.parentNode.replaceChild(c2, c1);
  sdiv1.parentNode.replaceChild(sdiv2, sdiv1);
  var sbtn2 = $('#sbtn2');
  sbtn2.on("click", elemQ2);
}

function elemQ2() { 
  if (document.getElementById("dg").checked) {
    qn.classList.add("rtitle");
    c2.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c2.innerHTML = `<br> <h4>Scrunchies</h4> <br> <h4>&</h4> <br> <h4>A duffel bag</h4>`;
    sdiv2.parentNode.replaceChild(rdiv, sdiv2);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("sports").checked) {
    qn.classList.add("rtitle");
    c2.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c2.innerHTML = `<br> <h4>A soccer ball</h4> <br> <h4>&</h4> <br> <h4>A water bottle</h4>`;
    sdiv2.parentNode.replaceChild(rdiv, sdiv2);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("music").checked) {
    qn.classList.add("rtitle");
    c2.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c2.innerHTML = `<br> <h4>A Bluetooth karaoke microphone</h4> <br> <h4>&</h4> <br> <h4>A toy ukulele</h4>`;
    sdiv2.parentNode.replaceChild(rdiv, sdiv2);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("art").checked) {
    qn.classList.add("rtitle");
    c2.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c2.innerHTML = `<br> <h4>A coloring book</h4> <br> <h4>&</h4> <br> <h4>Model magic clay</h4>`;
    sdiv2.parentNode.replaceChild(rdiv, sdiv2);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c2.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c2.innerHTML = `<br> <h4>Uno card game</h4> <br> <h4>&</h4> <br> <h4>A slime making kit</h4>`;
    sdiv2.parentNode.replaceChild(rdiv, sdiv2);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

// middle & high school questions 
function highQ1() {
  qn.innerHTML = '<h2>What is your relationship with the giftee?</h2>';
  q.parentNode.replaceChild(qn, q);
  c2.innerHTML = '<label> <input type="radio" id="classmate" name="relationship"> Classmate</label> <br> <label> <input type="radio" id="foaf" name="relationship"> Friend of a friend</label> <br> <label> <input type="radio" id="stranger" name="relationship"> Stranger</label> <br>';
  c1.parentNode.replaceChild(c2, c1);
  sdiv1.parentNode.replaceChild(sdiv2, sdiv1);
  var sbtn2 = $('#sbtn2');
  sbtn2.on("click", highQ2);
}

function highQ2() {
  event.preventDefault();

  if (document.getElementById("classmate").checked) { 
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", highClassmateGender); 
  } else if (document.getElementById("foaf").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", highFoafGender);
  } else if (document.getElementById("stranger").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", highStrangerGender);
  } 
}

function highClassmateGender() {
  event.preventDefault();

  if (document.getElementById("female").checked) {
    qn.innerHTML = '<h2>Do they like chocolate?</h2>';
    c4.innerHTML = '<label> <input type="radio" id="yeschoco" name="choco"> Yes</label> <br> <label> <input type="radio" id="nochoco" name="choco"> No</label> <br> <label> <input type="radio" id="maybechoco" name="choco"> Maybe</label> <br>';
    c3.parentNode.replaceChild(c4, c3);
    sdiv3.parentNode.replaceChild(sdiv4, sdiv3);
    var sbtn4 = $('#sbtn4');
    sbtn4.on("click", highClassmateFemaleChoco); 
  } else if (document.getElementById("male").checked) {
    qn.innerHTML = '<h2>Do they like chocolate?</h2>';
    c4.innerHTML = '<label> <input type="radio" id="yeschoco" name="choco"> Yes</label> <br> <label> <input type="radio" id="nochoco" name="choco"> No</label> <br> <label> <input type="radio" id="maybechoco" name="choco"> Maybe</label> <br>';
    c3.parentNode.replaceChild(c4, c3);
    sdiv3.parentNode.replaceChild(sdiv4, sdiv3);
    var sbtn4 = $('#sbtn4');
    sbtn4.on("click", highClassmateMaleChoco); 
  } else if (document.getElementById("other").checked) {
    qn.innerHTML = '<h2>Do they like chocolate?</h2>';
    c4.innerHTML = '<label> <input type="radio" id="yeschoco" name="choco"> Yes</label> <br> <label> <input type="radio" id="nochoco" name="choco"> No</label> <br> <label> <input type="radio" id="maybechoco" name="choco"> Maybe</label> <br>';
    c3.parentNode.replaceChild(c4, c3);
    sdiv3.parentNode.replaceChild(sdiv4, sdiv3);
    var sbtn4 = $('#sbtn4');
    sbtn4.on("click", highClassmateOtherChoco);
  }
}

function highClassmateFemaleChoco() {
  if (document.getElementById("yeschoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${yeschoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${girlsyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("nochoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${nochoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${girlsyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("maybechoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${girlsyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function highClassmateMaleChoco() {
  if (document.getElementById("yeschoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${yeschoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${boysyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("nochoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${nochoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${boysyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("maybechoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${boysyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function highClassmateOtherChoco() {
  if (document.getElementById("yeschoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${yeschoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${othersyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("nochoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${nochoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${othersyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("maybechoco").checked) {
    qn.classList.add("rtitle");
    c4.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c4.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${othersyk[arrayIndex]}</h4>`;
    sdiv4.parentNode.replaceChild(rdiv, sdiv4);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function highFoafGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${girlsyk[arrayIndex]}</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${boysyk[arrayIndex]}</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${othersyk[arrayIndex]}</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function highStrangerGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${strangers[arrayIndex]}</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${strangers[arrayIndex]}</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>${maybechoco[arrayIndex]}</h4> <br> <h4>&</h4> <br> <h4>${strangers[arrayIndex]}</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart);
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

// college & young adult questions
function collegeQ1() {
  qn.innerHTML = '<h2>What is your budget?</h2>';
  q.parentNode.replaceChild(qn, q);
  c2.innerHTML = '<label> <input type="radio" id="collegelow" name="budget"> $10-$25</label> <br> <label> <input type="radio" id="collegemed" name="budget"> $25-$50</label> <br> <label> <input type="radio" id="collegehigh" name="budget"> $50-$100</label> <br> <label> <input type="radio" id="collegehh" name="budget"> $100+</label> <br>';
  c1.parentNode.replaceChild(c2, c1);
  sdiv1.parentNode.replaceChild(sdiv2, sdiv1);
  var sbtn2 = $('#sbtn2');
  sbtn2.on("click", collegeBudget);
}

function collegeBudget() {
  if (document.getElementById("collegelow").checked) { 
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", collegeLowGender); 
  } else if (document.getElementById("collegemed").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", collegeMedGender);
  } else if (document.getElementById("collegehigh").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", collegeHighGender);
  } else if (document.getElementById("collegehh").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", collegeHHGender);
  } 
}

function collegeLowGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Fuzzy socks</h4> <br> <h4>&</h4> <br> <h4>A fun coffee mug</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A portable charger</h4> <br> <h4>&</h4> <br> <h4>A beanie</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A throw blanket</h4> <br> <h4>&</h4> <br> <h4>A book</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function collegeMedGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A Stanley tumbler</h4> <br> <h4>&</h4> <br> <h4>A film camera</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Xbox games</h4> <br> <h4>&</h4> <br> <h4>A wallet</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A wallet</h4> <br> <h4>&</h4> <br> <h4>A vinyl record</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function collegeHighGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A Lululemon gift card</h4> <br> <h4>&</h4> <br> <h4>Jewelry</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A Nike hoodie</h4> <br> <h4>&</h4> <br> <h4>A bluetooth speaker</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A Comfy hoodie</h4> <br> <h4>&</h4> <br> <h4>A Visa gift card</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function collegeHHGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A coffee machine</h4> <br> <h4>&</h4> <br> <h4>Concert tickets</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Bluetooth headphones</h4> <br> <h4>&</h4> <br> <h4>A coffee machine</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Concert tickets</h4> <br> <h4>&</h4> <br> <h4>A coffee machine</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

// middle aged questions
function midaQ1() {
  qn.innerHTML = '<h2>What is your budget?</h2>';
  q.parentNode.replaceChild(qn, q);
  c2.innerHTML = '<label> <input type="radio" id="midalow" name="budget"> $10-$25</label> <br> <label> <input type="radio" id="midamed" name="budget"> $25-$50</label> <br> <label> <input type="radio" id="midahigh" name="budget"> $50-$100</label> <br> <label> <input type="radio" id="midahh" name="budget"> $100+</label> <br>';
  c1.parentNode.replaceChild(c2, c1);
  sdiv1.parentNode.replaceChild(sdiv2, sdiv1);
  var sbtn2 = $('#sbtn2');
  sbtn2.on("click", midaBudget);
}

function midaBudget() {
  if (document.getElementById("midalow").checked) { 
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", midaLowGender); 
  } else if (document.getElementById("midamed").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", midaMedGender);
  } else if (document.getElementById("midahigh").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", midaHighGender);
  } else if (document.getElementById("midahh").checked) {
    qn.innerHTML = '<h2>What is their gender?</h2>';
    c3.innerHTML = '<label> <input type="radio" id="female" name="gender"> Female</label> <br> <label> <input type="radio" id="male" name="gender"> Male</label> <br> <label> <input type="radio" id="other" name="gender"> Other</label> <br>';
    c2.parentNode.replaceChild(c3, c2);
    sdiv2.parentNode.replaceChild(sdiv3, sdiv2);
    var sbtn3 = $('#sbtn3');
    sbtn3.on("click", midaHHGender);
  } 
}

function midaLowGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Loose leaf tea</h4> <br> <h4>&</h4> <br> <h4>A desk plant</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>An Amazon gift card</h4> <br> <h4>&</h4> <br> <h4>Winter gloves</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Winter gloves</h4> <br> <h4>&</h4> <br> <h4>A portable charger</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function midaMedGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Wine</h4> <br> <h4>&</h4> <br> <h4>A cheese tray</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Wine</h4> <br> <h4>&</h4> <br> <h4>A laptop desk</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Wine</h4> <br> <h4>&</h4> <br> <h4>A wireless mouse</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function midaHighGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A personal heater</h4> <br> <h4>&</h4> <br> <h4>A keyboard</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A briefcase</h4> <br> <h4>&</h4> <br> <h4>A keyboard</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A keyboard</h4> <br> <h4>&</h4> <br> <h4>A backpack</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}

function midaHHGender() {
  if (document.getElementById("female").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>A coffee machine</h4> <br> <h4>&</h4> <br> <h4>Bluetooth headphones</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("male").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Bluetooth headphones</h4> <br> <h4>&</h4> <br> <h4>A coffee machine</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  } else if (document.getElementById("other").checked) {
    qn.classList.add("rtitle");
    c3.classList.add("rtext");
    qn.innerHTML = '<h2>Santa says the perfect gifts for them are...</h2>';
    c3.innerHTML = `<br> <h4>Bluetooth headphones</h4> <br> <h4>&</h4> <br> <h4>A coffee machine</h4>`;
    sdiv3.parentNode.replaceChild(rdiv, sdiv3);
    var rbtn = $('#rbtn');
    rbtn.on("click", restart); 
    var tbtn = $('#tbtn');
    tbtn.on("click", toTracker);
  }
}
