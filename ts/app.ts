
/// <reference path='./__references.d.ts' />

var ngModule = angular.module('miniApp',[]);


// ABAJO HAY DIRECTIVAS PEDORRAS

ngModule.directive('pepe',  () => {
  return {
    restrict: 'E',
    template: `
    <div class="GATO">
      <span>Soy PEPE</span>
    </div>`,
  };
});

namespace DirectivaBase {

  ngModule.directive('basecita',  () => {
    return {
      restrict: 'E',
      scope: {
        object: "=?",
      },
      bindToController: true,
      controller: 'BaseCtr',
      controllerAs: 'ctr',
      /*template: `
      <div>
        <strong>Son todos getAllowedSegmentations</strong>
        <pre>{{ctr.object | json}}</pre>
      </div>`,*/
    };
  });

  export class Controller {

    private object:any;

    constructor(private $element: JQuery,private $timeout: ng.ITimeoutService, private $scope: ng.IScope) {
      console.log("Construyendo la base")
      console.log("this.object", this.object)
    }
  }

  ngModule.controller("BaseCtr", ['$element', '$timeout', '$scope', Controller]);
}

namespace DirectivaExtension {

  ngModule.directive('extension',  () => {
    return {
      restrict: 'A',
      require: ['base','extension'],
      scope: false,
      bindToController: true,
      controller: 'ExtensionCtr',
      controllerAs: 'ctr',
      template: `
      <div class="GATO">
        <span>Soy la extensión</span>
        <pre>{{ctr.object | json}}</pre>
      </div>`,
      link: function postlink ($scope: ng.IScope, $element: JQuery, attrs : ng.IAttributes, ctrs: any[]) {
        const baseCtr: DirectivaBase.Controller = ctrs[0];
        const thisCtr: Controller = ctrs[1];
        thisCtr.initialize(baseCtr);
      }
    };
  });

  class Controller {
    private baseCtr: DirectivaBase.Controller

    private otraCosa: any;

    constructor(private $element: JQuery,private $timeout: ng.ITimeoutService, private $scope: ng.IScope) {
      console.log("Construyendo la extension")
      console.log("this.otraCosa", this.otraCosa)
    }

    public initialize(baseCtr: DirectivaBase.Controller) {
      this.baseCtr = baseCtr
    }

  }

  ngModule.controller("ExtensionCtr", ['$element', '$timeout', '$scope', Controller]);
}