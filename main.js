let koty = [
    {img: "url(images/1.png)", text: "ты очень милый кот :)"},
    {img: "url(images/2.png)", text: "ты толстый кот, хватит жрать!"},
    {img: "url(images/3.png)", text: "ты вредный кот :("},
    {img: "url(images/4.png)", text: "ты перевернутый кот :ь"},
    {img: "url(images/5.png)", text: "ты богатый кот!"},
    {img: "url(images/6.png)", text: "ты испуганный кот.........."},
    {img: "url(images/7.png)", text: "ты орущий кот (надоел уже)"},
    {img: "url(images/8.png)", text: "ты странный кот....."},
    {img: "url(images/9.png)", text: "ты секси кот ;)"},
    {img: "url(images/10.png)", text: "ты очень секси кот ))"},
    {img: "url(images/11.png)", text: "ты самый прекрасный кот в мире <3"},
    {img: "url(images/12.png)", text: "ты крипи кот"},
    {img: "url(images/13.png)", text: "ты кот-белорус (ну вот...)"},
    {img: "url(images/14.png)", text: "ты слюнявый кот :)"},
    {img: "url(images/15.png)", text: "ты кот в унитазе (ну что поделать...)"},
    {img: "url(images/16.png)", text: "ты кот с язычком ;)"},
];

function changeCatImg() {
    document.getElementById("loader").style.visibility = "visible";
    document.getElementById("kot-image").style.backgroundImage = "url('images/dumac.jpg')";
    document.getElementById("text").innerHTML = "подождите, мы думоим<span class='znak'>...</span>";

    setTimeout(kokoiCat, 2000);
}

function kokoiCat() {
    let x = getRandomIntInclusive();
    console.log(x);
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("kot-image").style.backgroundImage = koty[x].img;
    document.getElementById("text").innerHTML = koty[x].text;
}

function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(koty.length-1);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }