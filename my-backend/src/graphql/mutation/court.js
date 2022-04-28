import { CourtTC } from '../../models/court'

export const createCourt = CourtTC.getResolver('createOne')
export const updateCourtId = CourtTC.getResolver('updateById')
export const deleteCourtId = CourtTC.getResolver('removeById')
