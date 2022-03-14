window.onload = function () {
  printAllItems();
};

function printAllItems() {
  printAllSuggestionItems();
  printAllBennerItems();
}

function printAllSuggestionItems() {
  suggestionDataArr.forEach((item, index) => new SuggestionItem("#middle_row_id", index, item).render());
}

function printAllBennerItems() {
  bannerDataArr.forEach((item, index) => {
    if (index == 0 || index == 1) {
      if (index % 2 == 0) {
        new BannerItem("#left_row_id", item, "mb-3").render();
      } else {
        new BannerItem("#left_row_id", item, "mb-0").render();
      }
    } else {
      if (index % 2 == 0) {
        new BannerItem("#right_row_id", item, "mb-3").render();
      } else {
        new BannerItem("#right_row_id", item, "mb-0").render();
      }
    }
  });
}
