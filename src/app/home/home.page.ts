import { CpfCnpjValidator } from './../shared/cpf-cnpj.validator';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  registerForm = this.formBuilder.group({
    nome: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    cpf: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(13),
        CpfCnpjValidator.validate,
      ]),
    ],
    senha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
    confirmaSenha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  mensagensValidacao = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 3 caracteres.',
      },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'digit', mensagem: 'CPF Inválido.' },
      { tipo: 'length', mensagem: 'Quantidade de números inválido' },
      { tipo: 'equalDigits', mensagem: 'Digite um CPF válido!' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 6 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'A senha deve ter no máximo 8 caractéres.',
      },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 6 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'A senha deve ter no máximo 8 caractéres.',
      },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' },
    ],
  };

  constructor(private formBuilder: FormBuilder) {}

  get nome() {
    return this.registerForm.get('nome');
  }
  get cpf() {
    return this.registerForm.get('cpf');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get senha() {
    return this.registerForm.get('senha');
  }
  get confirmaSenha() {
    return this.registerForm.get('confirmaSenha');
  }
}
