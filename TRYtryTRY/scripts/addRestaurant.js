var app = app || {};

document.addEventListener("deviceready", function () {
    (function getData() {  
        $('#add-restaurant-btn').bind('click', function(){            
            var name = $("#rest-name").val();
    		var address = $("#rest-address").val();           
            
    		localStorage.setItem(name, name);
            localStorage.setItem(name+"-address", address);
            localStorage.setItem(name+"-picture", "PIC");
            
            //localStorage.setItem(name, {"address" : address, "picture" : "PIC_URL"});
            //napravi navigaziq kam list s resturant
        });  
    }(app));
});