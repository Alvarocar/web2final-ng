import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyServiceService } from 'src/app/shared/form/services/party-service.service';
import { GuestDto } from 'src/model/guest';
import { PartyDto } from 'src/model/party';

interface PartywithGuest extends PartyDto {
  guestDtos: GuestDto[]
}

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private party: PartyServiceService) { }

  partyDetail: PartywithGuest


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.party.getPartyById(Number(id))
    .subscribe(newParty => {
      this.partyDetail = newParty
    })
  }

  get guestForm() {
    const id = this.route.snapshot.paramMap.get('id')
    return `/join-party/${id}`
  }
}
