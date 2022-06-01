import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dev_api } from 'src/api/juanApi';
import { GuestDto } from 'src/model/guest'
@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {

  constructor(private http: HttpClient) { }

  joinGuest(guest: GuestDto) {
    return this.http.post(`${dev_api}/guest/newGuest`, guest)
  }
}
