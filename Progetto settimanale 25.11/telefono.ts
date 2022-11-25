interface Telefono {
    credito: number;
    numeroChiamate: number;
    ricarica(ric: number): void;
    chiamata(time:number): void;
    numero404(): number;
    getNumeroChiamata(): number;
    azzeraChiamate(): void;
}

class Utente implements Telefono {
    public credito;
    public numeroChiamate;

    constructor(_credito: number, _numeroChiamate: number) {

        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(ric: number) {
        let carica = this.credito + ric;
        return carica
    }
    
    public chiamata(time: number) {
        let speso = time * 0.20;
        if (speso > 0.20) {
            this.credito = this.credito - speso;
            this.numeroChiamate++;
        }
    }
    
    public numero404() {
        return this.credito;
    }
    
    public getNumeroChiamata() {
        return this.numeroChiamate;
    }
    
    public azzeraChiamate() {
        this.numeroChiamate = 0
    }
}

console.log('Utente 1');
console.log('-----------------------------');
let newUtente1 = new Utente(20, 2);
newUtente1.ricarica(10);
newUtente1.chiamata(5);
newUtente1.ricarica(5);
newUtente1.chiamata(2);
console.log('Il tuo credito residuo è: ' + newUtente1.numero404() + ' €');
console.log('Hai effetuato: ' + newUtente1.getNumeroChiamata() + ' chiamate');
newUtente1.azzeraChiamate();
console.log('Chiamate azzerate: ' + newUtente1.getNumeroChiamata());
console.log('');
console.log('Utente 2');
console.log('-----------------------------');
let newUtente2 = new Utente(10, 0);
newUtente2.ricarica(20);
newUtente2.chiamata(10);
newUtente2.ricarica(10);
newUtente2.chiamata(10);
newUtente2.ricarica(5);
newUtente2.chiamata(20);
console.log('Il tuo credito residuo è: ' + newUtente2.numero404() + ' €');
console.log('Hai effetuato: ' + newUtente2.getNumeroChiamata() + ' chiamate');
newUtente2.azzeraChiamate();
console.log('Chiamate azzerate: ' + newUtente2.getNumeroChiamata());
console.log('');
console.log('Utente 3');
console.log('-----------------------------');
let newUtente3 = new Utente(25, 1);
newUtente3.ricarica(15);
newUtente3.chiamata(10);
newUtente3.ricarica(5);
newUtente3.chiamata(15);
console.log('Il tuo credito residuo è: ' +newUtente3.numero404() + ' €');
console.log('Hai effetuato: ' + newUtente3.getNumeroChiamata() + ' chiamate');
newUtente3.azzeraChiamate();
console.log('Chiamate azzerate: ' + newUtente3.getNumeroChiamata());



