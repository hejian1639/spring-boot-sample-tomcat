<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
<title>home</title>
</head>
<body>
	<h2>restful test</h2>

	username:
	<input id="username" /> email:
	<input id="email" />
	<br />
	<button id="submit">submit</button>

	<br />
	<br /> username:
	<input id="delete_username" />
	<br />
	<button id="delete">delete</button>

	<br />
	<br /> username:
	<input id="query_username" />
	<br />
	<button id="query">query</button>


	<br />
	<br />
	<div id="result" />

	<script src="js/jquery.js"></script>

	<script>
		$("#submit").click(function() {
			$.ajax({
				url : 'mybatis_service/account',
				data : JSON.stringify({
					username : $("#username").val(),
					email : $("#email").val(),
				}),
				contentType : "application/json",
				cache : false,
				type : "post",
				async : true,
				success : function(data, status, xhr) {
				},
				error : function(jqXHR, textStatus, errorThrown) {
				},
			});
		});

		$("#delete").click(function() {
			$.ajax({
				url : 'mybatis_service/account/' + $("#delete_username").val(),
				cache : false,
				type : "delete",
				async : true,
				success : function(data, status, xhr) {
				},
				error : function(jqXHR, textStatus, errorThrown) {
				}
			});
		});

		$("#query").click(function() {
			$.ajax({
				url : 'mybatis_service/account/' + $("#query_username").val(),
				cache : false,
				type : "get",
				async : true,
				success : function(data, status, xhr) {
					$("#result").text(JSON.stringify(data));
				},
				error : function(jqXHR, textStatus, errorThrown) {
				}
			});
		});
	</script>

</body>
</html>