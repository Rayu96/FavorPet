import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.validatorService.emailRegexValidation),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      password2: new FormControl(null, [Validators.required]),
    },
    {
      validators: [
        this.validatorService.equalPasswords('password', 'password2'),
      ],
    }
  );

  //Getter for email validation
  get emailErrorMsg(): string {
    const errors = this.signupForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato de email es incorrecto';
    }
    return '';
  }

  //Getter for password validation
  get passwordErrorMsg(): string {
    const errors = this.signupForm.get('password')?.errors;
    if (errors?.['required']) {
      return 'La contraseña es obligatoria';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe ser de al menos 6 caracteres';
    }
    return '';
  }

  constructor(private validatorService: ValidatorService) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
