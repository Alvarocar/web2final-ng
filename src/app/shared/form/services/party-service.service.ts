import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartyDto } from 'src/model/party';
import { FormModule } from '../form.module';
import { dev_api } from 'src/api/juanApi';
import { GuestDto } from 'src/model/guest';

interface PartywithGuest extends PartyDto {
  guestDtos: GuestDto[]
}

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {

  constructor(private http: HttpClient) {
  }



  createParty(party: PartyDto) {
    return this.http.post(`${dev_api}/party/newParty`, party)
  }

  getParties() {
    return this.http.get(`${dev_api}/party`)
  }

  getPartyById(id: number){
    return this.http.get<PartywithGuest>(`${dev_api}/party/${id}`)
  }

}
