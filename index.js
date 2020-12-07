document.getElementById("Arrow").addEventListener("click", messageToggle);

function messageToggle(){
  document.getElementById("msgItemsId").classList.toggle("noDisplay");

  if (document.getElementById("msgItemsId").classList.contains("noDisplay")){
    document.getElementsByClassName("MessageArrow")[0].setAttribute("class", "fas fa-angle-double-up BlueEmojiColor MessageArrow");
  }else if (!document.getElementById("msgItemsId").classList.contains("noDisplay")){
    document.getElementsByClassName("MessageArrow")[0].setAttribute("class", "fas fa-angle-double-down BlueEmojiColor MessageArrow");
  }


}



// function tweetBtn() {
//
//   var leftTweetBtn = document.getElementsByClassName("TweetBtnText")[0];
//   if (window.matchMedia("(max-width: 1164px)").matches) { // If media query matches
//     leftTweetBtn.innerHTML = '<i class="fas fa-pen-fancy"></i>';
//   } else if (!window.matchMedia("(max-width: 1164px)").matches) {
//     leftTweetBtn.innerHTML = "Tweet";
//   }
// }


// window.matchMedia("(max-width: 1164px)").addListener(tweetBtn); // Attach listener function on state changes
// window.matchMedia("(min-width: 1164px)").addListener(tweetBtn);





// create function to remove icons
// function removeIcons {

  // query for icons
//   var icon3 = document.getElementsByClassName("StatusIcons")[3];
//   var icon4 = document.getElementsByClassName("StatusIcons")[4];
//
//   if (window.matchMedia("(max-width: 686px)").matches) {
//     icon3.setAttribute("class", "noDisplay");
//     icon4.setAttribute("class", "noDisplay");
//   }
//
// }

// addeventlistener to screen Width
// window.matchMedia("(max-width: 686px)").addListener(removeIcons)



// $(document).scroll(function () {
//             if ($(document).scrollTop() > 226) {
//                 $(".header").addClass("fixed");
//             } else {
//                 $(".header").removeClass("fixed");
//             }
//         });
// var Dots = $(".dotsDiv");
// Dots.hover(function()
//   $(".dots").css("color", "#4a7bd3");
//
// ));



// document.getElementById("Arrow").addEventListener("click", messageToggle);
//
// function messageToggle(){
//   document.getElementById("msgItemsId").classList.toggle("noDisplay");
//
//   document.getElementById("msgItemsId").style.display === "none" ?
//
//     document.getElementsByClassName("MessageArrow")[0].setAttribute("class", "fas fa-angle-double-up BlueEmojiColor MessageArrow")
//   :
//     document.getElementsByClassName("MessageArrow")[0].setAttribute("class", "fas fa-angle-double-down BlueEmojiColor MessageArrow");
//
//
// }

// document.getElementById("Arrow").addEventListener("click", messageToggle);
//
// function messageToggle(){
//   var msgId = document.getElementById("msgItemsId");
//   var arrow = document.getElementById("Arrow");
//
//   msgId.style.display === "none" ?
//     msgId.style.display = "block"
//     arrow.classList.toggle("fa-angle-double-down")
//     arrow.classList.toggle("fa-angle-double-up")
//   :
//   msgId.style.display = "block"
//   arrow.classList.toggle("fa-angle-double-down")
//   arrow.classList.toggle("fa-angle-double-up");
//
//
//
// }

// document.getElementById("Arrow").addEventListener("click", messageToggle);

// function messageToggle(){
//   var msgId = document.getElementById("msgItemsId");
//
//
//   document.getElementById("msgItemsId").classList.toggle("blockDisplay");
//
//   if(msgId.style.display === "block"){
//       document.getElementsByClassName("MessageArrow")[0].setAttribute("class", "fas fa-angle-double-down BlueEmojiColor MessageArrow");
//   }

// document.getElementById("Arrow").addEventListener("click", messageToggle);
//
// function messageToggle(){
//   document.getElementById("msgItemsId").classList.toggle("noDisplay");
//
// }
