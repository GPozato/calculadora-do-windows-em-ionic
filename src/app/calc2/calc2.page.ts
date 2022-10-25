import { IMemoria } from './../models/IMemoria.model';
import { Component, OnInit } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MemoriaModalPage } from '../utils/memoria-modal/memoria-modal.page';

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.page.html',
  styleUrls: ['./calc2.page.scss'],
})
export class Calc2Page implements OnInit {
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];

  memoria: IMemoria[] = [];

  constructor(private alertController: AlertController, private modalCtrl: ModalController) {}

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async openModal(){
    const modal = await this.modalCtrl.create({
      component: MemoriaModalPage,
      componentProps:{
        memoria: this.memoria,
      },
    });
    modal.present();
  }

  ngOnInit() {}

  clearMemoria(){
    this.memoria = [];
  }

  exibirResultadoMemoria(){
    const memoria = this.memoria[this.memoria.length -1];
    this.operacao = memoria.operacao;
    this.resultado = memoria.resultado.toString();

    console.log('Memória: ', this.memoria)
  }

  somarNaMemoria(){
    if (this.operacao != ''){
    this.calcularOperacao();  
    const memoria = this.memoria[this.memoria.length -1];
    const novaMemoria: IMemoria = {
       operacao: `${this.resultado} + ${memoria.resultado}`,
       resultado: Number(this.resultado) + memoria.resultado,
     };
     this.memoria.push(novaMemoria);
     console.log('Adicionou: ', this.memoria);
    }
  }

  subtrairNaMemoria(){
    if (this.operacao != ''){
    this.calcularOperacao();  
    const memoria = this.memoria[this.memoria.length -1];
    const novaMemoria: IMemoria = {
       operacao: `${this.resultado} - ${memoria.resultado}`,
       resultado: Number(this.resultado) - memoria.resultado,
     };
     this.memoria.push(novaMemoria);
     console.log('subtraiu: ', this.memoria);
    }
  }

  adicionarMemoria() {
    if (this.operacao != '' && this.resultado != '') {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
    } else if (this.operacao != '' && this.resultado == '') {
      this.calcularOperacao();

      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
    } else {
      // Alerta do Ionic
      this.presentAlert('Aviso!', 'Nada para salvar!');
    }

    console.log(this.memoria);
  }

  calcularOperacao() {
    try {
      this.resultado = evaluate(this.operacao);
    } catch (err) {
      this.resultado = 'Inválido!';
    }
  }

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor);

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparMemoria() {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparOperacao() {
    this.operacao = '';
    this.numero = false;
  }

  inverterValor() {
    // Alterna o numero entre positivo e negativo
  }

  apagarCaracter() {
    if (this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false;
    }
  }
}
