const message = document.querySelector(".message");
const guessInput = document.querySelector("input");
const button = document.querySelector("button");
const record = document.querySelector(".record");
const myArray = [
  "سینا",
  "نگار",
  "ستاره",
  "پریسا",
  "نرگس",
  "نجمه",
  "نرگس",
  "فرامرز",
  "صدف",
  "محمد",
  "حسین",
  "محمدرضا",
  "ایمان",
  "نرگس",
  "طاهره",
  "امید",
  "مهدی",
  "مهین",
  "شهرام",
  "شاهین",
  "سعید",
  "عاطفه",
  "ازاده",
  "جعفر",
  "اصغر",
  "میترا",
  "مجید",
  "مجید",
  "بیژن",
  "علیرضا",
  "فرید",
  "معصومه",
  "سیروان",
  "حمیدرضا",
  "خاتون",
  "ملیکا",
  "یزید",
  "فاطمه",
  "غضنفر",
  "یعقوب",
  "لیلا",
  "نوشین",
  "مهگل",
  "مارال",
  "نارگل",
  "دلوین",
  "پگاه",
  "میثم",
  "داوود",
  "فرزانه",
  "امیررضا"
];
console.log(myArray.length);
var inplay = false;
let score = 0;
let scramble = "";
let scrambled = "";
let bgSound;
let winSound;
button.addEventListener("click", function () {
  if (!inplay) {
    inplay = true;
    guessInput.value = "";
    score = 0;
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join(" ");
    message.innerHTML = scrambled;
    console.log(scramble);
    console.log(scrambled);
    guessInput.classList.toggle("collapse");
    button.innerText = "حدس زدن";
    button.classList.remove("btn-lg");
    button.classList.add("btn-sm");
    record.innerHTML = "تعداد حدس ها : 0";
    waitingGif();
    winsound();
    bgSound = bgsound();
    bgSound.play();
  } else {
    score++;
    record.innerHTML = "تعداد حدس ها :" + score;
    //Win
    if (guessInput.value == scramble) {
      console.log("You Win");
      inplay = false;
      message.innerHTML =
        '<span class="text-success h4 font-weight-bold">آفرین درسته </span> ' +
        scramble +
        " بود و تو با " +
        score +
        " بار حدس به جواب رسیدی ";
      button.innerHTML = "شروع مجدد";
      guessInput.classList.toggle("collapse");
      winGif();
      bgSound.pause();
      const sound = winsound();
      sound.play();
    }
    //Lose
    else {
      console.log("You Lose");
      message.innerHTML =
        '<span class="text-danger h4 font-weight-bold">اشتباه بود دوباره امتحان کن</span> <br/>' +
        scrambled;

      loseGif();
      losesound();
      setTimeout(waitingGif, 5000);
      bgSound.pause();
      setTimeout(function () {
        bgSound.play();
      }, 5000);
    }
  }
});
function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];

  return tempWord;
}

function randomArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    // console.log(temp);
    let j = Math.floor(Math.random() * arr.length);
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
  }
}

//GIF SECTION

function introGif() {
  let gif = document.querySelector(".gif");
  let intro1 = (gif.src = "img/intro/intro1.gif");
  let intro2 = (gif.src = "img/intro/intro2.gif");
  let introArray = [intro1, intro2];
  let x = Math.floor(Math.random() * introArray.length);
  gif.src = introArray[x];
}

function waitingGif() {
  let gif = document.querySelector(".gif");
  let wait = [];
  let waitImg = [
    "img/waiting/wait1.gif",
    "img/waiting/wait2.gif",
    "img/waiting/wait3.gif",
  ];
  let x = Math.floor(Math.random() * waitImg.length);
  for (let i = 0; i < waitImg.length; i++) {
    wait[i] = gif.src = waitImg[x];
    console.log(wait[i]);
  }
}

function winGif() {
  let gif = document.querySelector(".gif");
  let win = [];
  let winImg = [
    "img/win/win1.gif",
    "img/win/win2.gif",
    "img/win/win3.gif",
    "img/win/win4.gif",
    "img/win/win5.gif",
    "img/win/win6.gif",
    "img/win/win7.gif",
    "img/win/win8.gif",
    "img/win/win9.gif",
  ];
  let x = Math.floor(Math.random() * winImg.length);
  for (let i = 0; i < winImg.length; i++) {
    win[i] = gif.src = winImg[x];
    console.log(win[i]);
  }
}

function loseGif() {
  let gif = document.querySelector(".gif");
  let lose = [];
  let loseImg = [
    "img/lose/lose1.gif",
    "img/lose/lose2.gif",
    "img/lose/lose3.gif",
    "img/lose/lose4.gif",
    "img/lose/lose5.gif",
    "img/lose/lose6.gif",
  ];
  let x = Math.floor(Math.random() * loseImg.length);
  for (let i = 0; i < loseImg.length; i++) {
    lose[i] = gif.src = loseImg[x];
    console.log(lose[i]);
  }
}

function bgsound() {
  const audio = new Audio("sounds/bg/bg.m4a");
  return audio;
}

function winsound() {
  if (winSound) {
    winSound.pause();
    winSound.currentTime = 0;
  }

  let win = [];
  let winsong = [
    "sounds/wining/win1.mp3",
    "sounds/wining/win2.mp3",
    "sounds/wining/win3.mp3",
    "sounds/wining/win4.mp3",
    "sounds/wining/win5.mp3",
    "sounds/wining/win6.mp3",
    "sounds/wining/win7.mp3",
    "sounds/wining/win8.mp3",
  ];
  let x = Math.floor(Math.random() * winsong.length);
  for (let i = 0; i < winsong.length; i++) {
    win[i] = winsong[x];
    console.log(win[i]);
    const audio = new Audio(win[i]);
    winSound = audio;
    return winSound;
  }
}

function losesound() {
  let lose = [];
  let losesong = [
    "sounds/losing/lose1.m4a",
    "sounds/losing/lose2.m4a",
    "sounds/losing/lose3.m4a",
    "sounds/losing/lose4.m4a",
  ];
  let x = Math.floor(Math.random() * losesong.length);
  for (let i = 0; i < losesong.length; i++) {
    lose[i] = losesong[x];
    console.log(lose[i]);
    const audio = new Audio(lose[i]);
    audio.play();
  }
}
