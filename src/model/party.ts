import { GuestDto } from './guest'

export interface PartyDto {
    id?: number,
    event: string,
    description: string,
    date: string,
    accumulated?: number,
    guests?: GuestDto[]
}
