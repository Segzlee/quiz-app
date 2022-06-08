"use strict";

let blur = "Blur";

let quiz = [
  {
    id: 1,
    question: "Guess the Artist with this Lyrics?",
    challenge:
      "'Anytime wey I see you for the club, I dey television your body'",
    answer: "Burna Boy",
    a: "Rema",
    b: "Burna Boy",
    c: "Tekno",
    d: "Wizkid",
  },

  {
    id: 2,
    question: "What is the real name of this Nigerian Artist ?",
    challenge: "Patoranking",
    answer: "Patrick Okorie",
    a: "Patrick Okonkwo",
    b: "Patrick Okoro",
    c: "Patrick Okafor",
    d: "Patrick Okorie",
  },
  {
    id: 3,
    question: "What is the real name of this Nigerian Artist ?",
    challenge: "Naira Marley",
    answer: "Azeez Fashola",
    a: "Azeez Fashola",
    b: "Omoniyi Temidayo",
    c: "Adewale Mayowa",
    d: "Tunde Fashola",
  },
  {
    id: 38,
    question: "Guess The Music Video",
    challenge: `<img src="joro.png"></img>`,
    answer: "Joro",
    a: "Joro",
    b: "Ghetto Love",
    c: "Soco",
    d: "Daddy Yo",
  },
  {
    id: 4,
    question: "Which Of these Wizkid's songs came out in 2017",
    challenge: "",
    answer: "Ojuelegba Remix",
    a: "Ojuelegba",
    b: "Fever",
    c: "Ojuelegba Remix",
    d: "Omalicha",
  },
  {
    id: 5,
    question: "Guess the Album Cover?",
    challenge: `<img src="Softs${blur}.png"></img>`,
    answer: "Wizkid - Sound from the other side",
    a: "Banky W - R&BW",
    b: "Wizkid - Sound from the other side",
    c: "Iyanya - Desire",
    d: "Davido - A Good Time",
  },
  {
    id: 6,
    question: "Which Simi Project are these songs from ?",
    challenge: "Ayo, By You, Love On Me",
    answer: "Omo Charlie Champagne, Vol 1",
    a: "Simisola",
    b: "Omo Charlie Champagne, Vol 1",
    c: "Ogaju",
    d: "Chemistry",
  },
  {
    id: 7,
    question: "Guess The Artist",
    challenge: "Maga 2 Mugu, Pere & One Thing",
    answer: "Davido",
    a: "D'Banj",
    b: "Davido",
    c: "Wande Coal",
    d: "Mayorkun",
  },
  {
    id: 8,
    question: "What is the real name of this Nigerian Artist ?",
    challenge: "Wizkid",
    answer: "Ayodeji Balogun",
    a: "Ayomide Balogun",
    b: "Ayodeji Balogun",
    c: "Ayomide Ibrahim",
    d: "Ayomide Bashorun",
  },
  {
    id: 9,
    question: "Guess The Music Video",
    challenge: `<img src="Science-Student.jpg"></img>`,
    answer: "Science Student",
    a: "Kana",
    b: "Motigbana",
    c: "Wavy Level",
    d: "Science Student",
  },
  {
    id: 10,
    question: "What is the real name of this Nigerian Artist ?",
    challenge: "Davido",
    answer: "David Adeleke",
    a: "David Adedeji",
    b: "David Ayodeji",
    c: "David Adeleke",
    d: "David Oyeleke",
  },
  {
    id: 11,
    question: "Which Olamide Project are these songs from ?",
    challenge: "Duro Soke, Eleda Mi o, Turn Up",
    answer: "Baddest Guy Ever Liveth",
    a: "Eyan Mayweather",
    b: "YBNL",
    c: "Street OT",
    d: "Baddest Guy Ever Liveth",
  },
  {
    id: 12,
    question: "Guess The Artist",
    challenge: "Wad Up, Joy & Omalicha",
    answer: "Wizkid",
    a: "Runtown",
    b: "Reekado Banks",
    c: "Wizkid",
    d: "Kizz Daniel",
  },
  {
    id: 13,
    question: "Which Of these Olamide's songs came out in 2017",
    challenge: "",
    answer: "Wo",
    a: "Wo",
    b: "Kana",
    c: "Science Student",
    d: "Pepper Dem Gang",
  },
  {
    id: 14,

    question: "Which Of these Burna Boy's songs came out in 2017",
    challenge: "",
    answer: "Rock Your Body",
    a: "Koni Baje",
    b: "Want it All",
    c: "Rock Your Body",
    d: "Don Gongor",
  },

  {
    id: 15,
    question: "What is the real name of this Nigerian Artist ?",
    challenge: "Olamide",
    answer: "Olamide Adedeji",
    a: "Olamide Adeoye",
    b: "Olamide Adekunle",
    c: "Olamide Adedeji",
    d: "Olamide Adeleke",
  },
  {
    id: 16,
    question: "Guess the Album Cover?",
    challenge: `<img src="agt${blur}.png"></img>`,
    answer: "Davido - A Good Time",
    a: "Olamide - Carpe Dierm",
    b: "Odunsi - Rare",
    c: "Davido - A Good Time",
    d: "Burna Boy - L.I.F.E",
  },
  {
    id: 17,
    question: "Guess the Album Cover?",
    challenge: `<img src="outside${blur}.png"></img>`,
    answer: "Burna Boy - Outside",
    a: "Burna Boy - Outside",
    b: "Wizkid - Made In Lagos",
    c: "Burna Boy - L.I.F.E",
    d: "Burna Boy - African Giant",
  },

  {
    id: 18,
    question: "Guess The Artist",
    challenge: "Destiny, Koni Baje & Gba",
    answer: "Burna Boy",
    a: "Runtown",
    b: "Patoranking",
    c: "Tekno",
    d: "Burna Boy",
  },
  {
    id: 19,
    question: "Which Kizz Daniel Project are these songs from ?",
    challenge: "Gobe, Mama, Duro",
    answer: "New Era",
    a: "New Era",
    b: "King Of Love",
    c: "No Bad Songz",
    d: "Barnabas",
  },
  {
    id: 20,
    question: "Guess the Album Cover?",
    challenge: `<img src="bgel${blur}.png"></img>`,
    answer: "Olamide - Baddest Guy Ever Liveth",
    a: "Kiss Daniel - New Era",
    b: "Wande Coal - Wanted",
    c: "Olamide - Baddest Guy Ever Liveth",
    d: "Burna Boy - African Giant",
  },

  {
    id: 21,
    question: "Guess the Artist with this Lyrics?",
    challenge: "'The Kain pain wey I feel that day, me I no fit talk again'",
    answer: "Joeboy",
    a: "Joeboy",
    b: "Seyi Shay",
    c: "Adekunle Gold",
    d: "Mayorkun",
  },
  {
    id: 22,
    question: "What is the real name of this Nigerian Artist ?",
    challenge: "Burna Boy",
    answer: "Damini Ogulu",
    a: "Damini Olotu",
    b: "Damini Ologi",
    c: "Damini Ogulu",
    d: "Damini Oleku",
  },
  {
    id: 23,

    question: "Guess the Artist with this Lyrics?",
    challenge:
      "'If I had Known the life I was Searching for was already my own'",
    answer: "Adekunle Gold",
    a: "Brymo",
    b: "Johnny Drille",
    c: "Adekunle Gold",
    d: "Wurld",
  },
  {
    id: 24,
    question: "Guess The Artist",
    challenge: "Bia, Jangilova & Pack and Go",
    answer: "Seyi Shay",
    a: "Runtown",
    b: "Seyi Shay",
    c: "Simi",
    d: "Kizz Daniel",
  },
  {
    id: 25,
    question: "Which Wizkid Project are these songs from ?",
    challenge: "Sweet Love, Naughty Ride, Dirty Whine",
    answer: "Sounds From The Other Side",
    a: "Superstar",
    b: "Sounds From The Other Side",
    c: "Made In Lagos",
    d: "Ayo",
  },

  {
    id: 26,
    question: "Guess the Artist with this Lyrics?",
    challenge:
      "'Make We scatter this place tonight, Dance and sweating Like say na fight'",
    answer: "Tiwa Savage",
    a: "Teni",
    b: "Seyi Shay",
    c: "Fireboy DML",
    d: "Tiwa Savage",
  },

  {
    id: 27,
    question: "Guess the Artist with this Lyrics?",
    challenge: "'What have you done to me oh?/ Gat me chasing after you'",
    answer: "Fireboy DML",
    a: "Joeboy",
    b: "Fireboy DML",
    c: "Kizz Daniel",
    d: "Mayorkun",
  },
  {
    id: 28,
    question: "Which Tiwa Savage Project are these songs from ?",
    challenge: "My Darling, Keys To The City, Go Down",
    answer: "R.E.D",
    a: "R.E.D",
    b: "Once Upon A Time",
    c: "Sugarcane",
    d: "Tales By Moonlight",
  },

  {
    id: 29,
    question: "Guess The Artist",
    challenge: "Saro, Magun & Ibadi",
    answer: "Niniola",
    a: "Lil Kesh",
    b: "Niniola",
    c: "Yemi Alade",
    d: "Tiwa Savage",
  },
  {
    id: 31,
    question: "Guess The Music Video",
    challenge: `<img src="allOverVid.png"></img>`,
    answer: "All Over",
    a: "Get It Now",
    b: "Tiwa's Vibe",
    c: "All Over",
    d: "Ma Lo",
  },
  {
    id: 32,
    question: "Guess The Music Video",
    challenge: `<img src="lady.png"></img>`,
    answer: "Lady",
    a: "Dumebi",
    b: "Lady",
    c: "Booty Bounce",
    d: "Ginger Me",
  },
  {
    id: 33,
    question: "Guess The Music Video",
    challenge: `<img src="joromi.png"></img>`,
    answer: "Joromi",
    a: "Joromi",
    b: "Complete Me",
    c: "Ayo",
    d: "Smile For Me",
  },
  {
    id: 34,
    question: "Guess The Music Video",
    challenge: `<img src="vibration.png"></img>`,
    answer: "Vibration",
    a: "King",
    b: "Party Scatter",
    c: "Need You",
    d: "Vibration",
  },
  {
    id: 35,
    question: "Guess The Music Video",
    challenge: `<img src="pana.png"></img>`,
    answer: "Pana",
    a: "Skeletun",
    b: "Pana",
    c: "Enjoy",
    d: "Jogodo",
  },
  {
    id: 36,
    question: "Guess The Music Video",
    challenge: `<img src="billionaire.png"></img>`,
    answer: "Billionaire",
    a: "Billionaire",
    b: "Case",
    c: "Hustle",
    d: "Uyo Meyo",
  },
  {
    id: 38,
    question: "Guess The Music Video",
    challenge: `<img src="fall.png"></img>`,
    answer: "Fall",
    a: "If",
    b: "Fall",
    c: "Wonder Woman",
    d: "Assurance",
  },
  {
    id: 39,
    question: "Guess The Music Video",
    challenge: `<img src="On-The-Low.jpg"></img>`,
    answer: "On The Low",
    a: "Gum Body",
    b: "Pull up",
    c: "Gbona",
    d: "On The Low",
  },
  {
    id: 40,
    question: "When Was This Party Jam Released?",
    challenge: "PENALTY by Small Doctor",
    answer: "2016",
    a: "2016",
    b: "2017",
    c: "2018",
    d: "2015",
  },
  {
    id: 41,
    question: "When Was This Party Jam Released?",
    challenge: "SOCO by Wizkid",
    answer: "2018",
    a: "2016",
    b: "2017",
    c: "2018",
    d: "2015",
  },
  {
    id: 42,
    question: "When Was This Party Jam Released?",
    challenge: "GONGO ASO by 9ice",
    answer: "2008",
    a: "2006",
    b: "2007",
    c: "2008",
    d: "2009",
  },
  {
    id: 43,
    question: "When Was This Party Jam Released?",
    challenge: "KILLIN DEM by Burna Boy & Zlatan",
    answer: "2019",
    a: "2016",
    b: "2017",
    c: "2019",
    d: "2018",
  },
  {
    id: 44,
    question: "When Was This Party Jam Released?",
    challenge: "IF by Davido",
    answer: "2017",
    a: "2016",
    b: "2017",
    c: "2018",
    d: "2015",
  },
  {
    id: 45,
    question: "When Was This Party Jam Released?",
    challenge: "BUMPER TO BUMPER by Wande Coal",
    answer: "2009",
    a: "2007",
    b: "2008",
    c: "2009",
    d: "2010",
  },
  {
    id: 46,
    question: "When Was This Party Jam Released?",
    challenge: "ALL OVER by Tiwa Savage",
    answer: "2018",
    a: "2016",
    b: "2017",
    c: "2018",
    d: "2019",
  },
  {
    id: 47,
    question: "Guess Who Sang This Song?",
    challenge: "PARTY SCATTER",
    answer: "Fireboy DML",
    a: "Oxlade",
    b: "Joeboy",
    c: "Rema",
    d: "Fireboy DML",
  },
  {
    id: 48,
    question: "Guess Who Owned This Song?",
    challenge: "NOBODY",
    answer: "DJ Neptune",
    a: "Joeboy",
    b: "Mr Eazi",
    c: "DJ Neptune",
    d: "None",
  },
  {
    id: 49,
    question: "Which Foreign Artist jump on WizKid and Tems' Song?",
    challenge: "ESSENCE",
    answer: "Justin Bieber",
    a: "Chris Brown",
    b: "Drake",
    c: "Ed Sheeran",
    d: "Justin Bieber",
  },
  {
    id: 37,
    question: "Who Owns this lyrics?",
    challenge:
      "Help me tell Diana something, Diana say she no longer want me...If you leave me na felony, If you leave me na apology",
    answer: "Buju",
    a: "Rema",
    b: "Wizkid",
    c: "Buju",
    d: "Fireboy DML",
  },
  {
    id: 50,
    question: "Guess Who Sang This Song?",
    challenge: "Lagos Boys",
    answer: "Olamide",
    a: "Olamide",
    b: "Falz",
    c: "Reminisce",
    d: "Naira Marley",
  },
];

let options = document.querySelector("#options").querySelectorAll("div");
let question = document.querySelector("#question").querySelector("h2");
let challenge = document.querySelector("#challenge");
let optionA = document.querySelector("#optionA");
let optionB = document.querySelector("#optionB");
let optionC = document.querySelector("#optionC");
let optionD = document.querySelector("#optionD");
let won = document.querySelector("#won");
let lose = document.querySelector("#lose");
let played = [];

let randomQuiz = quiz.sort((a, b) => {
  return 0.5 - Math.random();
});

let quiz1 = 5;

defaultDisplay();

function defaultDisplay() {
  randomQuiz = quiz.sort((a, b) => {
    return 0.5 - Math.random();
  });

  question.innerHTML = randomQuiz[quiz1].question;
  challenge.innerHTML = randomQuiz[quiz1].challenge;
  optionA.innerHTML = randomQuiz[quiz1].a;
  optionB.innerHTML = randomQuiz[quiz1].b;
  optionC.innerHTML = randomQuiz[quiz1].c;
  optionD.innerHTML = randomQuiz[quiz1].d;
  won.innerHTML = 0;
  lose.innerHTML = 0;
  options.forEach((opt) => {
    opt.style.background = "";
  });
}

let restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
  played.splice(0, played.length);
  defaultDisplay();
});

function myClick() {
  quiz1++;
  question.innerHTML = randomQuiz[quiz1].question;
  challenge.innerHTML = randomQuiz[quiz1].challenge;
  optionA.innerHTML = randomQuiz[quiz1].a;
  optionB.innerHTML = randomQuiz[quiz1].b;
  optionC.innerHTML = randomQuiz[quiz1].c;
  optionD.innerHTML = randomQuiz[quiz1].d;
}

function loseOrWin(color, score, option) {
  if (randomQuiz[quiz1].challenge.includes("Blur")) {
    let img = challenge.querySelector("img").src.replace("Blur", "");
    challenge.querySelector("img").src = img;
  }

  played.push(randomQuiz[quiz1]);
  if (played.length < 30) {
    option.style.background = color;
    options.forEach((opt) => {
      if (opt.innerHTML === randomQuiz[quiz1].answer) {
        opt.style.background = "green";
      }
    });
    score.innerHTML++;

    setTimeout(() => {
      options.forEach((opt) => {
        opt.style.background =
          "linear-gradient(to top,rgb(239, 56, 86), rgb(228, 99, 120),rgb(255, 90, 117), rgb(255, 205, 119))";
      });

      myClick();
    }, 1500);
  } else if (played.length === 30) {
    option.style.background = color;
    options.forEach((opt) => {
      if (opt.innerHTML === randomQuiz[quiz1].answer) {
        opt.style.background = "green";
      }
    });

    score.innerHTML++;
    restart.style.display = "block";

    let msg =
      Number(won.innerHTML) > Number(lose.innerHTML)
        ? "YOU WON! 🕺💃"
        : "TRY AGAIN! 🙃"; //? Number(won.innerHTML) === Number(lose.innerHTML) : "TIE!";
    challenge.innerHTML = msg;
  }
  return;
}

options.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    if (opt.innerHTML === randomQuiz[quiz1].answer) {
      loseOrWin("green", won, opt);
    } else if (opt.innerHTML !== randomQuiz[quiz1].answer) {
      loseOrWin("red", lose, opt);
    }
  });
});
