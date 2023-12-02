function openNav() {
    document.getElementById("navigation_main").style.width = "250px";
    document.getElementById("collapse-dot").style.margin = "0";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("navigation_main").style.width = "0";
    document.getElementById("collapse-dot").style.margin = "10px";
  }