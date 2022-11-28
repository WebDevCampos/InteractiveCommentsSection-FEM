fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    let allScores = [];

    data.comments.map((item) => {
      allScores.push(item.score);
      item.replies.map((item) => {
        allScores.push(item.score);
      });
      console.log(allScores);
    });

    const cardScores = document.querySelectorAll(".score__value");
    cardScores.forEach((item) => {
      item.textContent = allScores;
    });
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
