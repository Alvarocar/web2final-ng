import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from 'src/app/shared/form/services/party-service.service';
import { PartyDto } from 'src/model/party';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {

  constructor(private partyService: PartyServiceService) { }

  testEvent: PartyDto

  listEvents: PartyDto[]

  ngOnInit(): void {

    this.partyService.getParties()
    .subscribe(parties => {
      this.listEvents = parties as PartyDto[]
    })
  }

  getLink(id?: number) {
    return `/event-details/${id}`
  }

}
