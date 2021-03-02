"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoComponent = void 0;
var core_1 = require("@angular/core");
var CarrinhoComponent = /** @class */ (function () {
    function CarrinhoComponent(loginService, pagamentoService, cartService, router) {
        this.loginService = loginService;
        this.pagamentoService = pagamentoService;
        this.cartService = cartService;
        this.router = router;
        this.items = this.cartService.getItems();
        this.imgs = {
            carrinho: '/assets/icons/carrinhodecompras.svg',
            carrinhoVazio: ' /assets/icons/carrinhovazio.svg',
            remover: '/assets/icons/remover.svg',
            adicionar: '/assets/icons/adicionar.svg',
            subtrair: '/assets/icons/subtrair.svg',
            finalizar: '/assets/icons/finalizar.svg'
        };
    }
    CarrinhoComponent.prototype.ngOnInit = function () {
        this.getTotal();
    };
    CarrinhoComponent.prototype.clearCart = function () {
        this.cartService.clearCart();
        window.location.reload();
    };
    CarrinhoComponent.prototype.removeProd = function (produto) {
        this.cartService.removeProd(produto);
        this.items = this.cartService.getItems();
        this.getTotal();
        return this.items;
    };
    CarrinhoComponent.prototype.increaseQtd = function (produto) {
        this.cartService.increaseQuantity(produto);
        this.cartService.getTotalProd(produto);
        this.items = this.cartService.getItems();
        this.getTotal();
        return this.items;
    };
    CarrinhoComponent.prototype.decreaseQtd = function (produto) {
        this.cartService.decreaseQuantity(produto);
        this.cartService.getTotalProd(produto);
        this.items = this.cartService.getItems();
        this.getTotal();
        return this.items;
    };
    CarrinhoComponent.prototype.getTotal = function () {
        var _this = this;
        this.value = 0;
        this.items = this.cartService.getItems();
        this.items.forEach(function (produto) {
            _this.value += (produto.quantity * produto.unitCost);
        });
    };
    CarrinhoComponent.prototype.endTransation = function () {
        this.pagamentoService.allProdutoObj.shoppingCart = this.items;
        this.pagamentoService.allProdutoObj.value = this.value;
        if (!this.loginService.isUserLoggedIn) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/areadepagamento']);
        }
    };
    CarrinhoComponent.prototype.backTOListProd = function () {
        this.router.navigate(['/produtos']);
    };
    CarrinhoComponent = __decorate([
        core_1.Component({
            selector: 'app-carrinho',
            templateUrl: './carrinho.component.html',
            styleUrls: ['./carrinho.component.css']
        })
    ], CarrinhoComponent);
    return CarrinhoComponent;
}());
exports.CarrinhoComponent = CarrinhoComponent;
