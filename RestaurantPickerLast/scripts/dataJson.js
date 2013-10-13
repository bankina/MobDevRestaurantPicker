var app = app || {};

document.addEventListener("deviceready", function () {
        
    (function getData() {
        var items = [];
        for (var i = 0; i < localStorage.length; i++){
            if(localStorage.key(i).indexOf("-address") == -1 && localStorage.key(i).indexOf("-picture") == -1){
                items.push('<li>  ');
                items.push(localStorage.key(i));
                items.push('<i> ');  
                items.push(localStorage.getItem(localStorage.key(i)+"-address"));
                items.push('</i> ');
                //items.push($("#restaurant-pic").attr("src", val.picture));    
                items.push(localStorage.getItem(localStorage.key(i)+"-picture"));
                items.push('</li>');
            }
        }   
        if(localStorage.length == 0){
            items.push('<li>');
            items.push("No resturants added");
            items.push('</li>');
        }
        $('#restaurants-view > ul').html( items.join(''));            

        //$.getJSON('data/data.json', function(data) {
                //  var items = [];
                
                //  $.each(data, function(key, val) {
                //    items.push('<li>' );
                //    items.push( val.restautant );
                //    items.push(' <i>' );  
                //    items.push( val.address );
                //    items.push(' </i>' );
                //      console.log(val.picture);
                //    items.push($("#restaurant-pic").attr("src", val.picture));    
                //    items.push('</li>');
                    
                //  });
                
                //  $('#restaurants-view > ul').html( items.join(''));
                        
                        
                //});
    }(app));
    
            
});