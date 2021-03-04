"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filho = void 0;
var Pai_1 = require("./Pai");
var Filho = /** @class */ (function (_super) {
    __extends(Filho, _super);
    function Filho(serieEscolar, brincadeirasFavoritas) {
        var _this = _super.call(this) || this;
        _this.serieEscolar = serieEscolar;
        _this.brincadeirasFavoritas = brincadeirasFavoritas;
        return _this;
    }
    return Filho;
}(Pai_1.Pai));
exports.Filho = Filho;
