import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
import { ValidatorService } from 'src/app/services/validator.service';
import Swal from 'sweetalert2';
import { PasswordValidatorService } from '../../services/password-validator.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private passwordValidator: PasswordValidatorService,
    private validatorService: ValidatorService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      name: '',
      surname: '',
      email: '',
      username: '',
      password: '',
      password2: '',
    });
  }

  newPassword: string = '';
  user: User = JSON.parse(<string>localStorage.getItem('user'));

  miFormulario: FormGroup = this.fb.group(
    {
      password: [, [Validators.required], [this.passwordValidator]],
      newPassword: [, [Validators.required, Validators.min(6)]],
      newPassword2: [, [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('newPassword', 'newPassword2'),
      ],
    }
  );

  //Mensaje para la contraseña actual
  get currentPasswordError(): string {
    const errors = this.miFormulario.get('password')?.errors!;
    if (errors['required']) {
      return 'Password required';
    } else if (errors['currentPassword']) {
      return 'The password is incorrect';
    }
    return '';
  }


  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    let newPassword = this.miFormulario.get('newPassword');
    console.log(newPassword);

    this.userService.cambiaContrasena(this.newPassword).subscribe({
      next: (resp) => {
        localStorage.setItem('user', JSON.stringify(resp)); //se actualiza el usuario
      },
      error: (err) => {
        Swal.fire('Error', err.error.message, 'error');
      },
    });

    this.miFormulario.reset({
      name: '',
      surname: '',
      email: '',
      username: '',
      password: '',
    });
  }
}
