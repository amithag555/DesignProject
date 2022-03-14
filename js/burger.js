function burger_init() {
  let burger_btn = document.querySelector("#burger_btn");
  let close_btn = document.querySelector("#close_btn");

  let id_nav_show_hide = document.querySelector("#id_nav_show_hide");

  burger_btn.addEventListener("click", function () {
    id_nav_show_hide.style.display = "block";
    close_btn.style.display = "block";
    burger_btn.style.display = "none";
  });

  close_btn.addEventListener("click", function () {
    id_nav_show_hide.style.display = "none";
    close_btn.style.display = "none";
    burger_btn.style.display = "block";
  });
}

burger_init();
