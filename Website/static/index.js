var baseCSS = document.createElement('link');
baseCSS.rel = "stylesheet";
baseCSS.type = "text/css";
baseCSS.href = "base.css";
let create = document.querySelector(".submit-button");
const listItem = document.querySelectorAll(".list-element");
const closeModal = document.querySelector(".closeModal");



//Modal
listItem.forEach((item) => {
  
  item.querySelector(".open").addEventListener("click", () => {
    item.querySelector(".modal").showModal;
    item.querySelector(".modal").classList.add("display-modal");
    
  })  

  item.querySelector(".closeModal").addEventListener("click", () => {

      console.log("Working");
      item.querySelector(".modal").close();
      item.querySelector(".modal").classList.remove("display-modal");
    
  })
})







function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    })

  
  }





  const nav = document.querySelector(".centerNav");
  const navIcon = document.querySelector(".nav-icon");
  let tabs = document.querySelectorAll(".tab");
  let contents = document.querySelectorAll(".tab-content");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    
    if(lastScrollY < window.scrollY){
      nav.classList.add("nav-hidden")
      navIcon.classList.add("shown")
      
    }else{
      nav.classList.remove("nav-hidden")
      navIcon.classList.remove("shown")
    }
    lastScrollY = window.scrollY;
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () =>{

      contents.forEach((content) => {
        content.classList.remove('is-active');
        

      });

      tabs.forEach((tab) => {
        tab.classList.remove('is-active');

      });
      
      

      contents[index].classList.add('is-active');
      tabs[index].classList.add('is-active');
     
      if(tab.id == "write"){
        create.classList.add('submit-active');
      }else{
        create.classList.remove('submit-active');
      }

    });
    
   
    


  });

  let today = new Date().toISOString().substr(0, 10);
  document.querySelector("#date").value = today;



  

