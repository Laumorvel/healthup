import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';
import { Mensaje } from '../interfaces/interfaces';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private authService: AuthServiceService) {}

    correcto: boolean = false;

  ngOnInit(): void {
    this.miFormulario.reset({
      name: '',
      email: '',
      mssg: '',
      phone: '',
      companyName: ''
    });
  }

  miFormulario: FormGroup = this.fb.group({
    name: [
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
      ]
    ],
    mssg: [
      ,
      [
        Validators.required
      ]
    ],
    phone:[],
    companyName:[]
    });


    //SUBMIT
    submitFormulario(){
      let mensaje: Mensaje = this.miFormulario.value;

      this.authService.newMensaje(mensaje).subscribe({
        next: resp => {
          Swal.fire('Success', 'Your message was successfully sent', 'success');
        },
        error: err => {
          Swal.fire('Error', err.error.message, 'error');
        }
      })
      this.miFormulario.reset();
    }

    campoNoValido(campo: string){
      return (
        this.miFormulario.get(campo)?.invalid &&
        this.miFormulario.get(campo)?.touched
      );
    }

    //Mensaje de error genérico
    get error(): string{
      const errors = this.miFormulario.get('name')?.errors!
      if(errors['required']){
        return 'Field required';
      }
      return '';
    }

    get mssgError(): string{
      const errors = this.miFormulario.get('mssg')?.errors!
      if(errors['required']){
        return 'Field required';
      }
      return '';
    }


    get emailError(): string{
      const errors = this.miFormulario.get('email')?.errors!
      if(errors['required']){
        return 'Field required';
      }else if (errors['pattern']) {
        return 'An email was expected';
      }
      return '';
    }



}
