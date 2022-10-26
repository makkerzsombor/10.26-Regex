"use strict";
let userNamePattern = /^[a-z]{3,}$/;
console.log(userNamePattern.test("bob"));
console.log(userNamePattern.test("!@1"));
console.log(userNamePattern.test("z"));
let emailPattern = /[a-z0-9.-]{1,}@[a-z.]{1,}/g;
let szoveg = 'A petrik email cime: petrik@petrik.hu, a titkárásgé: titkarsag@petrik.hu';
let emailCimek = szoveg.matchAll(emailPattern);
for (let email of emailCimek) {
    console.log(email[0]);
}
