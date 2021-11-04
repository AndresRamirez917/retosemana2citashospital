import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Paciente, PacienteRelations, Visitas} from '../models';
import {VisitasRepository} from './visitas.repository';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.idpaciente,
  PacienteRelations
> {

  public readonly visitas: HasManyRepositoryFactory<Visitas, typeof Paciente.prototype.idpaciente>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VisitasRepository') protected visitasRepositoryGetter: Getter<VisitasRepository>,
  ) {
    super(Paciente, dataSource);
    this.visitas = this.createHasManyRepositoryFactoryFor('visitas', visitasRepositoryGetter,);
    this.registerInclusionResolver('visitas', this.visitas.inclusionResolver);
  }
}
