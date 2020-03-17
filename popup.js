"use strict";
window.addEventListener("DOMContentLoaded", request, false);
function generateQr(res) {
  if (res.url) {
    let qr = new QRCode(document.getElementById("qrcode"), {
      width: 325,
      height: 325,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById("text").innerHTML = res.url;
    document.getElementById("title").innerHTML = res.title;

    qr.makeCode(res.url);
  } else {
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("text").innerHTML = "";
    let value = document.getElementById("input").value;

    let qr = new QRCode(document.getElementById("qrcode"), {
      width: 325,
      height: 325,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    document.getElementById("title").innerHTML = value;
    qr.makeCode(value);
  }
}
function request() {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, tabs[0].title, generateQr);
  });
}
var input = document
  .getElementById("input")
  .addEventListener("change", generateQr, false);
