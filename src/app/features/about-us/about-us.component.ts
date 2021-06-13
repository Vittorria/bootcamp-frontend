import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  closeResult: string;

  public lat = 51.678418;
  public lng = 7.809007;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
