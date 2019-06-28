$(document).ready(() => {
   // 2.1 Die Klasse Taschenrechner
   class Taschenrechner {

      // 2.2 Zwei Attribute
      // Sind hier aber 3 geworden,damit man das Ergebnis in der ganzen Klasse hat.
      zahl1:number;
      zahl2:any;
      ergebnis:number;

      constructor() {
         this.zahl1 = 99;
         this.zahl2 = 99;
         this.ergebnis = 99;
      }

      zahlenBekommen():void {
         this.zahl1 = Number($("#x").val());
         this.zahl2 = Number($("#y").val());
      }

      // 2.5 Ergebnis in das Ausgabefeld des Taschenrechners
      // hier ohne zusätzliche Argumente, da wir das Ergebnis Klassenweit speichern.
      ergebnisAnzeigen():void {
         $("#result").val(this.ergebnis);
      }
      
      // 2.3 Mathematische Operationen
      plus():void {
         this.zahlenBekommen();
         this.ergebnis = this.zahl1 + this.zahl2;
      }
      minus():void {
         this.zahlenBekommen();
         this.ergebnis = this.zahl1 - this.zahl2;
      }
      mal():void {
         this.zahlenBekommen();
         this.ergebnis = this.zahl1 * this.zahl2;
      }
      geteilt():void {
         this.zahlenBekommen();
         this.ergebnis = this.zahl1 / this.zahl2;
      }

   }


   let calc = new Taschenrechner();


   // 2.4 Klick-Event-Listener
   $("#plus").on("click", () => {
      calc.plus()
   });
   $("#minus").on("click", () => {
      calc.minus()
   });
   $("#mal").on("click", () => {
      calc.mal()
   });
   $("#geteilt").on("click", () => {
      calc.geteilt()
   });
   $("#equals").on("click", () => {
      calc.ergebnisAnzeigen()
   });

});
