import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Catalogo } from './catalogo';
import { Produto } from './produto';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputTextModule, FormsModule, InputNumberModule, ButtonModule, TableModule, ConfirmDialogModule,ToastModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  id: number = 0;
  nome: string = '';
  preco: number = 0;
  categoria: string = '';

  percentualDesconto: number = 0;

  produtoSelecionado?: Produto;
  catalogo: Catalogo = new Catalogo();

  constructor(
    private confirmationService: ConfirmationService,
    private messageService : MessageService
  ) {
  }

  onIncluir(): void {
    let produto = new Produto(this.id, this.nome, this.preco, this.categoria);
    this.catalogo.adicionarProduto(produto);
    this.id = 0;
    this.nome = '';
    this.preco = 0;
    this.categoria = '';
  }

  deleteProduct(produto: Produto) {
    this.confirmationService.confirm({
      message: 'Você tem certeza em deletar o ' + produto.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.catalogo.removerProduto(produto.id)
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000
        });
      }
    });
  }
}
