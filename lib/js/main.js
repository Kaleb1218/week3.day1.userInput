const submitButt = document.querySelector("#submit_button");
const result = document.querySelector("#story_result"); 
const title = document.getElementById("main_title");
const title_check = document.getElementById("title_input");
const noun_check = document.getElementById("noun");
const verb_check = document.getElementById("verb");
const adj_check = document.getElementById("adjective");
const storyPlan = document.querySelector(".form_container"); 
const story = document.querySelector(".main_container"); 

title_check.addEventListener("input", updateValue);

function updateValue(e) {
    title.textContent = e.target.value;
}

submitButt.addEventListener("click", check);

function Onclick() {
    storyPlan.style.display = "none";
    result.innerHTML = "Last night I ate a " + noun_check.value + ", and today I just had to " + verb_check.value + ". What a " + adj_check.value + " day!";
    story.style.display = "block";
}

function check(e) {
    e.preventDefault();

    if (title_check.value === "" || noun_check.value === "" || verb_check.value === "" || adj_check.value === "") {
        alert("Please Complete the form");
        return false;
    } else {
        return Onclick();
    }
}

    