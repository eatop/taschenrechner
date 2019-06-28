"use strict";
$(document).ready(function () {
    // 2.1 Die Klasse Taschenrechner
    var Taschenrechner = /** @class */ (function () {
        function Taschenrechner() {
            this.zahl1 = 99;
            this.zahl2 = 99;
            this.ergebnis = 99;
        }
        Taschenrechner.prototype.zahlenBekommen = function () {
            this.zahl1 = Number($("#x").val());
            this.zahl2 = Number($("#y").val());
        };
        // 2.5 Ergebnis in das Ausgabefeld des Taschenrechners
        // hier ohne zusätzliche Argumente, da wir das Ergebnis Klassenweit speichern.
        Taschenrechner.prototype.ergebnisAnzeigen = function () {
            $("#result").val(this.ergebnis);
        };
        // 2.3 Mathematische Operationen
        Taschenrechner.prototype.plus = function () {
            this.zahlenBekommen();
            this.ergebnis = this.zahl1 + this.zahl2;
        };
        Taschenrechner.prototype.minus = function () {
            this.zahlenBekommen();
            this.ergebnis = this.zahl1 - this.zahl2;
        };
        Taschenrechner.prototype.mal = function () {
            this.zahlenBekommen();
            this.ergebnis = this.zahl1 * this.zahl2;
        };
        Taschenrechner.prototype.geteilt = function () {
            this.zahlenBekommen();
            this.ergebnis = this.zahl1 / this.zahl2;
        };
        return Taschenrechner;
    }());
    var calc = new Taschenrechner();
    // 2.4 Klick-Event-Listener
    $("#plus").on("click", function () {
        calc.plus();
    });
    $("#minus").on("click", function () {
        calc.minus();
    });
    $("#mal").on("click", function () {
        calc.mal();
    });
    $("#geteilt").on("click", function () {
        calc.geteilt();
    });
    $("#equals").on("click", function () {
        calc.ergebnisAnzeigen();
    });
});
