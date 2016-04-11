var bandSongText = "nic";
var YOUTUBE_TITLE_ID = 'eow-title';
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

  if(isThisPageYoutube()){
    bandSongText = getYoutubeTitle();    
  }
  
  if(typeof callBack != 'undefined'){
    callBack();
  }
}

function isThisPageYoutube(){
  var youtubeTitle = document.getElementById(YOUTUBE_TITLE_ID);
  return (youtubeTitle !== null);
}

function getYoutubeTitle(){
  var youtubeTitle = document.getElementById(YOUTUBE_TITLE_ID);
  if(youtubeTitle !== null){
    return youtubeTitle.innerText;
  }
  else{
    return "";
  }
}

function isTextVariableSet(text){
  return (typeof text != 'undefined' && text != "");
}

//window.onload = documentReady;
document.addEventListener('DOMContentLoaded', documentReady, false);