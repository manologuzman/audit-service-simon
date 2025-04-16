import { Alert } from '../entities/alert.entity';

export class AlertSpecification {
  static isSatisfiedBy(alert: Alert): boolean {
    return (
      !!alert.type && !!alert.message && !!alert.source && !!alert.deviceId
    );
  }
}
