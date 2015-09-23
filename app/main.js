//main.js

define (

	["jquery"], 

	function(jquery){
		

		function init(){
			
			console.log("main.js init running...");

			jquery.getJSON("/data", function(json) {
			    //console.log(window.json);
			    var list = "";

			    json.forEach(function(value, index){
			    	list += "<div class='artist'>";
					list += "<b>" + value.alias + "</b><br />";

					list += "profile photos at original size:<br />";

					if(value.profilePhoto){
						var imageLink = value.profilePhoto.photoVersions.original.url;

						list += "<a href='" + imageLink + "'>" + imageLink.split('/').slice(-1)[0] + "</a>";
						list += "<br /><br />";

					}

					list += "band photos:<br />";
					if(value.photos.length > 0){
						for(var i = 0; i < value.photos.length; i++){
							if(value.photos[i].photoVersions.original.url){
								var imageLink = value.photos[i].photoVersions.original.url
								list += "<a href='" + imageLink + "'>" + imageLink.split('/').slice(-1)[0] + "</a>";
								list += "<br />";
							}
						}
					}
					
					list += "<br /><br />";
					list += "</div>";
			    });
			    

				document.getElementsByClassName('result')[0].innerHTML = list;
			});
		}

	return {
		init: init
	};
});
