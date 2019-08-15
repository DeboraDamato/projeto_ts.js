document.addEventListener('DOMContentLoaded', function(event) {
  let $navBarButton = document.querySelector("#offcanvas");
  let $navBarMenu = document.querySelector("#sidebar-offcanvas");
  $navBarButton.addEventListener("click", function (event) {            
      $navBarMenu.classList.toggle("active");

  });
});