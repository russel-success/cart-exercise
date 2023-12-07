// var pdt=$('.pdt-container');
// var button=pdt.children('button');
// var pdt_name=pdt.children('h2');
// var price=pdt.children('p');
// var img=pdt.children('img');

const button_array = $("button").toArray();

// var active_button=;
var num_of_pdt=0;
for (var i = 0; i < button_array.length; i++) {
  $(button_array[i]).click(create_cart_pdt);
}
function create_cart_pdt() {
  var cart_section = $("<div>", { class: "cart-section flex-disp" });
  var cart_container = $("<div>", { class: "cart-container flex-disp" });
  var cart_img = $("<img>");
  var img_part = $("<div>", { class: "img-part cart-part flex-disp" });

  var det_part = $("<div>", { class: "det-part cart-part flex-disp" });
  var cart_details1 = $("<span>", { class: "cart-details" });
  var cart_details2 = $("<span>", { class: "cart-details" });
  var delete_btn = $("<span>", { class: "material-symbols-outlined delete" });
  delete_btn.text("delete");

  var cart_name = $("<h2>");
  var cart_price = $("<p>");

  var pdt = $(this).parent(".pdt-container");

  var pdt_name = pdt.children("h2");
  var price = pdt.children("p");
  var img = pdt.children("img");

  cart_img.attr("src", img.attr("src"));
  cart_name.text(pdt_name.text());
  cart_price.text(price.text());

  img_part.append(cart_img);

  cart_details1.append(cart_name);
  cart_details2.append(cart_price);
  det_part.append(cart_details1, cart_details2, delete_btn);

  cart_container.append(img_part, det_part);

  $(".cart-section").append(cart_container);
  ++num_of_pdt;
  console.log(num_of_pdt);
}

$(delete_btn).click(function(){
    $(this).parents('.cart-section').remove();
})