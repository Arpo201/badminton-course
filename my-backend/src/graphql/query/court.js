import { CourtTC } from '../../models/court'

export const courts = CourtTC.getResolver('findMany')
export const courtId = CourtTC.getResolver('findById')
export const courtPagination = CourtTC.getResolver('pagination')
