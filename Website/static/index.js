var baseCSS = document.createElement('link');
baseCSS.rel = "stylesheet";
baseCSS.type = "text/css";
baseCSS.href = "base.css";
let create = document.querySelector(".submit-button");
const listItem = document.querySelectorAll(".list-element");
const closeModal = document.querySelector(".closeModal");



//Modal

/*listItem.forEach((item) => {

  item.addEventListener("click", () => {
    item.querySelector(".modal").showModal;
    item.querySelector(".modal").classList.add("display-modal");

  })

  .querySelector(".modal").addEventListener("click", () => {

    console.log("Working", item, item.querySelector(".modal"));

    item.querySelector(".modal").close();
    item.querySelector(".modal").classList.remove("display-modal");




  })

})*/






//Note Deletion
function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  })


}






let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".tab-content");


tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    contents.forEach((content) => {
      content.classList.remove('is-active');


    });

    tabs.forEach((tab) => {
      tab.classList.remove('is-active');

    });



    contents[index].classList.add('is-active');
    tabs[index].classList.add('is-active');

    if (tab.id == "write") {
      create.classList.add('submit-active');
    } else {
      create.classList.remove('submit-active');
    }

  });





});



// Date auto entry
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;





