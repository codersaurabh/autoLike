// copy paste script as it is into your developer console.

setInterval(function () {
  var desktopLikeButton = document.getElementsByClassName(
    "doubletake-like-button"
  )[0];
  var mobileLikeButton = document.getElementsByClassName(
    "quickmatch-button-like"
  )[0];

  (desktopLikeButton || mobileLikeButton).click();
}, 600);


// -- use this script if you want to like online user only --

setInterval(function () {
  var desktopLikeButton = document.getElementsByClassName(
    "doubletake-like-button"
  )[0];
  var desktopUnlikeButton = document.getElementsByClassName(
    "doubletake-pass-button"
  )[0];
  let userStatus = document.getElementsByClassName(
    "cardstatuses-status online"
  );
  if (typeof userStatus !== "undefined" && userStatus.length > 0) {
    desktopLikeButton.click();
  } else {
    desktopUnlikeButton.click();
  }
}, 600);
