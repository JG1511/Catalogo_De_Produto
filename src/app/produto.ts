export class Produto {
    id : number;
    nome : string;
    preco : number;
    categoria : string;

    constructor(id : number, nome : string, preco : number, categoria : string){  
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    aplicarDesconto(porcentagem : number) : void{
        this.preco -= (this.preco * porcentagem)/100;
    }
}
