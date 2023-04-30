function copyText() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("playmc.mikamoenchmeier.com");
      
}

window.onload = function() {
    const myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
      myButton.innerHTML = "copied";
    });
  }
  
