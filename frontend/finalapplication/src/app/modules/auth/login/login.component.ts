import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService} from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private myservice:ServiceService, private myroutes:ActivatedRoute){

  }

  ngOnInit(): void {
    
  }

  loginform=new FormGroup({

email:new FormControl('',[Validators.required,Validators.email]),
pass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])


  })

  loginsubmit(){
    this.myservice.loginuser(this.loginform.value).subscribe((b)=>{
      
      console.log(b);

      if(b.status===480){
        window.location.href="http://localhost:4200/dashboard";
      }
      else{
        alert("wrong password")
      }
    })


  }



  get user(){

    return this.loginform.get('user');
  }


  get pass(){

    return this.loginform.get('password');
  }

}
