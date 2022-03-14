class SuggestionItem {
  constructor(_parentId, _index, _item) {
    this.parentId = _parentId;
    this.title = _item.title;
    this.img = _item.image;
    this.description = _item.description;
    this.index = _index;
  }

  render() {
    let div = document.createElement("div");
    div.className = "box row col-12 m-0 p-0";

    if (this.index % 2 == 0) {
      div.innerHTML = `
      <div class="col-4 p-0">
        <img src=${this.img} class="left_img w-100 h-100" />
      </div>

      <div class="col-8 text-start">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
      </div>`;
    } else {
      div.innerHTML = `
      <div class="col-8 text-start">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
      </div>

      <div class="col-4 p-0">
        <img src=${this.img} class="right_img w-100 h-100" />
      </div>`;
    }

    document.querySelector(this.parentId).append(div);
  }
}
