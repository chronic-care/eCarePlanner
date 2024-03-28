import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warning-popup', 
    templateUrl: './warning-popup.component.html',
    styleUrls: ['./warning-popup.component.css'],
  })
export class WarningPopupComponent implements OnInit {
  showModal: boolean = true;

  ngOnInit() {
    // Check if the user has seen the modal before
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');

    // If the user hasn't seen the modal, show it
    if (!hasSeenModal) {
      this.showModal = true;
      // Mark the modal as seen for this session
      sessionStorage.setItem('hasSeenModal', 'true');
    }
  }

  closeModal() {
    // Mark the modal as seen for this session
    sessionStorage.setItem('hasSeenModal', 'true');
    this.showModal = false;
  }
}
