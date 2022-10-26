"use strict";
/*
let emailCimek = szoveg.matchAll(emailPattern);
for (let email of emailCimek) {
    console.log(email[0]);
} */
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    // Patternek:
    let elsoHaromPattern = /[a-zA-Z ]{1,}/;
    let utcaHazPattern = / [a-zA-Z0-9_ ]{1,}/;
    let irszPattern = / A-Z0-9{1,}/;
    let bankKartyaSzamPattern = / ^[0-9]{1,}-[0-9]{1,}-[0-9]{1,}-[0-9]{1,}$/;
    let kodPattern = / ^[0-9]{3}$/;
    let tulajdonosPattern = /[a-zA-Z ]/;
    (_a = document.getElementById('fizetes')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        // étrékek:
        let nev = document.getElementById('nev').value;
        let orszag = document.getElementById('orszag').value;
        let varos = document.getElementById('varos').value;
        let utca = document.getElementById('utcaHaz').value;
        let irsz = document.getElementById('irsz').value;
        let bankKartyaSzam = document.getElementById('kartyaSzam').value;
        let kod = document.getElementById('kod').value;
        let tulajdonos = document.getElementById('tulajdonos').value;
        // Ellenorzesek
    });
});
