var YOUTUBE_TITLE_ID = 'eow-title';
function isThisPageSongDetail() {
    var youtubeTitle = document.getElementById(YOUTUBE_TITLE_ID);
    return (youtubeTitle !== null);
}

function getSongTitle() {
    var youtubeTitle = document.getElementById(YOUTUBE_TITLE_ID);
    return youtubeTitle.innerText;
}