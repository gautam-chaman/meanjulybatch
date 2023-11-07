import { Component,OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

constructor(private myservice:ServiceService, private myrout:ActivatedRoute){

}
  
  


myform=new FormGroup({
  user:new FormControl(),
  email:new FormControl('',[Validators.required,Validators.email]),
  age:new FormControl(),
  mobile:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  address:new FormControl(),
  paddress:new FormControl(),
  pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
  repass:new FormControl('',[Validators.required,Validators.minLength(8)])
})
  registerform(){


this.myservice.insertdata(this.myform.value).subscribe((d)=>{
  alert("are you sure ");

  console.log(d);
})


  }



  get email(){

    return this.myform.get('email');
  }

  
  get mobile(){

    return this.myform.get('mobile');
  }
  
  get password(){

    return this.myform.get('password');
  }
  
  get reepass(){

    return this.myform.get('reepass');
  }

  
  ngOnInit(): void {
    
  }

}
