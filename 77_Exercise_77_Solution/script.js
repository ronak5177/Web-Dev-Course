function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let viewNumber;
  if (views < 1000) {
    viewNumber = views;
  } else if (views < 1000000) {
    viewNumber = views / 1000 + "K";
  } else if (views > 1000000) {
    viewNumber = views / 1000000 + "M";
  }

  const html = ` <div class="card">
    <div class="image">
      <img src=${thumbnail} alt="image.png" />
      <div class="capsule">${duration}</div>
    </div>
    <div class="text">
      <h1>${title}</h1>
      <p>${cName} . ${viewNumber} views . ${monthsOld} months ago</p>
    </div>
  </div>`;

  document.querySelector(".container").innerHTML += html;
}

createCard(
  "Introduction to FitnesWorld | Basics of nutritiions 3",
  "GymWorld",
  5600,
  7,
  "31:22",
  "gym.jfif"
);

createCard(
    "Introduction to Backend | Sigma Web Devlopment 2",
    "YoutubeCommunity",
    89000000,
    7,
    "31:22",
    "thumbnail.png"
  );

createCard(
  "Introduction to FitnesWorld | Basics of weight lifting 1",
  "GymWorld",
  560000,
  7,
  "31:22",
  "gym.jfif"
);


createCard(
    "Introduction to Backend | Sigma Web Devlopment 2",
    "YoutubeCommunity",
    8900,
    7,
    "31:22",
    "thumbnail.png"
  );

