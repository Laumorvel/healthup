import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';
import { emailValidatorService } from '../services/emailValidator.service';
import { UsernameValidatorService } from '../services/username-validator.service';
import { User } from '../interfaces/interfaces';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: emailValidatorService,
    private usernameValidator: UsernameValidatorService,
    private authService: AuthServiceService
  ) {}

  miFormulario: FormGroup = this.fb.group(
    {
      name: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorService.namePattern),
        ],
      ],
      surname: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorService.namePattern),
        ],
      ],
      email: [
        ,
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],//servicio email
      ],
      username: [, [Validators.required, Validators.min(0),//funcionaría con la api? Comprueba letra a letra, con lo que da error si coincide una letra
      ],
      [this.usernameValidator]
    ],//incluir request para comprobar que no haya otro igual. Servicio nuevo
      password: [, [Validators.required, Validators.min(6)]],
      password2: [, [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2')
      ]
    }
  );


  //mensajes para el error del nombre
    get nameError(): string{
      const errors = this.miFormulario.get('name')?.errors!;
      if(errors['required']){
        return 'Name required';
      }else if(errors['pattern']){
        return 'Numbers are not allowed';
      }
      return '';
    }

    //mensajes para el error del nombre
    get surnameError(): string{
      const errors = this.miFormulario.get('surname')?.errors!;
      if(errors['required']){
        return 'Surname required';
      }else if(errors['pattern']){
        return 'Numbers are not allowed';
      }
      return '';
    }


  //Mensajes para el error del email
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors!;
    if (errors['required']) {
      return 'Email required';
    } else if (errors['pattern']) {
      return 'An email was expected';
    } else if (errors['emailIndicado']) {
      return 'This email is already in use';
    }
    return '';
  }

  //Mensajes para el username
  get usernameError(): string{
    const errors = this.miFormulario.get('username')?.errors!;
    if(errors['required']){
      return 'User required';
    }else if(errors['usernameCogido']){
      return 'This username is already in use';
    }
    return '';
  }


  ngOnInit(): void {
    this.miFormulario.reset({
      name: '',
      surname: '',
      email: '',
      username: '',
      password: '',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    let user:User = this.miFormulario.value;

    this.authService.register(user).subscribe();

    this.miFormulario.reset({
      name: '',
      surname: '',
      email: '',
      username: '',
      password: '',
    });
    //this.miFormulario.markAllAsTouched();

  }
}
