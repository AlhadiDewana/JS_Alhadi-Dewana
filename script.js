// String Demo
function demoString() {
    let nama = "John Doe";
    let pesan = 'Halo Dunia';
    let gabungan = `${nama} mengatakan: ${pesan}`;
    
    console.log("=== String Demo ===");
    console.log(nama);
    console.log(pesan);
    console.log(gabungan);
    
    alert("String Demo:\n" + 
          "nama: " + nama + "\n" +
          "pesan: " + pesan + "\n" +
          "gabungan: " + gabungan);
}

// Number Demo
function demoNumber() {
    let bilBulat = 42;
    let bilDesimal = 3.14;
    let negatif = -17;
    let scientific = 123e5;
    
    console.log("=== Number Demo ===");
    console.log(bilBulat);
    console.log(bilDesimal);
    console.log(negatif);
    console.log(scientific);
    
    alert("Number Demo:\n" +
          "Bilangan Bulat: " + bilBulat + "\n" +
          "Bilangan Desimal: " + bilDesimal + "\n" +
          "Bilangan Negatif: " + negatif + "\n" +
          "Notasi Scientific: " + scientific);
}

// Boolean Demo
function demoBoolean() {
    let benar = true;
    let salah = false;
    let perbandingan = 5 > 3;
    
    console.log("=== Boolean Demo ===");
    console.log(benar);
    console.log(salah);
    console.log(perbandingan);
    
    alert("Boolean Demo:\n" +
          "benar: " + benar + "\n" +
          "salah: " + salah + "\n" +
          "5 > 3: " + perbandingan);
}

// Array Demo
function demoArray() {
    let buah = ["Apel", "Jeruk", "Mangga"];
    let campuran = [1, "dua", true, { nama: "John" }];
    
    console.log("=== Array Demo ===");
    console.log(buah);
    console.log(campuran);
    
    alert("Array Demo:\n" +
          "Array Buah: " + buah.join(", ") + "\n" +
          "Array Campuran: " + campuran);
}

// Object Demo
function demoObject() {
    let person = {
        nama: "John Doe",
        umur: 30,
        isMarried: false,
        hobi: ["membaca", "berenang"]
    };
    
    console.log("=== Object Demo ===");
    console.log(person);
    console.log(person.nama);
    console.log(person.hobi);
    
    alert("Object Demo:\n" +
          "Nama: " + person.nama + "\n" +
          "Umur: " + person.umur + "\n" +
          "Status Menikah: " + person.isMarried + "\n" +
          "Hobi: " + person.hobi.join(", "));
}

// Symbol Demo
function demoSymbol() {
    let sym1 = Symbol("deskripsi");
    let sym2 = Symbol("deskripsi");
    
    console.log("=== Symbol Demo ===");
    console.log(sym1);
    console.log(sym1 === sym2); // false
    
    alert("Symbol Demo:\n" +
          "Symbol 1: " + String(sym1) + "\n" +
          "Symbol 2: " + String(sym2) + "\n" +
          "Symbol 1 === Symbol 2: " + (sym1 === sym2));
}

// BigInt Demo
function demoBigInt() {
    let bigNumber = BigInt(9007199254740991);
    let anotherBig = 9007199254740991n;
    
    console.log("=== BigInt Demo ===");
    console.log(bigNumber);
    console.log(anotherBig);
    
    alert("BigInt Demo:\n" +
          "Big Number 1: " + bigNumber + "\n" +
          "Big Number 2: " + anotherBig);
}

// Undefined & Null Demo
function demoUndefinedNull() {
    let varUndefined;
    let varNull = null;
    
    console.log("=== Undefined & Null Demo ===");
    console.log(varUndefined);
    console.log(varNull);
    
    alert("Undefined & Null Demo:\n" +
          "Undefined variable: " + varUndefined + "\n" +
          "Null variable: " + varNull);
}

// Type Of Demo
function demoTypeOf() {
    console.log("=== Type Of Demo ===");
    console.log(typeof "Hello");     // string
    console.log(typeof 42);          // number
    console.log(typeof true);        // boolean
    console.log(typeof [1,2,3]);     // array
    console.log(typeof {name: "John"}); // object
    console.log(typeof undefined);    // undefined
    console.log(typeof null);        // null
    console.log(typeof Symbol());    // symbol
    console.log(typeof 42n);         // bigint
    
    alert("Type Of Demo (lihat console untuk detail lengkap):\n" +
          "typeof 'Hello': " + typeof "Hello" + "\n" +
          "typeof 42: " + typeof 42 + "\n" +
          "typeof true: " + typeof true + "\n" +
          "typeof [1,2,3]: " + typeof [1,2,3]);
}