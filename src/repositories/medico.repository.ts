import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Medico, MedicoRelations, Visitas} from '../models';
import {VisitasRepository} from './visitas.repository';

export class MedicoRepository extends DefaultCrudRepository<
  Medico,
  typeof Medico.prototype.idmedico,
  MedicoRelations
> {

  public readonly visitas: HasManyRepositoryFactory<Visitas, typeof Medico.prototype.idmedico>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VisitasRepository') protected visitasRepositoryGetter: Getter<VisitasRepository>,
  ) {
    super(Medico, dataSource);
    this.visitas = this.createHasManyRepositoryFactoryFor('visitas', visitasRepositoryGetter,);
    this.registerInclusionResolver('visitas', this.visitas.inclusionResolver);
  }
}
