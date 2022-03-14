class BannerItem {
  constructor(_parentId, _item, _mb) {
    this.parentId = _parentId;
    this.title = _item.title;
    this.img = _item.image;
    this.description = _item.description;
    this.mb = _mb;
  }

  render() {
    let div = document.createElement("div");
    div.className = `banner_box col-12 ${this.mb} w-75 p-0`;
    div.setAttribute("data-aos", "fade-up");

    div.innerHTML = `
    <h2>${this.title}</h2>
    <img src=${this.img} class="w-100" />

    <p class="mt-2 p-2">${this.description}</p>
    `;

    document.querySelector(this.parentId).append(div);
  }
}
