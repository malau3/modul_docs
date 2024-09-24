// Kelas Induk (Parent Class)
class Kendaraan {
    #nama;
    #harga;
    constructor(nama, harga){
        this.#nama = nama;
        this.#harga = harga;
    }
    informasi(){
        console.log(`Kendaraan ${this.#nama} harganya ${this.#harga} rupiah.`)
    }
    getterNama(){
        return this.#nama;
    }
    getterHarga(){
        return this.#harga;
    }
}

class Motor extends Kendaraan{
    constructor(keluaran, nama, harga){
        super(nama, harga);
        this.keluaran = keluaran;
    }
    infoMotor(){
        console.log(`Kendaraan ini keluaran tahun ${this.keluaran}`)
    }
}

class Mobil extends Kendaraan{
    constructor(bahanbakar, nama, harga){
        super(nama, harga);
        this.bahanbakar = bahanbakar;
    }
    infoBB(){
        console.log(`Mobil ${this.getterNama()} memiliki bahan bakar ${this.bahanbakar}`)
    }
}

class Honda extends Motor{
    #ccmotor;
    constructor(ccmotor, keluaran, nama, harga ){
        super(keluaran, nama, harga);
        this.#ccmotor = ccmotor;
    }

    infoCCMotor(){
        console.log(`Motor ${this.getterNama()} dari brand Honda dengan harga ${this.getterHarga()} keluaran tahun ${this.keluaran} memiliki CC ${this.#ccmotor}`)
    }
}

class Mitsubishi extends Mobil{
    #dimensi;
    constructor(dimensi, mesin, nama, harga){
        super(mesin, nama, harga);
        this.#dimensi = dimensi;
    }
    infoDimensi(){
        console.log(`Mobil ${this.getterNama()} dari brand Mitsubishi ini dengan harga ${this.getterHarga()} memiliki dimensi ${this.#dimensi}`)
    }
}

const HondaBeat = new Honda('125 cc', '2024', 'Honda Beat', 20000000);

HondaBeat.informasi();

HondaBeat.infoMotor();

HondaBeat.infoCCMotor();

console.log('Motor ini bernama '+ HondaBeat.getterNama())

console.log("")

const Xpander = new Mitsubishi('4595 mm L x 1750 mm W x 1750 mm H', 'Bensin', 'Mitsubishi Xpander', 230000000);

Xpander.informasi();

Xpander.infoBB();

Xpander.infoDimensi();
