import {
  NG_VALIDATORS,
  Validators,
} from '@angular/forms';
import { Directive } from '@angular/core';
import { CpfCnpjValidator } from './cpf-cnpj.validator';

@Directive({
  selector: '[appCpfValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CpfValidatorDirective, multi: true },
  ],
})
export class CpfValidatorDirective
  extends CpfCnpjValidator
  implements Validators
{
  constructor() {
    super();
  }
}
