(function (global) {
    var mobileSkin = "",
        app = global.app = global.app || {};

    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
   
        $("#devices-list").kendoMobileListView();   
        //$(".listview").kendoMobileListView();
  
    }, false);

    app.changeSkin = function (e) {
        if (e.sender.element.text() === "Flat") {
            e.sender.element.text("Native");
            mobileSkin = "flat";
        }
        else {
            e.sender.element.text("Flat");
            mobileSkin = "";
        }

        app.application.skin(mobileSkin);
        
        
        function EventApp() {
        }

        EventApp.prototype = {
        	run: function() {
        		var that = this;
                
        		document.addEventListener("pause",
        								  function() {
        									  that.onPause.apply(that, arguments);
        								  }, 
        								  false);

        		document.addEventListener("resume",
        								  function() {
        									  that.onResume.apply(that, arguments);
        								  }, 
        								  false);
                 
        		document.addEventListener("online",
        								  function() {
        									  that.onOnline.apply(that, arguments);
        								  },
        								  false);
                
        		document.addEventListener("offline",
        								  function() {
        									  that.onOffline.apply(that, arguments);
        								  },
        								  false);
                 
        	},
            
            onPause: function() {
        		var that = this;
        		that.printEvent("Pause");
        	},
         
        	onResume: function() {
        		var that = this;
        		that.printEvent("Resume");
        	},
         
        	onOnline: function() {
        		var that = this;
        		that.printEvent("Network online");
        	},
         
        	onOffline: function() {
        		var that = this;
        		that.printEvent("Network offline");
        	},
            
            printEvent: function(text) {
        		var that = this,
        		newDiv = document.createElement('div'),
        		resultBox = document.getElementById("resultEvent");
        		var currentTime = new Date().toLocaleTimeString().split(" ")[0];
        		newDiv.innerHTML = '[' + currentTime + '] ' + text;
                
        		resultBox.appendChild(newDiv);
                
               } 
         }
                
    };
})(window);