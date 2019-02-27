$(function() {
	$("#header").load("header.html", function(status) {
		if (status == "success") {
			console.log("ヘッダーの読み込みに成功");
		}
	});
	$("#footer").load("footer.html", function(status) {
		if (status == "success") {
			console.log("フッターの読み込みに成功");
		}
	});
})