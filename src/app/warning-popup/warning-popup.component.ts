import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-warning-popup',
    templateUrl: './warning-popup.component.html',
    styleUrls: ['./warning-popup.component.css'],
  })
export class WarningPopupComponent implements OnInit {
  showModal: boolean = false;

  ngOnInit() {
    if (environment.hhsWarning === 'true') {
      console.debug('Showing hhsWarning ' + environment.hhsWarning)
      const hasSeenModal = sessionStorage.getItem('hasSeenModal')
      if (!hasSeenModal) {
          this.showModal = true;
      }
    } else {
      console.debug('Not Showing hhsWarning ' + environment.hhsWarning)
      this.showModal = false;
    }
  }


  checkModalStatus() {
    return this.showModal;
  }
  closeModal() {
    // Mark the modal as seen for this session
    sessionStorage.setItem('hasSeenModal', 'true');
    this.showModal = false;
  }
}
