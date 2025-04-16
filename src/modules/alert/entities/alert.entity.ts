export class Alert {
  constructor(
    public readonly type: string,
    public readonly message: string,
    public readonly source: string,
    public readonly deviceId: string,
    public readonly timestamp: Date = new Date(),
  ) {}
}
