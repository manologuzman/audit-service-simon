export class Routing {
  constructor(
    public deviceId: string,
    public origin: { lat: number; lng: number },
    public destination: { lat: number; lng: number },
    public route: { lat: number; lng: number }[],
    public status: 'success' | 'error',
    public cacheTTL: number,
    public timestamp: Date = new Date(),
  ) {}
}
