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
    let utcaHazPattern = /[a-zA-Z0-9_ ]{1,}/;
    let irszPattern = /^[A-Z0-9]{1,}$/;
    let bankKartyaSzamPattern = /^[0-9]{1,}-[0-9]{1,}-[0-9]{1,}-[0-9]{1,}$/;
    let kodPattern = /^[0-9]{3}$/;
    let tulajdonosPattern = /[a-zA-Z ]/;
    (_a = document.getElementById('fizetes')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        // Minden hibát kiszed
        document.getElementById('rosszNev').textContent = '';
        document.getElementById('rosszOrszag').textContent = '';
        document.getElementById('rosszVaros').textContent = '';
        document.getElementById('rosszUtca').textContent = '';
        document.getElementById('rosszIrsz').textContent = '';
        document.getElementById('rosszKartya').textContent = '';
        document.getElementById('rosszKod').textContent = '';
        document.getElementById('rosszTulajdonos').textContent = '';
        // étrékek:
        let nev = document.getElementById('nev').value;
        let orszag = document.getElementById('orszag').value;
        let varos = document.getElementById('varos').value;
        let utca = document.getElementById('utcaHaz').value;
        let irsz = document.getElementById('irsz').value;
        let bankKartyaSzam = document.getElementById('kartyaSzam').value.toUpperCase();
        let kod = document.getElementById('kod').value;
        let tulajdonos = document.getElementById('tulajdonos').value;
        // Ellenorzesek
        let joNev = elsoHaromPattern.test(nev);
        let joOrzsag = elsoHaromPattern.test(orszag);
        let joVaros = elsoHaromPattern.test(varos);
        let joUtca = utcaHazPattern.test(utca);
        let joIrsz = irszPattern.test(irsz);
        let joKartya = bankKartyaSzamPattern.test(bankKartyaSzam);
        let joKod = kodPattern.test(kod);
        let joTulajdonos = tulajdonosPattern.test(tulajdonos);
        // Hibák:
        if (!joNev) {
            document.getElementById('rosszNev').textContent = 'Ez a név nem felel meg a közetelményeknek!';
        }
        else if (!joOrzsag) {
            document.getElementById('rosszOrszag').textContent = 'Ez az ország nem felel meg a közetelményeknek!';
        }
        else if (!joVaros) {
            document.getElementById('rosszVaros').textContent = 'Ez a város nem felel meg a közetelményeknek!';
        }
        else if (!joUtca) {
            document.getElementById('rosszUtca').textContent = 'Ez az utca nem felel meg a közetelményeknek!';
        }
        else if (!joIrsz) {
            document.getElementById('rosszIrsz').textContent = 'Ez az írányítószám nem felel meg a közetelményeknek!';
        }
        else if (!joKartya) {
            document.getElementById('rosszKartya').textContent = 'Ez a bank kártya nem felel meg a közetelményeknek!';
        }
        else if (!joKod) {
            document.getElementById('rosszKod').textContent = 'Ez a CCV nem felel meg a közetelményeknek!';
        }
        else if (!joTulajdonos) {
            document.getElementById('rosszTulajdonos').textContent = 'Ez a tulajdonos nem felel meg a közetelményeknek!';
        }
        else {
            document.getElementById('form').innerHTML = '';
            document.getElementById('form').innerHTML = '<p class="siker"> Sikeres fizetés! </p>';
        }
    });
});
