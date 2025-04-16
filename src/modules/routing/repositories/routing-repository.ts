import { Routing } from '../entities/routing.entity';
export interface IRoutingRepository {
  create(data: Routing): Promise<Routing>;
}
