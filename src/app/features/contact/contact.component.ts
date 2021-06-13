import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  closeResult: string;

  public lat = 51.678418;
  public lng = 7.809007;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
