import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  requests:Request[];
  closeResult: string;

  constructor(
    private requestService:RequestService, 
    private router: Router, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.requestService.getAllRequest().subscribe(data => {
        this.requests = data;
        console.log(data);
      }, error => console.log(error))
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    },);
  }
  
  
  // viewRequest(id: number){
  //   console.log(id);
  //   this.router.navigate(['/viewRequest'])
  // }

  // routeToForm(){
  //   this.router.navigate(['/form'])
  // }


  // private getDismissReason(reason: any): string {
    //   if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    //   } else {
    //     return  `with: ${reason}`;
    //   }
    // }

}
