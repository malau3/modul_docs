// Kelas Induk (Parent Class)
class Produk {
    constructor(nama, jumlah){
        this.nama = nama;
        this.jumlah = jumlah;
    }
    informasi(){
        console.log(`Produk ${this.nama} ada sebanyak ${this.jumlah} pcs.`)
    }
    getterNama(){
        return this.nama;
    }
}

class Makanan extends Produk{
    constructor(expired, nama, jumlah){
        super(nama, jumlah);
        this.expired = expired;
    }
    waktuRusak(){
        console.log(`${this.nama} akan rusak pada tanggal ${this.expired}`)
    }
}

const burger = new Makanan('25 september 2024', 'BigMac', 1);

burger.informasi();

burger.waktuRusak();

console.log('Makanan ini bernama '+ burger.getterNama())
