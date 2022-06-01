import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PartyServiceService } from '../services/party-service.service';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent implements OnInit {

  constructor(
    private partyService: PartyServiceService,
    private router: Router
    ) { }

  public partyForm = new FormGroup({
    event: new FormControl(''),
    date: new FormControl(''),
    desciption: new FormControl(''),
  })

  submit() {
    const resp = this.partyService.createParty(this.partyForm.getRawValue())
    resp.subscribe( res => {
      this.router.navigate(['show-events'])
    } )
  }

  ngOnInit(): void {
  }

}
