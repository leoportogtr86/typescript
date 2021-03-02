"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutodetalhesComponent = void 0;
var core_1 = require("@angular/core");
var ProdutodetalhesComponent = /** @class */ (function () {
    function ProdutodetalhesComponent(route, cartService, router, alert) {
        this.route = route;
        this.cartService = cartService;
        this.router = router;
        this.alert = alert;
        var nav = router.getCurrentNavigation();
        this.produto = nav.extras.state;
    }
    ProdutodetalhesComponent.prototype.ngOnInit = function () {
    };
    ProdutodetalhesComponent.prototype.addToCart = function (produto) {
        this.cartService.addToCart(produto);
    };
    ProdutodetalhesComponent.prototype.GoToCart = function () {
        this.router.navigate(['/carrinho']);
    };
    ProdutodetalhesComponent = __decorate([
        core_1.Component({
            selector: 'app-produtodetalhes',
            templateUrl: './produtodetalhes.component.html',
            styleUrls: ['./produtodetalhes.component.css']
        })
    ], ProdutodetalhesComponent);
    return ProdutodetalhesComponent;
}());
exports.ProdutodetalhesComponent = ProdutodetalhesComponent;
