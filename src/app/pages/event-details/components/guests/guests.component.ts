import { Component, Input, OnInit } from '@angular/core';
import { GuestServiceService } from 'src/app/pages/join-party/services/guest-service.service';
import { GuestDto } from 'src/model/guest';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

  constructor(private guestS: GuestServiceService) { }

  open = false

  @Input('guest-list') list: GuestDto[]

  toggle() {
    this.open = !this.open
  }

  ngOnInit(): void {
  }


}
