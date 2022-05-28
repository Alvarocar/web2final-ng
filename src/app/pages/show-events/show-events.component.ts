import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from 'src/app/shared/form/services/party-service.service';
import { PartyDto } from 'src/model/party';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {

  constructor(partyService: PartyServiceService) { }

  testEvent: PartyDto

  listEvents: PartyDto[]

  ngOnInit(): void {
    this.testEvent = {
      date: '12-02-2000',
      description: 'lorem lorem lorem lorem lorem lorem',
      event: 'TEST TITLE',
      accumulated: 200,
      id: 1,
    }
  }



}
