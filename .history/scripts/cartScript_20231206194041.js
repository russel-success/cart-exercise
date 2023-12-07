// var pdt=$('.pdt-container');
// var button=pdt.children('button');
// var pdt_name=pdt.children('h2');
// var price=pdt.children('p');
// var img=pdt.children('img');

const button_array=$('button').toArray();

// var active_button=;
for(var i=0;i<button_array.length;i++){
$(button_array[i]).click(create_cart_pdt);
}
function create_cart_pdt(){
    
    
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
    det_part.append(cart_details1, cart_details2, delete_btn);
    
    cart_container.append(img_part, det_part);

    cart_section.append(cart_container)
    $(".main-container").append(cart_section);
}