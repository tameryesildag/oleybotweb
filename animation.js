var adimlar = ["o", "o!", "o!r", "o!re", "o!res", "o!resi", "o!resim", "o!resim ", "o!resim e", "o!resim el", "o!resim elm", "o!resim elma", "o!resim elma", "o!resim elma", "o!resim elma", "o!resim elma", "o!resim elm", "o!resim el", "o!resim e", "o!resim ", "o!resim ", "o!resi", "o!res", "o!re", "o!r", "o!", "o!o", "o!oy", "o!oyn", "o!oyna", "o!oynat", "o!oynat ", "o!oynat r", "o!oynat ra", "o!oynat rap", "o!oynat rap ", "o!oynat rap g", "o!oynat rap go", "o!oynat rap god", "o!oynat rap god", "o!oynat rap god", "o!oynat rap god", "o!oynat rap god", "o!oynat rap go", "o!oynat rap g", "o!oynat rap ", "o!oynat rap", "o!oynat ra", "o!oynat r", "o!oynat ", "o!oynat", "o!oyna", "o!oyn", "o!oy", "o!o", "o!", "o!e", "o!ea", "o!ear", "o!earr", "o!earra", "o!earrap", "o!earrape", "o!earrape", "o!earrape", "o!earrape", "o!earrape", "o!earrap", "o!earra", "o!earr", "o!ear", "o!ea", "o!e", "o!", "o!e", "o!ek", "o!ekş", "o!ekşi", "o!ekşi ", "o!ekşi p", "o!ekşi pe", "o!ekşi pen", "o!ekşi pena", "o!ekşi pena", "o!ekşi pena", "o!ekşi pena", "o!ekşi pena", "o!ekşi pen", "o!ekşi pe", "o!ekşi p", "o!ekşi ", "o!ekşi", "o!ekş", "o!ek", "o!e", "o!", "o!o", "o!oy", "o!oyl", "o!oyla", "o!oylam", "o!oylama", "o!oylama", "o!oylama", "o!oylama", "o!oylama", "o!oylam", "o!oyla", "o!oyl", "o!oy", "o!o", "o!", "o!y", "o!ya", "o!yaz", "o!yazı", "o!yazıt", "o!yazıtu", "o!yazıtur", "o!yazıtura", "o!yazıtura", "o!yazıtura", "o!yazıtura", "o!yazıtura", "o!yazıtur", "o!yazıtu", "o!yazıt", "o!yazı", "o!yaz", "o!ya", "o!y", "o!", "o!y", "o!yo", "o!you", "o!yout", "o!youtu", "o!youtub", "o!youtube", "o!youtube", "o!youtube", "o!youtube", "o!youtube", "o!youtub", "o!youtu", "o!yout", "o!you", "o!yo", "o!y", "o!", "o!k", "o!ku", "o!kur", "o!kur", "o!kur", "o!kur", "o!kur", "o!ku", "o!k", "o!", "o!c", "o!co", "o!cou", "o!coun", "o!count", "o!counte", "o!counter", "o!counter ", "o!counter g", "o!counter ga", "o!counter gar", "o!counter gare", "o!counter garen", "o!counter garen", "o!counter garen", "o!counter garen", "o!counter garen", "o!counter gare", "o!counter gar", "o!counter ga", "o!counter g", "o!counter ", "o!counter", "o!counte", "o!count", "o!coun", "o!cou", "o!co", "o!c", "o!", "o!h", "o!ha", "o!hav", "o!hava", "o!hava ", "o!hava  İ", "o!hava İs", "o!hava İst", "o!hava İsta", "o!hava İstan", "o!hava İstanb", "o!hava İstanbu", "o!hava İstanbul", "o!hava İstanbul", "o!hava İstanbul", "o!hava İstanbul", "o!hava İstanbul", "o!hava İstanbu", "o!hava İstanb", "o!hava İstan", "o!hava İsta", "o!hava İst", "o!hava İs", "o!hava İ", "o!hava ", "o!hava", "o!hav", "o!ha", "o!h", "o!", "o!y", "o!ya", "o!yaz", "o!yazm", "o!yazma", "o!yazmay", "o!yazmaya", "o!yazmayar", "o!yazmayarı", "o!yazmayarış", "o!yazmayarışı", "o!yazmayarışı", "o!yazmayarışı", "o!yazmayarışı", "o!yazmayarışı", "o!yazmayarış", "o!yazmayarı", "o!yazmayar", "o!yazmaya", "o!yazmay", "o!yazma", "o!yazm", "o!yaz", "o!ya", "o!y", "o!"];
var x = 0;
var element = document.getElementById("command");
setInterval(() => {
    element.innerText = adimlar[x];
    if (x == adimlar.length - 1) {
        x = 0;
    } else {
        x += 1;
    }
}, 100);
let images = [
    ["example1", "example2", "example3"],
    ["example4", "example5", "example6"],
    ["example7", "example8", "example9"]
];
let descriptions = [
    ["<b>Resim</b><br>o!resim komutu ile webte hızlı bir şekilde resim araması yapabilirsin. Tıpkı Google Görseller gibi!", "<b>Ekşi Sözlük</b><br>o!ekşi komutu ile Ekşi Sözlük'teki bir başlıktaki en beğenilen entry'i görebilirsin.", "<b>Yazma Yarışı</b><br>o!yazmayarışı komutu ile arkadaşlarınla gerçek zamanlı yazı yazma yarışı yapabilirsin."],
    ["<b>Oylama</b><br>o!oylama komutu ile sunucunda anket oluşturabilirsin. Üyeler mesaja tepki vererek oy verebilirler.", "<b>Tahmin Oyunu</b><br>o!tahminoyunu komutu ile tahmin oyununu başlatabilirsin. Botun seçtiği rastgele sayıyı ilk bilen oyunu kazanır.", "<b>Çeviri</b><br>o!çeviri komutu ile herhangi bir dilde yazılmış istediğin bir metni istediğin dile çevirebilirsin."],
    ["<b>Vikipedi</b><br>o!viki komutu ile vikipedide arama yapabilirsin. Hem de vpn kullanmadan 😲", "<b>Yüksek Skorlar</b><br>o!yüksekskorlar komutu ile sunucundaki yazma yarışı yüksek skorlarını görebilirsin.", "<b>Çekiliş</b><br>o!çekiliş komutu ile sunucunda farklı yöntemler ile çekiliş düzenleyebilirsin."]
]
let clickedRecently = false;
let currentGroup = 0;
let fading = false;
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let desc1 = document.getElementById("desc1");
let desc2 = document.getElementById("desc2");
let desc3 = document.getElementById("desc3");
let elements = [img1, img2, img3, desc1, desc2, desc3];
let imageElements = [img1, img2, img3];
let descElements = [desc1, desc2, desc3];
elements.forEach(e => {
    e.style.opacity = 1;
    e.style.transition = "opacity 2s";
})

function fadeOut(direction) {
    if(fading) return;
    elements.forEach(e => {
        e.style.opacity = 0;
        fading = true;
    });
    setTimeout(() => {
        if (direction == "reverse") {
            if (currentGroup == 0) {
                currentGroup = images.length - 1;
            } else {
                currentGroup -= 1;
            }
        } else {
            if (currentGroup == images.length - 1) {
                currentGroup = 0;
            } else {
                currentGroup += 1;
            }
        }
        for (i = 0; i < imageElements.length; i++) {
            imageElements[i].src = "/Images/" + images[currentGroup][i] + ".png";
            descElements[i].innerHTML = descriptions[currentGroup][i];
        }
        fadeIn();
    }, 2000)
}

function fadeIn() {
    elements.forEach(e => {
        e.style.opacity = 1;
    })
    setTimeout(() => {
        fading = false;
    }, 2000)
}

setInterval(() => {
    if(!clickedRecently){
        fadeOut();
    }
}, 10000)

function leftButton() {
    fadeOut("reverse");
    clickedRecently = true;
    setTimeout(() => {
        clickedRecently = false;
    }, 10000)
}

function rightButton() {
    fadeOut();
    clickedRecently = true;
    setTimeout(() => {
        clickedRecently = false;
    }, 10000)
}