var whoIsThisLegacy = function () {
  console.log(this);
}

var whoIsThisArrow = () => {
  console.log(this);
}

var service = {
  valor: 1,
  sayHello: function() {
    alert("hello")
  },
  whoIsThisLegacy: function() {
    console.log(this);
    console.log(this.valor);
  },
  whoIsThisArrow: () => {
    console.log(this);
    console.log(this.valor);
  }
}

// https://www.typescriptlang.org/play?target=1&ts=4.2.3#code/HYQwtgpgzgDiDGEAEAFCNkG8CwAoPSS8ANiFFEgMID2wALgE7XHEQNI766GEwMCWANxB1kAMwCuweABkIAcwQBPAFxIAYlPh1+tANwEefISPFaAggyYB3NZuk79h3gOGik-ACZrgEsACM2A24eKDoRfngPTxopUQYfP0D2AF4kAAZgniJaMIYJbWoGAAoASg5nHjoAC34oADovJDSAahaaeiYWNkaY6jigvErCGrr6yWk5RXglZqQJ7V1gJDKKkOzCeFzmCHrianli0ahSrI2AXyH1qtqGhcsbOdWUgD41jZ4t4CgdvYOj26nYZIS7XUGVGASfzESJISB0aieajFOAMcBqEDAJTlTgfL4-Vh-Q4AIgAEswQEhiUgWkhUeBSpVQYRwSEIAAPGBFOg5b48gAiEDEIAkxDoHUYzFYDAAknzMYg5sAINYqLRJd0SkDcKy8GgMPVBcLReL1V1pXKwgrdvDEcjiRgrNRiacgA
var Pepe;
(function (Pepe) {
    var Controller = /** @class */ (function () {
        function Controller() {
          var _this = this;
          this.id = ++Controller.idCounter;
          var algoLegacy = function () {
              console.log(this);
          };
          algoLegacy();
          var algoArrow = () => {
              console.log(this);
          };
          algoArrow();
        }
        Controller.prototype.metodo = function (param) {
            console.log("Hola " + param);
        };
        Controller.idCounter = 0;
        return Controller;
    }());
    Pepe.DefaultControllerInstance = new Controller();
})(Pepe || (Pepe = {}));
Pepe.DefaultControllerInstance.metodo("perro");