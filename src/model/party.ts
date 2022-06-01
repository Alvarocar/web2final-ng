import { GuestDto } from './guest'

export interface PartyDto {
    id?: number,
    event: string,
    desciption: string,
    date: string,
    accumulated?: number,
    guests?: GuestDto[]
}
