//we want to get  the tags into the text area
//declare a variable to hold the tags
const taggi = document.getElementById("tags");
const textarea = document.getElementById("textarea");

//use focus method to focus on the text area
textarea.focus();
//add anevent listerner
textarea.addEventListener("keyup", (e) => {
  //capture whatever is typed in the text area
  createTags(e.target.value);
  //create a condition to check when the eneter key isclicked
  if (e.key === "Enter") {
    setTimeout(() => {
      //clear the input value
      e.target.value = " ";
    }, 10);
    //create a method to randomly select the choices
    randomSelect();
  }
});
function createTags(input) {
  //create a variable to store the splitted values and turn them into an array
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  taggi.innerHTML = "";
  tags.forEach((tag) => {
    //create a variable
    const tagEl = document.createElement("span");
    //add a class to the created element
    tagEl.classList.add("tag");
    //add text to the lement
    tagEl.innerText = tag;
    taggi.appendChild(tagEl);
  });
}
//create a random select function
function randomSelect() {
  // the the time to 30 secs
  const times = 30;
  //create a variable to store the interval and use the interval function
  const interval = setInterval(() => {
    //pick a random  tag
    const randomTag = pickRandomTag();
    //highlight the picked tag
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    //set timeout
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}
//create te pickRandomTag
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
//create function to highlight and unhighlight tags
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
