var large_img=$('.large-section img');
const small_imgs_arr=$('.small-imgs').toArray();
for(var i=0;i<small_imgs_arr.length;i++){
    var small_img=small_imgs_arr[i];
    small_img.click(function(){
        large_img.attr("src",)
    })
}