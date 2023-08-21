import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  loginform=new FormGroup({

user:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])


  })

  loginuser(){


  }



  get user(){

    return this.loginform.get('user');
  }


  get password(){

    return this.loginform.get('password');
  }

}
