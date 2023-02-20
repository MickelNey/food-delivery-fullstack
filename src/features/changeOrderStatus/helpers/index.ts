import {EStatuses} from "entities/Order";

export const returnStatuses = (): EStatuses[] => {
  return [
    EStatuses.PENDING,
    EStatuses.PROGRESS,
    EStatuses.COMPLETED,
    EStatuses.CANCEL,
    EStatuses.ERROR
  ]
}
