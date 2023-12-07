// var pdt=$('.pdt-container');
// var button=pdt.children('button');
// var pdt_name=pdt.children('h2');
// var price=pdt.children('p');
// var img=pdt.children('img');

var cart_section=$("<div>",{class:"cart-section flex-disp"})
var cart_container=$("<div>",{class:"cart-container flex-disp"})
var cart_img=$("<img>");
var img_part=$("<div>", {class:"img-part cart-part flex-disp"});

var det_part=$("<div>",{class:"det-part cart-part flex-disp"});
var cart_details1=$("<span>",{class:"cart-details"});
var cart_details2=$("<span>",{class:"cart-details"});
var delete_btn=$("<span>",{class:"material-symbols-outlined delete"});

var cart_name=$("<h2>");
var cart_price=$("<p>");



var active_button=;

$.each('button').click(function(){
    var pdt=$(this).parent('.pdt-container');

    var pdt_name=pdt.children('h2');
    var price=pdt.children('p');
    var img=pdt.children('img');

    cart_img.attr("src",img.attr("src"));
    cart_name.text(pdt_name.text());
    cart_price.text(price.text());

    img_part.append(cart_img);

    cart_details1.append(cart_name);
    cart_details2.append(cart_price);
    det_part.append(cart_details1);
    det_part.append(cart_details2);
    det_part.append(delete_btn);

    cart_container.append(img_part);
    cart_container.append(det_part);

    
    $(".cart-section").append(cart_container);

    
});