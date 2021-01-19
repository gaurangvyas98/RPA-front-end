import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../request';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  businessFunctionsArray: Array<string>;
  regionArray: Array<string>;
  selectedBusiness: string;
  selectedRegion: string;

  request:Request = new Request();

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    this.businessFunctionsArray = ['commercial', 'finance', 'services', 'supply chain', 'human resources'];
    this.regionArray=['India', 'Japan', 'Australia', 'France', 'USA', 'Global']
  }

  onSubmit(){
    if(this.stepsValue.length === this.totalSteps){
      this.request.stepsValue = this.stepsValue;
    }
    // this.request.businessFunction=this.selectBusinessOption
    console.log("Sent data",this.request);
    // this.requestService.createNewRequest(this.request).subscribe(data => {
    //   console.log("Received data", data);
    // },error => console.log(error))
    // this.router.navigate([''])
    // modal.close();
  }

  selectBusinessOption(id: string) {
    //getted from event
    // console.log(id);
    this.request.businessFunction=id;
    // this.selectedBusiness=id;
    //getted from binding
    // console.log(this.selectedBusiness)
  }
  selectRegionOption(region: string){
    this.request.region = region;
  }
  totalNumberOfstepsArray = [];
  totalSteps = 0;
  
  onAddSteps(stepsInput) {
    console.log(stepsInput.value);
    this.totalNumberOfstepsArray=[];
    for (let i=1;i<=stepsInput.value;i++) {
      this.totalNumberOfstepsArray.push(i);
    }
    console.log(this.totalNumberOfstepsArray);
    this.totalSteps=stepsInput;
  }
  stepsValue = [];
  confirmSteps(){
    
  }

  // onKey(event: any, step: number) { 
  //   this.stepsValue.push(event.target.value);
  //   console.log(step);
  //   console.log(this.stepsValue);
  // }
}


















 // items: any[] = [
  //   { id: 1, name: 'one' },
  //   { id: 2, name: 'two' },
  //   { id: 3, name: 'three' },
  //   { id: 4, name: 'four' },
  //   { id: 5, name: 'five' },
  //   { id: 6, name: 'six' }
  // ];
  // selected: number = 1;

  // selectedOption: string;
  // printedOption: string;

  // options = [
  //   { name: "option1", value: 1 },
  //   { name: "option2", value: 2 }
  // ]
  // print() {
  //   this.printedOption = this.selectedOption;
  // }


  //  selectOption(id: number) {
  //   //getted from event
  //   console.log(id);
  //   this.selected=id;
  //   //getted from binding
  //   console.log(this.selected)
  // }

