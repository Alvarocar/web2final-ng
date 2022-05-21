import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PartyDto } from 'src/model/party';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  constructor() { }

  @Output() onSubmit = new EventEmitter<PartyDto>();

  ngOnInit(): void {
  }

}
