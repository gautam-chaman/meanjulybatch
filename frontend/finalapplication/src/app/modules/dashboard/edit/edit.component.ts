import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private myservice:ServiceService, private myroute:ActivatedRoute){

  }

myform=new FormGroup({

 
  user:new FormControl(),
  email:new FormControl('',[Validators.required]),
  age:new FormControl(),
  mobile:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  address:new FormControl(),
  paddress:new FormControl(),
  pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
  repass:new FormControl('',[Validators.required,Validators.minLength(8)])

})

getd:any
myid:any;
mydata:any;

singleuser():void{
  this.myservice.singleuser(this.myid).subscribe((sd)=>{
    console.log(sd);
    this.mydata=sd;

    this.myform.patchValue({
      user:this.mydata[0].user,
      email:this.mydata[0].email,
      mobile:this.mydata[0].mobile,
      age:this.mydata[0].age,
      address:this.mydata[0].address,
      paddress:this.mydata[0].paddress,
      pass:this.mydata[0].pass,
      repass:this.mydata[0].repass
    })

  })
  
}


  updatedata():void{

   // console.log(this.myform.value);

   this.myservice.updatedata(this.myform.value,this.myid).subscribe((u)=>{
    console.log(u);
    window.location.href="http://localhost:4200/dashboard";

   })

  }



//validator function

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
    this.myid=this.myroute.snapshot.paramMap.get('id');
    this.singleuser();
    
  }

}
