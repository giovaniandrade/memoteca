import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  cancelarPensamento() {
    alert('Ação cancelada');
  }

  criarPensamento() {
    alert('Novo pensamento criado');
  }

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

}
