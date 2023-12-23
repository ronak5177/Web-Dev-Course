const createCard = (title, cName, views, monthsOld, duration, thumbnail) => {
  let viewCount;
  if (views <= 1000) {
    viewCount = views;
  } else if (views > 1000000) {
    viewCount = views / 1000000 + "M";
  } else {
    viewCount = views / 1000 + "K";
  }
  const html = ` <div class="container"><div class="box">
    <img src="${thumbnail}" alt="image.jpg"> 
    
    <span class="capsule">${duration}<span>
    </div>
    <div class="box2">
        <h2>${title}</h2>
        <p>${cName}  .  ${viewCount} views  .  ${monthsOld} months ago</p>
    </div></div>`;

  document.getElementsByTagName("body")[0].innerHTML += html;
};

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
  89000000,
  7,
  "31:22",
  "thumbnail.png"
);
createCard(
  "Introduction to FitnesWorld | Basics of nutritiions 3",
  "GymWorld",
  5600,
  7,
  "31:22",
  "gym.jfif"
);
