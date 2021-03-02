"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProdutosComponent = /** @class */ (function () {
    function ProdutosComponent(produtoService, router, cartService, loginService, alert) {
        this.produtoService = produtoService;
        this.router = router;
        this.cartService = cartService;
        this.loginService = loginService;
        this.alert = alert;
        this.listaDeProdutos = [];
        this.intervalTimer = rxjs_1.interval(300000);
        this.logo = '/assets/img/logo-conpay.png';
        this.icones = {
            detalhes: '/assets/icons/detalhes.svg',
            addCart: '/assets/icons/addCart.svg',
            logo: '/assets/img/conpaycolor.svg',
            carrinho: '/assets/img/logo-carrinho.png'
        };
    }
    ProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listaDeProdutos = this.produtoService.getProduto();
        this.verificaLogin();
        this.subscription = this.intervalTimer.subscribe(function () {
            _this.verificaLogin();
            console.log("Verificando funcao");
            console.log(_this.isUserLoggedIn);
        });
    };
    ProdutosComponent.prototype.addToCart = function (produto) {
        this.cartService.addToCart(produto);
    };
    ProdutosComponent.prototype.gotoCart = function () {
        this.router.navigate(['/carrinho']);
    };
    ProdutosComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    ProdutosComponent.prototype.logout = function () {
        this.loginService.logout();
        window.location.reload();
    };
    ProdutosComponent.prototype.goTodetalhesByState = function (produto) {
        this.router.navigateByUrl('/produtodetalhes', {
            state: produto
        });
    };
    ProdutosComponent.prototype.verificaLogin = function () {
        if (this.loginService.isUserLoggedIn()) {
            this.isUserLoggedIn = true;
        }
        else {
            this.isUserLoggedIn = false;
        }
    };
    ProdutosComponent = __decorate([
        core_1.Component({
            selector: 'app-produtos',
            templateUrl: './produtos.component.html',
            styleUrls: ['./produtos.component.css']
        })
    ], ProdutosComponent);
    return ProdutosComponent;
}());
exports.ProdutosComponent = ProdutosComponent;
