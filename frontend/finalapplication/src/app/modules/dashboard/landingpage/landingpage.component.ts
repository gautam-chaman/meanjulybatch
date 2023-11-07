import { Component,OnInit } from '@angular/core';
import { ServiceService} from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{
  myarray:any;
  constructor( private service:ServiceService, private myroute:ActivatedRoute){

  }


  mydatabasedata():void{

    this.service.getmydata().subscribe((d)=>{
      this.myarray=d;
      console.log(this.myarray)
    })
  }



  ngOnInit():void{

    this.mydatabasedata();

  }



// Delete operation is start now 

mydeleterecord(id:any):void{
  this.service.mydelete(id).subscribe(()=>{

    console.log(id);
    alert("data is delete successfully");
    this.mydatabasedata();
  })


}


}
