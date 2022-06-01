import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestServiceService } from '../../services/guest-service.service';

@Component({
  selector: 'app-form-join',
  templateUrl: './form-join.component.html',
  styleUrls: ['./form-join.component.scss']
})
export class FormJoinComponent implements OnInit {

  constructor(private guest: GuestServiceService, private router: Router,
     private route: ActivatedRoute) { }

  public form = new FormGroup({
    name: new FormControl(''),
    gift: new FormControl(0),
  })


  ngOnInit(): void {
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.guest.joinGuest({...this.form.getRawValue(), partyId:id})
    .subscribe(() => {
      this.router.navigate([`event-details/${id}`])
    })
  }
}
