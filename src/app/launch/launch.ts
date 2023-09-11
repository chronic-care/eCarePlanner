import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { authorize } from 'e-care-common-data-services';

@Component({
  selector: 'launch',
  templateUrl: './launch.html',
  styleUrls: ['./launch.css']
})

export class Launch implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }
  async ngAfterViewInit(): Promise<void> {
    await authorize({
      clientId: environment.clientId,
      scope: 'patient/*.read openid launch'
    });
  }
}
