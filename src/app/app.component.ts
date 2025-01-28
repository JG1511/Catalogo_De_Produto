import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produto } from './produto';
import { Catalogo } from './catalogo';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputTextModule, FormsModule,InputNumberModule, ButtonModule,TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  id : number = 0;
  nome : string = '';
  preco : number = 0;
  categoria : string = '';

  percentualDesconto : number = 0;

  produtoSelecionado ? : Produto;
  catalogo : Catalogo = new Catalogo();

  onIncluir(): void {
    let produto = new Produto(this.id,this.nome,this.preco,this.categoria);
    this.catalogo.adicionarProduto(produto);
    this.id = 0;
    this.nome = '';
    this.preco = 0;
    this.categoria = '';
  }
}
