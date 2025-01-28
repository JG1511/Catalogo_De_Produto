import { Produto } from "./produto";

export class Catalogo {
    produtos : Produto [] = [];

    adicionarProduto(produto : Produto) : void{
        this.produtos.push(produto);
    }

    removerProduto(id : number) : void{
        this.produtos.splice(id, 1); 
    }
}
