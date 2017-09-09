var isReady = false;
var bandSongText = "";
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method == 'askServerRequest'){
        if(typeof message.userData != 'undefined' && message.userData !== null){
            bandSongText = message.userData;
            sendServerRequest(bandSongText);
        }  	
  	    sendResponse({ data: bandSongText});
    }  
    else if(message.method == 'getLastRequest'){
        sendResponse({ data: bandSongText});
    }  
});

function sendServerRequest(bandSongText) {
    var tabsCall = "http://www.911tabs.com/search.php?search="+encodeURIComponent(bandSongText);
  	chrome.tabs.create({url: tabsCall});
}

function documentReady(){
    isReady = true;
}

//window.onload = documentReady;
document.addEventListener('DOMContentLoaded', documentReady, false);