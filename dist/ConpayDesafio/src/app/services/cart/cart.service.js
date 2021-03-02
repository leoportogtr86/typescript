"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    function CartService(alert) {
        this.alert = alert;
    }
    CartService.prototype.addToCart = function (produto) {
        produto.quantity++;
        produto.total = produto.quantity * produto.unitCost;
        console.log(produto.quantity);
        this.items = this.getItems();
        if (this.items == null) {
            this.items = [];
            this.items.push(produto);
            window.localStorage.setItem('cart', JSON.stringify(this.items));
        }
        else {
            var position = this.items.findIndex(function (x) { return x.product_code == produto.product_code; });
            if (position != -1) {
                this.alert.alertaSnackBar("Este produto já está contido no seu carrinho de compras!!!", "OK");
            }
            else {
                this.items.push(produto);
                window.localStorage.setItem('cart', JSON.stringify(this.items));
                this.alert.alertaSnackBar("Produto adicionado com sucesso!!!", "OK");
            }
        }
    };
    CartService.prototype.getItems = function () {
        this.items = JSON.parse(window.localStorage.getItem('cart'));
        return this.items;
    };
    CartService.prototype.getTotalProd = function (produto) {
        this.items = this.getItems();
        var position = this.items.findIndex(function (x) { return x.product_code == produto.product_code; });
        if (position != -1) {
            this.items[position].total = this.items[position].quantity * this.items[position].unitCost;
        }
        window.localStorage.setItem('cart', JSON.stringify(this.items));
        return this.items[position].total;
    };
    CartService.prototype.clearCart = function () {
        this.items = [];
        window.localStorage.removeItem('cart');
        return this.items;
    };
    CartService.prototype.removeProd = function (produto) {
        this.items.splice(produto, 1);
        window.localStorage.setItem('cart', JSON.stringify(this.items));
    };
    CartService.prototype.increaseQuantity = function (produto) {
        this.items = JSON.parse(window.localStorage.getItem('cart'));
        var position = this.items.findIndex(function (x) { return x.product_code == produto.product_code; });
        if (position != -1) {
            this.items[position].quantity++;
        }
        window.localStorage.setItem('cart', JSON.stringify(this.items));
        return this.items[position].quantity;
    };
    CartService.prototype.decreaseQuantity = function (produto) {
        this.items = JSON.parse(window.localStorage.getItem('cart'));
        var position = this.items.findIndex(function (x) { return x.product_code == produto.product_code; });
        if (position != -1) {
            this.items[position].quantity--;
            if (this.items[position].quantity == 1 || this.items[position].quantity < 1) {
                this.items[position].quantity = 1;
            }
        }
        window.localStorage.setItem('cart', JSON.stringify(this.items));
        return this.items[position].quantity;
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
