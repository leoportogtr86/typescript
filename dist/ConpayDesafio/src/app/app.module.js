"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var pt_1 = __importDefault(require("@angular/common/locales/pt"));
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var snack_bar_1 = require("@angular/material/snack-bar");
var toolbar_1 = require("@angular/material/toolbar");
var dialog_1 = require("@angular/material/dialog");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var login_component_1 = require("./components/login/login.component");
var interceptors_1 = require("./interceptors");
var produtos_component_1 = require("./components/produtos/produtos.component");
var produtodetalhes_component_1 = require("./components/produtos/produtodetalhes/produtodetalhes.component");
var areadepagamento_component_1 = require("./components/areadepagamento/areadepagamento/areadepagamento.component");
var modalstatus_component_1 = require("./components/modalstatus/modalstatus.component");
var carrinho_component_1 = require("./components/carrinho/carrinho.component");
common_1.registerLocaleData(pt_1.default, 'pt');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                areadepagamento_component_1.AreadepagamentoComponent,
                login_component_1.LoginComponent,
                produtos_component_1.ProdutosComponent,
                produtodetalhes_component_1.ProdutodetalhesComponent,
                modalstatus_component_1.ModalstatusComponent,
                carrinho_component_1.CarrinhoComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                dialog_1.MatDialogModule,
                icon_1.MatIconModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [
                interceptors_1.httpInterceptorProviders,
                {
                    provide: core_1.LOCALE_ID,
                    useValue: 'pt'
                }
            ],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [modalstatus_component_1.ModalstatusComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
