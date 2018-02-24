

$( document ).ready(function() {
    $("#login").show();
	$("#signup").hide();
	
	$("#create").click(function(){
		$("#login").hide();
		$("#signup").show();
	})
	$("#useLogin").click(function(){
		$("#login").show();
		$("#signup").hide();
	})

	$("#signup").click(function(){
		let user = {
			email:'',
			role:'',
			password:''
		}
		user.email = document.getElementById("email").value;
		user.role = document.getElementById("role").value;
		user.password = document.getElementById("password").value;
		console.log(user);
	
		$.ajax({
			url: 'http://smallscreen.herokuapp.com/user/save',
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			contentType: 'application/json; charset=utf-8',
			success: function (result) {
			   console.log(result);
			},
			error: function (error) {
				console.log(error);			
			}
		});
	});
	$("#login").click(function(){
		let user = {
			email:'',
			password:''
		}
		user.email = document.getElementById("userEmail").value;
		user.password = document.getElementById("userPassword").value;
		console.log(user);
	
		$.ajax({
			url: 'http://smallscreen.herokuapp.com/user/auth',
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			contentType: 'application/json; charset=utf-8',
			success: function (result) {
			   console.log(result);
			   document.getElementById("sucessmsg").innerHTML = result.message;
			},
			error: function (error) {
				console.log(error);			
			}
		});
	});
});

