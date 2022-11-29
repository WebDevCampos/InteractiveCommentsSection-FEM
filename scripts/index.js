fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const cardScores = document.querySelectorAll(".score__value");
    const avatars = document.querySelectorAll(".avatar");
    const usernames = document.querySelectorAll(".comment__card--user-name");
    const dateCreated = document.querySelectorAll(".date__created");
    let allScores = [];
    let allImages = [];
    let allNames = [];
    let allDates = [];

    data.comments.map((item) => {
      allImages.push(item.user.image.png);
      item.replies.map((item) => {
        allImages.push(item.user.image.png);
        console.log(allImages);
      });
    });

    data.comments.map((item) => {
      allScores.push(item.score);
      item.replies.map((item) => {
        allScores.push(item.score);
      });
      console.log(allScores);
    });

    data.comments.map((item) => {
      allNames.push(item.user.username);
      item.replies.map((item) => {
        allNames.push(item.user.username);
        console.log(allNames);
      });
    });

    data.comments.map((item) => {
      allDates.push(item.createdAt);
      item.replies.map((item) => {
        allDates.push(item.createdAt);
        console.log(allNames);
      });
    });

    avatars.forEach((item, index) =>
      item.setAttribute("src", `${allImages[index]}`)
    );
    cardScores.forEach((item, index) => (item.textContent = allScores[index]));

    usernames.forEach((item, index) => (item.textContent = allNames[index]));
    dateCreated.forEach((item, index) => (item.textContent = allDates[index]));
  });

// const avatars = document.querySelectorAll(".avatar");
// const dateCreated = document.querySelectorAll(".date__created");
// const userName = document.querySelectorAll(".comment__card--user-name");

// let myScores = data.comments.map((score) => score.score);
// let myAvatars = data.comments.map((avatar) => avatar.user.image.png);
// // data.comments.map((avatar) => avatar.replies.user.image.png),

// let datePosted = data.comments.map((date) => date.createdAt);
// let user = data.comments.map((user) => user.user.username);

// scoreValue.forEach((item, index) => (item.textContent = myScores[index]));

// avatars.forEach((item, index) => {
//   item.setAttribute("src", myAvatars[index]);
// });
// dateCreated.forEach((item, index) => {
//   item.textContent = datePosted[index];
// });
// userName.forEach((item, index) => {
//   item.textContent = user[index];
// });
// data.comments.map((replies) =>
//   replies.replies.forEach((item) => console.log(item.user.image.png))
// );
