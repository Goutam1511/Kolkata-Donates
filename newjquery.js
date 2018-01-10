var flag=true;
function validateEmail(email) {
  var re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return re.test(email);
}
$(document).ready(function(){
	$("#loader").hide();
	$("#home").click(function(){
		$("#articleheader").html("<p><b><i><center><h1>What is &quot;Kolkata Donates&quot; ?</h1></center></b></i></p>");
		$("#article").load("http://localhost/learnphp/My%20project/about_us.txt");
	})	
	$("#register").click(function(){
		$("#articleheader").html("<p><b><i><center><h1>Signup As A Voluntary Donor</h1></center></b></i></p>");
		$("#article").load("http://localhost/learnphp/My%20project/formsign.txt");
		$("#slides").hide();
	})	
	$("#diseases").click(function(){
		$("#articleheader").html("<p><b><i><center><h1>BLOOD TRANSMITTED DISEASES</h1></center></i></b></p>");
		$("#article").load("http://localhost/learnphp/My%20project/diseases.txt");
		$("#slides").hide();
	});
	$("#eligibility").click(function(){
		$("#articleheader").html("<p><b><i><center><h1>Who Can Or Can't Donate Blood </h1></center></i></b></p>");
		$("#article").load("http://localhost/learnphp/My%20project/eligibility.txt");
		$("#slides").hide();
	});
	$("#search").click(function(){
		$("#articleheader").html("<p><b><i><center><h1> search Your Voluntary Donor </h1></center></i></b></p>");
		$("#article").load("http://http://localhost/learnphp/My%20project/search.txt");
		$("#slides").hide();
	});
	$(document).on("click","#cbx",function(){
		this.checked?$("#mobile").show(1000):$("#mobile").hide(1000); //time for show
	});
	$(document).on("click","#signupbtn",function(event){
		event.preventDefault();
		var namedon = $("#dname").val();
		var emaildon = $("#email").val();
		if(!validateEmail(emaildon)){
			flag = false;
		}
		var numberdon = $("#num").val();
		var groupdon = $("#grp").val();
		var locationdon = $("#loc").val();
		if(namedon && emaildon && flag){
			var dataString = {
				'name' : namedon ,
				'email' : emaildon ,
				'number' : numberdon ,
				'group' : groupdon ,
				'location' : locationdon
			};
			$.ajax({
				type: "POST",
				url: "http://localhost/learnphp/My%20project/formsubmit.php",
				data: dataString,
				cache: false,
				success: function(result){
					alert(result);
					window.location.href = "secondpage.html";
				}
			});
		}
		else if(flag){
			alert("Kindly enter a valid E-mail address");
		}
		else{
			alert("Kindly make sure you have entered all the fields");
		}
		
	});
	$(document).on("click","#cancelbtn",function(event){
		event.preventDefault();
		window.location.href = "secondpage.html";
		
	});
});