
const myBtn = document.getElementById("generate");
myBtn.addEventListener('click', getData)

function getData() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        const quote = document.getElementById("quote");
        quote.innerHTML = `<p id="content">${data.content}</p><span>${data.author}</span>`;

        const shareButton = document.getElementById("share-button");
        shareButton.innerHTML = `
            <a href="http://facebook.com/sharer/sharer.php?quote=${data.content}" target="_blank" href="#" class="fa-brands fa-facebook-f"></a>
            <a href="https://api.whatsapp.com/send?text=${data.content}" target="_blank" class="fa-brands fa-whatsapp"></a>
            <a href="https://t.me/share/url?url=${data.content}" target="_blank" class="fa-brands fa-telegram"></a>
            <a href="https://twitter.com/intent/tweet?text=${data.content}" target="_blank" class="fa-brands fa-twitter"></a>
        `;

    })
}
getData();

function copy() {
    var range = document.createRange();
    range.selectNode(document.getElementById("content"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied the text: " + document.getElementById("content").innerHTML);
}