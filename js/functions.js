   function Second_Search() {
     var Second_Search = $('.search').val();
     var task = "VideoSearch";


     var formData = {
		task: task,
		Second_Search: Second_Search
		
	}; 

	jQuery.ajax({
		type: "POST",
		url: "http://wildapp.info/wildfunc.php",
		data: formData,
		dataType: "json",
		success: function(response) {
			if(response.status == "success") {
				$(".searched-items").hide();
				$(".second_searched-items").show();				
				var len = response.content.length;
				$(".second_searched-items").html("");
				if(len > 0) {
				   $.each(response.content, function(key, val) {
					    var id = val.id;
					    var element = val.video;
					    var title = val.title;
					    element = element.replace('[video width="1280" height="720" mp4="', '');
					    element = element.replace('"][/video]', '');

					    $(".second_searched-items").append('<div id="video-' + id + '" class="videolist"><video controls="" width="100%" height="300"><source src="' + element + '" type="video/mp4"></source>Your browser does not support the video tag.</video><h4 style="color:#fff;float:left;">'+ title +'</h4></div>');					
				   });
			   	}
			   	else{
			   		  $(".second_searched-items").append("No Results found.");  
			   	}
			}

		}
	});      
}
  function Search() {
     var search = $('.search_video').val();
     var task = "appSearch";

    if(search == "") { 
		$('.SearchError').show();
		return false;
	}
	else {
		$('.SearchError').hide();
	}

     var formData = {
		task: task,
		search: search
		
	}; 

	jQuery.ajax({
		type: "POST",
		url: "http://wildapp.info/wildfunc.php",
		data: formData,
		dataType: "json",
		success: function(response) {
			if(response.status == "success") {
				$(".beforesearhform").hide();
				$(".aftersearhform").show();				
				var len = response.content.length;				
				$(".searched-items").html("");
				if(len > 0) {
					$.each(response.content, function(key, val) {
						var id = val.id;
						var element = val.video;
						var title = val.title;
						
						element = element.replace('[video width="1280" height="720" mp4="', '');
						element = element.replace('"][/video]', '');

						$(".searched-items").append('<div id="video-' + id + '" class="videolist"><video controls="" width="100%" height="300"><source src="' + element + '" type="video/mp4"></source>Your browser does not support the video tag.</video><h4 style="color:#fff;float:left;">'+ title +'</h4></div>');						
					});
				}
				else {
					$(".searched-items").append("No Results found.");
				}
			}
			
			

		}
	});      
}



  function Registration() {	
	var email = $('.email').val();
	var mobile = $('.mobile').val();	
    var username = email.split("@")[0];	
    var number = /^\d{10}$/;
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
   	var task = "appRegistration";
	

    if (email == "" || mobile == "") {
        $('.AllError').show();
        return false;
    }
    else{
        $('.AllError').hide();
    }

    if (filter.test(email)) {
        $('.emailError').hide();
    }
    else {
        $('.emailError').show();
        return false;
    }
    if (number.test(mobile)) {
       $('.mobileError').hide();
    } else {
       $('.mobileError').show();
       return false
    }


	var formData = {
		task: task,
		email: email,
		mobile: mobile,
		username: username

	}; 

	jQuery.ajax({
		type: "POST",
		url: "http://wildapp.info/wildfunc.php",
		data: formData,
		dataType: "json",
		success: function(response) {
			console.log(JSON.stringify(response));
			
			if(response.status == "success") {
				//alert(response.status);	
				window.location.href="search.html";
				localStorage.userid = response.userid;
			}
			else {
				alert('Registration Failed');
			}

		}
	});         
}

function gotoregisterpage() {
 window.location.href="registration.html";
}


 function setHeight() {

	var windows =$(window);

	windowHeight = $(window).innerHeight();

	$('#first_screen').css('height', windowHeight);
	$('.main').css('height', windowHeight);
	$('.container').css('height', windowHeight);

 };


