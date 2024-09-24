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

class Minuman extends Produk{
    constructor(liter, nama, jumlah){
        super(nama, jumlah);
        this.liter = liter;
    }
    isiMinuman(){
        console.log(`${this.nama} memiliki isi sejumlah ${this.liter}`)
    }
}

const IcedTea = new Minuman('250 ml', 'BigMac', 1);

IcedTea.informasi();

IcedTea.isiMinuman();

console.log('Makanan ini bernama '+ IcedTea.getterNama());
