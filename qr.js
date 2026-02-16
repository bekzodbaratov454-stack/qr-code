const inputLink = document.querySelector(".input-link");
const generateBTN = document.querySelector("#generateBTN");
const QrImage = document.querySelector("#QrImage");

generateBTN.addEventListener("click" , () => {
    let link = inputLink.value.trim();

    QrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(link);


});