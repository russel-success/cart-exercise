var pdt=$('.pdt-container');
var button=pdt.children('button');
var pdt_name=pdt.children('h2');
var price=pdt.children('p');
var img=pdt.children('img');

var cart_section=$("<div>",{class:"cart-section flex-disp"})
var cart_container=$("<div>",{class:"cart-container flex-disp"})
var cart_img=$("<img>");
var img_part=$("<div>", {class:"img-part cart-part flex-disp"});

var det_part=$("<div>",{class:"det-part cart-part flex-disp"});
var cart_details=$("<span>",{class:"cart-details"});
var delete_btn=$("<span>");

var cart_name=$("<h2>");
var cart_price=$("<p>");


button.click(add_to_cart);

function add_to_cart(){
    cart_img.attr("src",img.attr("src"));
    cart_name.text(pdt_name.text());
    cart_price.text(price.text());

    cart_img.append(img_part);
    img_part.append(cart_container);
    ($(".cart-section"))cart_container.append;
}