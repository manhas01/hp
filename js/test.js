//Ajax Url:=> http://ektalehar.com/projects/westone/wild.php/?task=

/*function login() {
	var username = $('.loginuser').val();    
    var password = $('.loginpass').val();
// alert(username + " , " + password)
	var task = "applogin";
    var formData = {
    	task: task,
        username: username,
        password: password
    }; 
    jQuery.ajax({
        type: "POST",
        url: "http://movieidea.reviews/wildfunc.php",
        data: formData,
        //  beforeSend: function () { jQuery.mobile.loading('show'); },
        success: function(response) {
        }
    });
} */
  function Registration() {
     var fullname = $('.fullname').val();
     var email = $('.email').val();
     var loginuser = $('.loginuser').val();
     var mobile = $('.mobile').val();
     var loginpass = $('.loginpass').val();
     var task = "appRegistration";
     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var phoneno = /^\d{10}$/;  
     var letters = /^[A-Za-z]+$/; 
    

if(fullname=="") { 

$('.fullnameError').html("* Enter valid Name.");
}

if(email=="" ) {
$('.emailError').html("* Enter valid Email.");

	 }
	

if(mobile=="")  { 
	
$('.mobileError').html("* Enter valid 10 digit number.");
	}
	
if(loginuser=="")  {
$('.userError').html("* Enter valid user name.");

 }
	
if(loginpass=="")  {
	$('.passError').html("* Enter password.");
	}
	
      var formData = {
            task: task,
            fullname: fullname,
            email: email,
            loginuser: loginuser,
            mobile: mobile,
            loginpass: loginpass
        }; 

        jQuery.ajax({
            type: "POST",
            url: "http://movieidea.reviews/wildfunc.php",
            data: formData,
            success: function(response) {
             
      
            }
        });
        return false;
    
}

function gotoregisterpage() {
 window.location.href="registration.html";
}
