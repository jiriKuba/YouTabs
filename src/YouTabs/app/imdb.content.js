var IMDB_TITLE_CLASS = 'title_wrapper';
var IMDB_TITLE_YEAR_ID = 'titleYear';
function isThisPageSongDetail() {
    var imdbTitle = document.getElementsByClassName(IMDB_TITLE_CLASS);
    if (imdbTitle === null || imdbTitle.length != 1 || imdbTitle[0].getElementsByTagName("h1").length != 1)
        return false;
    else
        return true;
}

function getSongTitle() {
    var imdbTitle = document.getElementsByClassName(IMDB_TITLE_CLASS);
    var header = imdbTitle[0].getElementsByTagName("h1")[0];
    var wholeText = header.innerText.trim();
    var year = document.getElementById(IMDB_TITLE_YEAR_ID).innerText;
    if (wholeText.indexOf(year) > -1) {
        var result = wholeText.replace(year,'').trim();
        return result;
    }
    else return wholeText;
}