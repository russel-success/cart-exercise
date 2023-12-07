var large_img = $(".large-section img");
const small_imgs_arr = $(".small-imgs").toArray();

for (var i = 0; i < small_imgs_arr.length; i++) {
  var small_img_box = small_imgs_arr[i];
  var small_img
  $(small_img_box).click(function () {
    large_img.attr("src", small_img.children("img").attr("src"));
    console.log(large_img.attr('src'));
  });
}
