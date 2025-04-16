export class Geolocation {
  constructor(
    public readonly deviceId: string,
    public readonly lat: number,
    public readonly lng: number,
    public readonly timestamp: Date,
  ) {}
}
