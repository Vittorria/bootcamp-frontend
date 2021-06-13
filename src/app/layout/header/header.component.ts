import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public volunteers_no: number;


  constructor(public srv: ServiceService) { }

  public ngOnInit(): void {
    this.onLoadVolunteersNo();
    const source = timer(10000, 20000);
    const subscribe = source.subscribe(val => this.onLoadVolunteersNo());
  }
  private onLoadVolunteersNo(): void {
    this.srv.getVolunteersCount().subscribe((data: any) => {
      this.volunteers_no = data.count;
    }, (e) => {
      console.log('ERROR:', e);
    });
  }



}
