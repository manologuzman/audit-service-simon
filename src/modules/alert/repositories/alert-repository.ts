import { Alert } from '../entities/alert.entity';
export interface IAlertRepository {
  create(data: Alert): Promise<Alert>;
}
