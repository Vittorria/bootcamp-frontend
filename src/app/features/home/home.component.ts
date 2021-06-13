import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ServiceService} from '../../service.service';
import { ViewChild, ElementRef} from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  closeResult: string;

  public errorMessage: string;


  public model: any = {
    name: '',
    email: '',
    gender: '',
    bl_time_mng: false,
    bl_english: false,
    bl_leadership: false,
    comment: '',
    bl_accept_privacy_terms: false,
    bl_accept_email_offers: false,
  };

  public a_model: any = {
    name: '',
    email: '',
    gender: '',
    bl_time_mng: false,
    bl_english: false,
    bl_leadership: false,
    comment: '',
    bl_accept_privacy_terms: false,
    bl_accept_email_offers: false,
  };

  @ViewChild('closeModal') private closeModal: ElementRef;

  private modalReference: NgbModalRef;

   static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  constructor(private modalService: NgbModal,
              public srv: ServiceService) {}

  public ngOnInit(): void {
  }

  public open(content, type) {
    this.modalReference = this.modalService.open(content, { windowClass: 'mod-class' });
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${HomeComponent.getDismissReason(reason)}`;
    });
  }

  public onSubmitModal(): void {
     if (this.onCheckValidBeforeSubmit()) {
       const bodyParams: any = this.model;
       this.srv.postNewVolunteer(bodyParams).subscribe((data: any) => {
         this.onCloseModal();
       }, (e) => {
         console.log('ERROR:', e);
       });
     }
  }

  public onCloseModal(): void {
    this.modalReference.close();
    this.errorMessage = '';
    this.model = _.cloneDeep(this.a_model);

  }

  private onCheckValidBeforeSubmit(): boolean {
     let result = true;
     if (!this.model.name || !this.model.email) {
       this.errorMessage = 'Please fill in all mandatory fields';
       result = false;

     } else if (!!this.model.name  && (this.model.name.length < 5)) {
       this.errorMessage = 'Name must be at least 5 characters long';
       result = false;

     } else if (!!this.model.name  && (this.model.name.length > 25)) {
       this.errorMessage = 'Name cannot be more than 25 characters long';
       result = false;

     } else if (!!this.model.name && !!this.model.email && !this.validateEmail(this.model.email)) {
       this.errorMessage = 'Enter a valid email';
       result = false;

     } else if (!this.model.bl_accept_privacy_terms) {
       this.errorMessage = 'You must accept terms and conditions';
       result = false;

     }
     return result;
  }


  private validateEmail(email): boolean {
    const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!email.match(regularExpression);
  }

}
