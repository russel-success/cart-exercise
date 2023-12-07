var large_img = $(".large-section img");
console.log(large_img.attr('src'));
// $(".small_imgs").on("click", function () {
//   alert("hello, small clicked");
//   var small_img_src = $(this).children("img").attr("src");
//   console.log(small_img_src);
//   large_img.attr("src", small_img_src);
// });

const small_imgs_arr = $(".small-imgs").toArray();

for (var i = 0; i < small_imgs_arr.length; i++) {
  var small_img_box = small_imgs_arr[i];
  $(small_img_box).click(function () {
    $(large_img).attr("src", $(small_img_box).children("img").attr("src"));
    console.log(large_img.attr("src"));
  });
}
function new_large(){

};
