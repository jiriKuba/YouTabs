var CSFD_PROFILE_ID = 'profile';
var CSFD_TITLE_CLASS = 'header';
function isThisPageSongDetail() {
    var header = document.getElementById(CSFD_PROFILE_ID);
    var titleClassNode = getElementChildNodeWithClassName(header, CSFD_TITLE_CLASS);
    if (titleClassNode === null)
        return false;
    else
        return true;
}

function getSongTitle() {
    var header = document.getElementById(CSFD_PROFILE_ID);
    var titleClassNode = getElementChildNodeWithClassName(header, CSFD_TITLE_CLASS);
    return titleClassNode.innerText.trim();
}

function getElementChildNodeWithClassName(element, childClass) {
    if (element === null)
        return null;

    return element.getElementsByClassName(childClass)[0];
}