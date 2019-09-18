// To add Products to store
$(document).ready(function(){
    $('#addBtn').click(function(e){
        e.preventDefault();
        const product_name = $('#product_name').val();
        const product_price = $('#product_price').val();
        const quantity = $('#quantity').val();
        const supply_date = $('#supply_date').val();
        const product_image = $('#product_image').val();

        if(!product_name || !product_price || !quantity || !supply_date || !product_image){
            alert('Please fill all fields!');
            return;
        }
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/products',
            data: {
                product_name,
                product_price,
                quantity,
                supply_date,
                product_image,
            },
            success: function(){
                $('.inputMsg').append(product_name + ' successfully added!');
            },

        });
    
    });
});

