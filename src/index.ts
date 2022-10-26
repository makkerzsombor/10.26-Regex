/*
let emailCimek = szoveg.matchAll(emailPattern);
for (let email of emailCimek) {
    console.log(email[0]);
} */

document.addEventListener('DOMContentLoaded',() => {
    // Patternek:
    let elsoHaromPattern = /[a-zA-Z ]{1,}/;
    let utcaHazPattern = / [a-zA-Z0-9_ ]{1,}/; 
    let irszPattern = / A-Z0-9{1,}/;    
    let bankKartyaSzamPattern = / ^[0-9]{1,}-[0-9]{1,}-[0-9]{1,}-[0-9]{1,}$/;
    let kodPattern = / ^[0-9]{3}$/;
    let tulajdonosPattern = /[a-zA-Z ]/;

    document.getElementById('fizetes')?.addEventListener('click', () => {
        // étrékek:
        let nev = (document.getElementById('nev') as HTMLInputElement).value;
        let orszag = (document.getElementById('orszag') as HTMLInputElement).value;
        let varos = (document.getElementById('varos') as HTMLInputElement).value;
        let utca = (document.getElementById('utcaHaz') as HTMLInputElement).value;
        let irsz = (document.getElementById('irsz') as HTMLInputElement).value;
        let bankKartyaSzam = (document.getElementById('kartyaSzam') as HTMLInputElement).value;
        let kod = (document.getElementById('kod') as HTMLInputElement).value;
        let tulajdonos = (document.getElementById('tulajdonos') as HTMLInputElement).value;
        // Ellenorzesek
        
            
        

    });
});

