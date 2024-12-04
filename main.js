// ============
// 1-masala:
//  1 dan 100 gacha bo'lgan barcha sonlarni konsolga chiqaring.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
// ============
// 2-masala:
//  1 dan 50 gacha bo'lgan juft sonlarni konsolga chiqaring.
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// ============
// 3-masala:
//  1 dan 30 gacha bo'lgan toq sonlarni konsolga chiqaring.
for (let i = 1; i <= 30; i = +2) {
  console.log(i);
}
// ============
// 4-masala:
//  1 dan 20 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring.
for (let i = 1; i <= 20; i++) {
  console.log(i ** 2);
}
// ============
// 5-masala:
//  10 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqaring.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// ============
// 6-masala:
//  1 dan 100 gacha bo'lgan sonlarning yig'indisini hisoblang.
let sum6 = 0;
for (let i = 1; i <= 100; i++) {
  sum6 += i;
}
// ============
// 7-masala:
//  1 dan 20 gacha bo'lgan barcha juft sonlarning yig'indisini hisoblang.
let sum7 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum7 += i;
  }
}
console.log(sum7);
// ============
// 8-masala:
//  1 dan 15 gacha bo'lgan barcha toq sonlarning ko'paytmasini hisoblang.
let multi8 = 1;
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    multi8 *= i;
  }
}
console.log(multi8);
// ============
// 9-masala:
//  5 dan 25 gacha bo'lgan sonlarning kublarini konsolga chiqaring.
for (let i = 5; i <= 25; i++) {
  console.log(i ** 3);
}
// ============
// 10-masala:
//  1 dan 10 gacha bo'lgan sonlarning kvadrat ildizlarini konsolga chiqaring.
for (let i = 1; i <= 10; i++) {
  console.log(Math.sqrt(i));
}
// ============
// 11-masala:
// 1 dan 50 gacha bo'lgan barcha sonlar orasida 3 ga karrali sonlarni toping va konsolga chiqaring.
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
// ============
// 12-masala:
//  1 dan 100 gacha bo'lgan barcha sonlarni qo'shish davomida yig'indining oxirgi qiymatini konsolga chiqaring.
let sum12 = 0;
for (let i = 1; i <= 100; i++) {
  sum12 += i;
}

console.log(sum12);
// ============
// 13-masala:
//  1 dan 100 gacha bo'lgan barcha sonlardan faqat 7 ga bo'linadigan sonlarni konsolga chiqaring.
for (let i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}
// ============
// 14-masala:
//  1 dan 100 gacha bo'lgan barcha sonlarni qo'shib, natijaning o'rtacha qiymatini toping.
let sum14 = 0;
let counter14
for (let i = 1; i <= 100; i++) {
  counter14++;
  sum14 += i;
}

sum14 /= counter14;
// ============
// 15-masala:
//  1 dan 20 gacha bo'lgan sonlarning faqat toqlari bilan ishlash uchun sikl yozing va ularning yig'indisini hisoblang.
let sum15;
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    sum15 += i;
  }
}
// ============
// 16-masala:
//  Foydalanuvchidan son kiriting. Shu sondan kichik barcha juft sonlarni konsolga chiqaring.
let i = +prompt("son kriting");
for (i; i >= 1; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// ============
// 17-masala:
//  1 dan 50 gacha bo'lgan sonlarning faqat 5 ga va 3 ga bo'linadiganlarini aniqlang.
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
  }
}
// ============
// 18-masala:
//  1 dan 30 gacha bo'lgan sonlarning har birining kvadratini hisoblang va ularning yig'indisini toping.
let sum18 = 0;
for (let i = 1; i <= 30; i++) {
  sum18 = sum + i ** 2;
}
// ============
// 19-masala:
//  1 dan 100 gacha bo'lgan barcha toq sonlarni konsolga chiqaring va ular sonini hisoblang.
let counter19;
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
    counter19++;
  }
}
console.log(counter19);
// ============
// 20-masala:
//  Foydalanuvchi kiritgan ikkita son orasidagi barcha sonlarning yig'indisini hisoblang.
let firstNumber20  = +prompt("son ")
let secondNumber20 = +prompt("son ")
let sum20 = 1
if(firstNumber20 < secondNumber20){
  for(firstNumber20; firstNumber20 <= secondNumber20; firstNumber20++){
    sum20 += firstNumber20
  }
}else{
  for(secondNumber20; secondNumber20 <= firstNumber20; secondNumber20++){
    sum20 += secondNumber20
  }
}

console.log(sum20)
  // ============
// 21-masala:
//  1 dan 50 gacha bo'lgan barcha sonlar ichidan faqat 3 ga karrali bo'lmagan sonlarni chiqaring.
for (let i = 1; i <= 50; i++){
  if(i % 3 != 0){
    console.log(i)
  }
}
// ============
// 22-masala:
//  1 dan 20 gacha bo'lgan sonlarni konsolga chiqarishda faqat toqlari chiqsin, juftlari o'rniga "Juft son" so'zi chiqsin.
for (let i = 1; i <= 20; i++){
  if(i % 2 == 0){
    console.log("juft son")
  }else {
    console.log(i)
  }
}

// ============
// 23-masala:
//  1 dan 100 gacha bo'lgan sonlar yig'indisini hisoblang, lekin faqat 10 ga bo'linmaydigan sonlar uchun.
let sum23 = 0
for (let i = 1; i <= 100; i++){
  if(i % 10 != 0){
    sum20  += i
  }
}
console.log(i)
// ============
// 24-masala:
//  1 dan 30 gacha bo'lgan barcha sonlarning ko'paytmasini hisoblang.
let multi24 = 1
for (let i = 1; i <=30; i++){
  multi24 *= i
}
console.log(multi8)
// ============
// 25-masala:
//  Foydalanuvchidan boshlang'ich va tugash sonlarini kiritishni so'rang va shu oralig'dagi sonlarni konsolga chiqaring.
let firstNumber25  = +prompt("son ")
let secondNumber25 = +prompt("son ")
for(firstNumber25; firstNumber25 <= secondNumber25; firstNumber25++){
  console.log(firstNumber25)
}
// ============
// 26-masala:
//  1 dan 100 gacha bo'lgan sonlardan faqat 3 ga va 5 ga bo'linadiganlarini konsolga chiqaring.
for (let i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log(i)
  }
}
// ============
// 27-masala:
//  Foydalanuvchidan kiritilgan sonning faktorialini hisoblang.
let firstNumber26  = +prompt("son ")
let num26 = 1
let multi26 = 1
for(firstNumber26; num26 <= firstNumber26; firstNumber26--){
  multi26 *= firstNumber26
}

console.log(multi26)
// ============
// 28-masala:
//  1 dan 50 gacha bo'lgan barcha sonlarning juftlarini yig'ing, toqlarini esa chiqarib yuboring.
let stockNumebr = " "
for(let i = 1; i <= 50; i++){
  if(i % 2 == 0){
    stockNumebr += i
  }
}
console.log(stockNumebr)
// ============
// 29-masala:
//  1 dan 10 gacha bo'lgan barcha sonlarning kublarini konsolga chiqaring va ularning yig'indisini hisoblang.
let sum29 = 0 
let multi29 = 1
for(let i = 1; i <= 10; i++){
  multi29 = i ** 3
  console.log(multi29)
  sum29 += multi29
}
console.log(sum29)
// ============
// 30-masala:
// 1 dan 20 gacha bo'lgan barcha sonlarni konsolga chiqaring va har biriga "Bu sonning kvadrati: [kvadrat]" qo'shimchasini yozing.
let multi30
for(let i = 1; i <= 20; i++){
  multi30 = i ** 2
  console.log((i) + " Bu sonning kvadrati: " + (multi30))
}

// ============
// 31-masala:
// 1 dan 100 gacha bo'lgan sonlar ichidan faqat 7 ga bo'linadigan sonlarni toping va ularning ko'paytmasini hisoblang.
let multi31 = 1
for(let i = 1; i <= 100; i++){
  if(i % 7 == 0){
    multi31 *= i
  }
}
console.log(multi31)
// ============
// 32-masala:
//  1 dan 30 gacha bo'lgan sonlarni o'nlikda aylantirib (har bir sonni 10 ga ko'paytirib) konsolga chiqaring.
for (let i = 1; i <= 30; i++) {
  console.log(i * 10);
}

// ============
// 33-masala:
//  1 dan 20 gacha bo'lgan sonlardan faqat musbat bo'lganlarini konsolga chiqaring. (masala mantiqan xato)

// ============
// 34-masala:
//  Foydalanuvchidan bitta musbat son kiriting. Shu sondan kichik barcha juft sonlarning yig'indisini hisoblang.
let firstNumber34 = +prompt("son kriting")
let sum34 = 0
for (firstNumber34; firstNumber34 >= 1; firstNumber34--){
  if(firstNumber34 % 2 == 0)
    sum34 += firstNumber34
}
// ============
// 35-masala:
// Foydalanuvchidan kiritilgan 2 ta sonning o'rtasidagi barcha sonlarning ko'paytmasini hisoblang.
let firstNumber35  = +prompt("son ")
let secondNumber35 = +prompt("son ")
let multi35 = 1
if(firstNumber35 < secondNumber35){
  for(firstNumber35; firstNumber35 <= secondNumber35; firstNumber35++){
    multi35 *= firstNumber35
  }
}else {
  for(secondNumber35; firstNumber35 >= secondNumber35; secondNumber35++){
    multi35 *= secondNumber35
  }
}
// ============
// 36-masala:
//  Foydalanuvchidan kiritilgan musbat sondan katta bo'lgan barcha 10 ga bo'linadigan sonlarni toping va chiqaring.
  // let firstNumber36 = +prompt("son kriting")
  // for(firstNumber36 ) misol hatoga ohshadi mani tushunishim boyicha foydalanuvchi kirtkan sonda katta bolgan sonlar cheksiz.
// ============
// 37-masala:
// 1 dan 15 gacha bo'lgan barcha sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.
let sum37 = 0
let multi37 
for (let i = 1; let <= 15; let++){
  multi37 = i ** 2
  sum37 += multi37
}

console.log(sum37)
// ============
// 38-masala:
//  1 dan 10 gacha bo'lgan sonlarning faktorialini chiqaruvchi sikl yozing.
let multi38 = 1
for (let i = 10; i <= 1; i--){
  multi38 *= i
}
console.log(multi38)
// ============
// 39-masala:
//  Foydalanuvchidan musbat son kiritishni so'rang va 1 dan shu songacha bo'lgan sonlarning kvadratlarini chiqarib, yig'indisini hisoblang.
let firstNumber39 = +prompt("Musbat song kriting")
let multi39 = 1
let sum39 = 0
for (let i = 1; i <= firstNumber39; i++){
  multi39 = i ** 2
  console.log(multi39)
  sum39 += multi39
}

console.log(sum39)
// ============
// 40-masala:
//  Foydalanuvchi kiritgan musbat sondan kichik barcha sonlarni teskari tartibda konsolga chiqaring.
let firstNumber40 = +prompt("Musbat song kriting")
for (let i = 1; firstNumber40 >= i; firstNumber40--){
  console.log(firstNumber40)
}
// ============
// 41-masala:
//  1 dan 50 gacha bo'lgan barcha sonlarning har birining kubini chiqarishda faqat 2 ga bo'linadiganlarini tanlang.
let multi41 = 1
for (let i = 1; i <= 50; i++){
  multi41 = i ** 3
  if(multi41 % 2 == 0){
    console.log(multi41)
  }
}
// ============
// 42-masala:
// 1 dan 100 gacha bo'lgan sonlardan faqat 5 ga bo'linmaydiganlarini chiqaring.
for(let i = 1; i <= 100; i++){
  if(i % 5 != 0){
    console.log(i)
  }
}
// ============
// 43-masala:
//  Foydalanuvchi kiritgan musbat sondan kichik bo'lgan barcha sonlarni ekranga chiqarib, ularning faqat 3 ga karralilarini hisoblang.
  let firstNumber43 = +prompt("son kriting")
  let sum41
  for (let i = 1; i <= firstNumber43; i++){
    if(i % 3 == 0){
      console.log(i)
    }
  }
// ============
// 44-masala:
//  1 dan 20 gacha bo'lgan sonlarni chiqarishda har bir juft son uchun "Juft son", toq son uchun "Toq son" so'zini chiqaring.
for(let i = 1; i <= 20; i++){
  if(i % 2 == 0){
    console.log("Juft son")
  }else {
    console.log("Toq son")
  }
}
// ============
// 45-masala:
//  1 dan 10 gacha bo'lgan sonlarni konsolga chiqarishda faqat toq sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.
let multi45 = 1
let sum45 = 0

for(let i = 1; i <= 10; i++){
  if(i % 2 != 0){
    multi45 = i ** 2
    console.log(multi45)
  }
  sum45 += multi45
}
// ============
// 46-masala:
//  Foydalanuvchidan kiritilgan sonning kvadrati 100 dan oshmaguncha, har bir sonni chiqarib boruvchi sikl yozing.(ishlash ixtiyoriy while orqali ishlanar ekan)

// ============
// 47-masala:
//  1 dan 30 gacha bo'lgan sonlarni konsolga chiqarishda faqat 3 va 4 ga bo'linadiganlarini tanlang va ularni yig'indisini hisoblang.
let sum47 = 0

for (let i = 1; i <= 30; i++){
  if(i % 3 ==0 && i % 4 == 0){
    sum47 += i
  }
}
// ============
// 48-masala:
//  1 dan 50 gacha bo'lgan sonlarning har birini chiqarishda juft sonlarni chiqarib yuboring va faqat toqlarini ekranga chiqaring.
for (let i = 1; i <= 50; i++){
  if(i % 2 != 0){
    console.log(i)
  }
}
// ============
// 49-masala:
//  Foydalanuvchidan son kiritishni so'rang va shu sondan kichik barcha 7 ga karrali sonlarning ko'paytmasini hisoblang.
let firstNumber49 = +prompt("son kriting")
let multi49 = 1
for (let i = 1; i <= firstNumber49; i++) {
  if (i % 7 == 0){
    multi49 = multi49 * i
  }
}
// ============
// 50-masala:
//  Foydalanuvchidan boshlang'ich va tugash sonini kiritishni so'rang va shu oraliqdagi har bir sonning kvadratini chiqarib, ularning yig'indisini hisoblang.
let firstNumber50 = +prompt("boshlangich son kriting")
let secondNumber50 = +prompt("tugash son kriting")
let multi50 = 1
let sum50 = 0

for(firstNumber50; firstNumber50 <= secondNumber50; firstNumber50++){
  multi50 = firstNumber50 ** 2
  console.log(multi50)
  sum50 += multi50
}