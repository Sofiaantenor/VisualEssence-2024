import { Component } from '@angular/core';

@Component({
  selector: 'app-opc-entrar',
  templateUrl: './opc-entrar.component.html',
  styleUrls: ['./opc-entrar.component.css']
})
export class OpcEntrarComponent {
  imagemFundo: string = 'assets/astroLog.png'; // Corrigido o caminho da imagem de fundo

  botaoImagemSrc = 'assets/Brazilian_preview.png'; // Caminho inicial da imagem do botão

  // Método para trocar a imagem do botão
  changeImage() {
    if (this.botaoImagemSrc === 'assets/Brazilian_preview.png') {
      this.botaoImagemSrc = 'assets/EUA_preview.png'; // Trocar para imagem dos EUA
    } else {
      this.botaoImagemSrc = 'assets/Brazilian_preview.png'; // Trocar para imagem do Brasil
    }
  }
}
