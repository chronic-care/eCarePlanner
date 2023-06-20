import { Component, OnInit, AfterViewInit } from '@angular/core';
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
      clientId: '9ff4f5c4-f07c-464f-8d4b-90b90a76bebf',
      scope: 'patient/*.read openid launch'
    });
  }
}
