var YOUTUBE_TITLE_CLASS = 'title ytd-video-primary-info-renderer';
function isThisPageSongDetail() {
    var youtubeTitle = document.getElementsByClassName(YOUTUBE_TITLE_CLASS);
    return (youtubeTitle && youtubeTitle.length > 0);
}

function getSongTitle() {
    var youtubeTitle = document.getElementsByClassName(YOUTUBE_TITLE_CLASS);
    return youtubeTitle[0].innerText;
}