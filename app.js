const dark = document.querySelector(".dark"); //The Document method querySelector() returns the first Element within the document that 
//matches the specified selector, or group of selectors. If no matches are found, null is returned.
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

dark.addEventListener("click", () => { //when i click on this our sidebar's and activeListItem's class wiil be changed to our default values
    sidebar.className = "sidebar";
    activeListItem.className = "list-item active";
});

night.addEventListener("click", () => {
    sidebar.className = "sidebar night";
    activeListItem.className = "list-item night active";
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";
});