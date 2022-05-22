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
