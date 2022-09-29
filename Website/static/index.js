var baseCSS = document.createElement('link');
baseCSS.rel = "stylesheet";
baseCSS.type = "text/css";
baseCSS.href = "base.css";

function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }



  function changeColor(colorId){
    fetch("/color-change", method="POST", {
      method: "POST",
      body: JSON.stringify({ colorId: colorId}),
    }).then((_res) => { 
      baseCSS.getElementById('sitecolor').style.color = '#' + colorId
    });

    //window.location.href = this.location;
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
    });
    



  });

  

