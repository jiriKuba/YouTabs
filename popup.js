var bandSongName = "";
function loadBandSongName(callBack){
	tryGetLastRequest(function(){
    	//load last but if is youtube page replace text
		tryGetYoutubeTitle(function(textData){
        		if(typeof textData != 'undefined' && textData!= "")
      	 			bandSongName = textData;
      
        		if(typeof callBack !='undefined'){
  			 	callBack();
  		  	}
      		});
  	});
}

function searchBtnClick(){
	bandSongName = getSearchText();

	chrome.runtime.sendMessage({method: "askServerRequest", userData: bandSongName}, function(response) {
  		if(typeof response !='undefined' && typeof response.data !='undefined'){
    		setSearchText(response.data);
  		}
	});
}

function tryGetYoutubeTitle(callback){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      var callRefer = callback;
      chrome.tabs.sendMessage(tabs[0].id, {action: "getBandAndSong"}, function(response){

        if(typeof callRefer != 'undefined'){
          callRefer(response.data);
        }
      });  
    });

}

function tryGetLastRequest(callback){
	chrome.runtime.sendMessage({method: "getLastRequest"}, function(response) {
  		if(typeof response !='undefined' && typeof response.data !='undefined'){
    			setSearchText(response.data);
  		}
  		callback();
	});
}

function getSearchText(){
	return document.getElementById('search-textbox').value;
}

function setSearchText(text){
	bandSongName = text;
	document.getElementById('search-textbox').value = text;
}

function documentReady(){
	var searchBtn = document.getElementById('search-btn');
	if(searchBtn !== null)
	{
		searchBtn.addEventListener('click', searchBtnClick, false);
	}

	loadBandSongName(function(){
		setSearchText(bandSongName);
	});
}

//window.onload = documentReady;
document.addEventListener('DOMContentLoaded', documentReady, false);
