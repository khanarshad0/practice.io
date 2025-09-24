$("#iframe2").hide();

function track() {
    var iframe = document.getElementById("iframe2");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var body = innerDoc.body;
	var etag = body.innerHTML;
	$("#trackingId").html(etag);	
}
