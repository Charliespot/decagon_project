   $('#addBtn').click(function(e){
        e.preventDefault();
        let product_name = $('#product_name').val();
        let product_price = $('#product_price').val();
        let quantity = $('#quantity').val();
        let supply_date = $('#supply_date').val();
        let product_image = $('#product_image').val();

        if(!product_name || !product_price || !quantity || !supply_date || !product_image){
            alert('Please fill all fields!');
            return;
        
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
                alert(product_name + ' successfully added!');
            },

        });
    }
    });
