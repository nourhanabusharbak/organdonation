import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

 
@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.css']
})
export class ServiceCenterComponent implements OnInit {

  lab=0;
    clinic=0;
    doctor=0;
    customer=0;
    
    //Dictionary for Labs to be cont.
labDic={
labname:'',labphone:'',labcity:'',labemail:'', labaddress:'',labdescription:''
}


labList: AngularFireList<any>

constructor(public db:AngularFireDatabase) {
    this.lab=0;
    this.clinic=0;
    this.doctor=0;
    this.customer=0;
    
    
    this.labList= db.list('labs')
    
    }

  ngOnInit() {
  
  console.log("Lab Object",this.labDic);
  }
  
  addNewLab(){
   this.labList.push({
   labname:this.labDic.labname,
   labphone:this.labDic.labphone,
   labcity:this.labDic.labcity,
   labemail:this.labDic.labemail,
   labaddress:this.labDic.labaddress,
   labdescription:this.labDic.labdescription
   })
  }

}
