var bandSongText = "";
//var YOUTUBE_TITLE_ID = 'eow-title';
var isReady = false;

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action === 'getBandAndSong') {
        loadBandSongText(function(){
            sendResponse({ data: bandSongText });
        });
    }
});

function documentReady(){
  isReady = true;
}

function loadBandSongText(callBack){
    if (isThisPageSongDetail()) {
        bandSongText = getSongTitle();
    }
  
    if(typeof callBack != 'undefined'){
        callBack();
    }
}

//function isThisPageSongDetail(){
//    var youtubeTitle = document.getElementById(YOUTUBE_TITLE_ID);
//    return (youtubeTitle !== null);
//}

//function getSongTitle(){
//    var youtubeTitle = document.getElementById(YOUTUBE_TITLE_ID);
//    if(youtubeTitle !== null){
//        return youtubeTitle.innerText;
//    }
//    else{
//        return "";
//    }
//}

//window.onload = documentReady;
document.addEventListener('DOMContentLoaded', documentReady, false);