import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-join',
  templateUrl: './form-join.component.html',
  styleUrls: ['./form-join.component.scss']
})
export class FormJoinComponent implements OnInit {

  constructor() { }

  public form = new FormGroup({
    name: new FormControl(''),
    gift: new FormControl(0),
  })


  ngOnInit(): void {
  }

}
