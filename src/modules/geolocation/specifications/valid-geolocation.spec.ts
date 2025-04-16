import { CreateGeolocationDto } from '../dto/create-geolocation.dto';

export class ValidGeolocationSpecification {
  isSatisfiedBy(geo: CreateGeolocationDto): boolean {
    return (
      typeof geo.deviceId === 'string' &&
      geo.deviceId.trim() !== '' &&
      typeof geo.lat === 'number' &&
      typeof geo.lng === 'number'
    );
  }
}
