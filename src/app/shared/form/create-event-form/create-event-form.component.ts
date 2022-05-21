import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent implements OnInit {

  constructor() { }

  public partyForm = new FormGroup({
    event: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
  }) 

  ngOnInit(): void {
  }

}
