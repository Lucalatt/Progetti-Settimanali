var Utente = /** @class */ (function () {
    function Utente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Utente.prototype.ricarica = function (ric) {
        var carica = this.credito + ric;
        return carica;
    };
    Utente.prototype.chiamata = function (time) {
        var speso = time * 0.20;
        if (speso > 0.20) {
            this.credito = this.credito - speso;
            this.numeroChiamate++;
        }
    };
    Utente.prototype.numero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Utente;
}());
console.log('Utente 1');
console.log('-----------------------------');
var newUtente1 = new Utente(20, 2);
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
var newUtente2 = new Utente(10, 0);
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
var newUtente3 = new Utente(25, 1);
newUtente3.ricarica(15);
newUtente3.chiamata(10);
newUtente3.ricarica(5);
newUtente3.chiamata(15);
console.log('Il tuo credito residuo è: ' + newUtente3.numero404() + ' €');
console.log('Hai effetuato: ' + newUtente3.getNumeroChiamata() + ' chiamate');
newUtente3.azzeraChiamate();
console.log('Chiamate azzerate: ' + newUtente3.getNumeroChiamata());
