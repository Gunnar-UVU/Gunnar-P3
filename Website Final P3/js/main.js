
function follow(event) {
    var x = event.clientX;
    var y = event.clientY;
    var movingfoot = document.getElementById("movingBigFoot");
    movingfoot.style.left = x+10+"px";
    movingfoot.style.top = y+10+"px";
}
function showElement(page) {
    page.show();
}
function hideElement(all) {
    for (let i of all) {
        i.hide()
    }
}
function changePic() {
    var picture = $("#currentPicture")
    var selected = document.getElementById("otherPictures").value;
    if (selected === "original") {
        picture.html("<img id=shownPicture src=images/Bigfootorig.jpg alt=Collection of bigfoot images class=inmain style=max-height:300px><figcaption id=captions class=inmain><i>Still from bigfoot footage shot in 1967</i><br></figcaption>");
    }
    if (selected === "colorized") {
        picture.html("<img id=shownPicture src=images/bigfootcolor.jpg alt=Collection of bigfoot images class=inmain style=max-height:300px><figcaption id=captions class=inmain><i></i><br>This is a colored version of 1967 footage still</figcaption>");
    }
    if (selected === "statue") {
        picture.html("<img id=shownPicture src=images/bigfoot-center.jpg alt=Collection of bigfoot images class=inmain style=max-height:300px><figcaption id=captions class=inmain><i>A statue from the bigfoot museum in Oregon</i><br></figcaption>");
    }
    if (selected === "map") {
        picture.html("<img id=shownPicture src=images/bigfootmap.png alt=Collection of bigfoot images class=inmain style=max-height:300px><figcaption id=captions class=inmain><i>A map of different bigfoot sightings around the USA</i><br></figcaption>");
    }
}

$(function() {
    var main = $("#main");
    var main1 = $(".inmain")
    var main2 = $("#main2")
    var contact = $("#contact");
    var contacts = $("#contacts");
    var log = $("#logVisit")
    var visit = $("#visitLog")
    var also = $("#also");
    var other = $("#other");
    var all = [main1, main2, contacts, visit, other];
    if (main) {
        main.click(function () {hideElement(all); showElement(main1); showElement(main2)});
    }
    if (contact) {
        contact.click(function () {hideElement(all); showElement(contacts)});
    }
    if (log) {
        log.click(function () {hideElement(all); showElement(visit); $("#completeMsg").hide(); $(".errorMsg").hide()});
    }
    if (also) {
        also.click(function () {hideElement(all); showElement(other)});
    }
});
document.addEventListener('mousemove', follow);
