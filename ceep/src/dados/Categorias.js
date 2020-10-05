export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach(func => func(this.categorias));
  }

  adicionarCategoria(novaCategoria) {
    console.log(this.categorias);
    this.categorias.push(novaCategoria)
  }
}