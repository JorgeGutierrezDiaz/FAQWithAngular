import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,  FormControl,  FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;



  constructor(private fb: FormBuilder) { 

    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.minLength(4)] ],
      confirmPassword: ['']
      
    }, {validator: this.checkPassword});

  }

  ngOnInit(): void {
  }

  registrarUsuario(){
    console.log(this.formulario)
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls['contraseña'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : {notSame: true};
  }
}
