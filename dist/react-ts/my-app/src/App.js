"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Title_1 = __importDefault(require("./components/Title"));
function App() {
    return (<div className="App">

      <Title_1.default title="Título do Componente" numero={1}/>
     
    </div>);
}
exports.default = App;
