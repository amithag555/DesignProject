let urlArr = [
  "https://www.youtube.com/embed/Ael2_ovX_CQ",
  "https://www.youtube.com/embed/WCQD467d3X8",
  "https://www.youtube.com/embed/WiZPdbLnbSA",
];

window.onload = function () {
  printAllPhoto();
  printAllVideo();
  onClickImgEvent();
  onClickCloseBtnEvent();
};

function printAllPhoto() {
  let photoRow = document.querySelector("#photo_row");

  for (let i = 1; i < 17; i++) {
    if (i % 2 == 1) {
      photoRow.innerHTML += `
        <div class="col">
          <div class="left_rotate">
            <img data-img src="galleryImages/pic${i}.jpg" class="w-100" />
          </div>
        </div>`;
    } else {
      photoRow.innerHTML += `
        <div class="col">
          <div class="right_rotate">
            <img data-img src="galleryImages/pic${i}.jpg" class="w-100" />
          </div>
        </div>`;
    }
  }
}

function printAllVideo() {
  let video_row = document.querySelector("#video_row");

  for (let i = 0; i < 3; i++) {
    video_row.innerHTML += `
      <div class="col">
        <div>
          <iframe
            class="video_box"
            width="100%"
            height="315"
            src=${urlArr[i]}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>`;
  }
}

function onClickImgEvent() {
  let imgLst = document.querySelectorAll("img[data-img]");
  let imgDisplayDiv = document.querySelector("#img_display_div");
  let imgToDisplay = document.querySelector("#img_to_display");

  imgLst.forEach((item) =>
    item.addEventListener("click", function () {
      imgDisplayDiv.style.display = "flex";
      imgToDisplay.src = item.src;
    })
  );
}

function onClickCloseBtnEvent() {
  let closeBtn = document.querySelector("#img_close_btn");
  let imgDisplayDiv = document.querySelector("#img_display_div");

  closeBtn.style.cursor = "pointer";

  closeBtn.addEventListener("click", function () {
    imgDisplayDiv.style.display = "none";
  });
}
