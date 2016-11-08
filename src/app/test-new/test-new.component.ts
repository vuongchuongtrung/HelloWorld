import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-new',
  templateUrl: './test-new.component.html',
  styleUrls: ['./test-new.component.css']
})
export class TestNewComponent implements OnInit {

  message: string // new property message

  constructor() {
    this.message = "New Component \"test-new\""; // Set the message value
   }

  ngOnInit() {
  }

}
