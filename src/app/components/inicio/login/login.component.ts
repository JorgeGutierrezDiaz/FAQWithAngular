import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup,  Validators} from '@angular/forms';
import { Usuario } from '../../../models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  validaciones = this.fb.group({
    usuario: ['', Validators.required],
    contraseña: ['', Validators.required]
    
  })

  constructor(private fb:  FormBuilder) {


   }

  ngOnInit(): void {
  }


  login(){
    const usuario: Usuario = {
      nombreUsuario: this.validaciones.value.usuario,
      password: this.validaciones.value.contraseña

    }

    console.log(usuario)

  }
}
