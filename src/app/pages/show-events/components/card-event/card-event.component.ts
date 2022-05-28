import { Component, Input, OnInit } from '@angular/core';
import { PartyDto } from 'src/model/party';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit {

  constructor() { }

  @Input('party-event') partyEvent: PartyDto

  ngOnInit(): void {
  }

}
