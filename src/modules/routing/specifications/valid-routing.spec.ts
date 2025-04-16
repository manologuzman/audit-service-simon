export class ValidCacheTTLSpec {
  isSatisfiedBy(ttl: number): boolean {
    return ttl >= 60 && ttl <= 3600; // 1min a 1h
  }
}
