/*
let emailCimek = szoveg.matchAll(emailPattern);
for (let email of emailCimek) {
    console.log(email[0]);
} */

document.addEventListener('DOMContentLoaded',() => {
    // Patternek:
    let elsoHaromPattern = /[a-zA-Z ]{1,}/;
    let utcaHazPattern = / [a-zA-Z0-9_ ]{1,}/; 
    let irszPattern = / ^[A-Z][0-9]{1,}$/;    
    let bankKartyaSzamPattern = / ^[0-9]{1,}-[0-9]{1,}-[0-9]{1,}-[0-9]{1,}$/;
    let kodPattern = / ^[0-9]{3}$/;
    let tulajdonosPattern = /[a-zA-Z ]/;

    document.getElementById('fizetes')?.addEventListener('click', () => {
        // Minden hibát kiszed
        (document.getElementById('rosszNev') as HTMLElement).textContent = '';
        (document.getElementById('rosszOrszag') as HTMLElement).textContent = '';
        (document.getElementById('rosszVaros') as HTMLElement).textContent = '';
        (document.getElementById('rosszUtca') as HTMLElement).textContent = '';
        (document.getElementById('rosszIrsz') as HTMLElement).textContent = '';
        (document.getElementById('rosszKartya') as HTMLElement).textContent = '';
        (document.getElementById('rosszKod') as HTMLElement).textContent = '';
        (document.getElementById('rosszTulajdonos') as HTMLElement).textContent = '';
        // étrékek:
        let nev = (document.getElementById('nev') as HTMLInputElement).value;
        let orszag = (document.getElementById('orszag') as HTMLInputElement).value;
        let varos = (document.getElementById('varos') as HTMLInputElement).value;
        let utca = (document.getElementById('utcaHaz') as HTMLInputElement).value;
        let irsz = (document.getElementById('irsz') as HTMLInputElement).value;
        let bankKartyaSzam = (document.getElementById('kartyaSzam') as HTMLInputElement).value.toUpperCase();
        let kod = (document.getElementById('kod') as HTMLInputElement).value;
        let tulajdonos = (document.getElementById('tulajdonos') as HTMLInputElement).value;
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
        if (!joNev){
            (document.getElementById('rosszNev') as HTMLElement).textContent = 'Ez a név nem felel meg a közetelményeknek!';
        }else if(!joOrzsag){
            (document.getElementById('rosszOrszag') as HTMLElement).textContent = 'Ez az ország nem felel meg a közetelményeknek!';
        }else if (!joVaros) {
            (document.getElementById('rosszVaros') as HTMLElement).textContent = 'Ez a város nem felel meg a közetelményeknek!';
        }else if(!joUtca){
            (document.getElementById('rosszUtca') as HTMLElement).textContent = 'Ez az utca nem felel meg a közetelményeknek!';
        }else if(!joIrsz){
            (document.getElementById('rosszIrsz') as HTMLElement).textContent = 'Ez az írányítószám nem felel meg a közetelményeknek!';
        }else if(!joKartya){
            (document.getElementById('rosszKartya') as HTMLElement).textContent = 'Ez a bank kártya nem felel meg a közetelményeknek!';
        }else if (!joKod) {
            (document.getElementById('rosszKod') as HTMLElement).textContent = 'Ez a CCV nem felel meg a közetelményeknek!';
        }else if (!joTulajdonos) {
            (document.getElementById('rosszTulajdonos') as HTMLElement).textContent = 'Ez a tulajdonos nem felel meg a közetelményeknek!';
        }else {
            (document.getElementById('form')as HTMLElement).innerHTML = '';
            (document.getElementById('form') as HTMLElement).innerHTML = '<p class="siker"> Sikeres fizetés! </p>'
        }

    });
});

