import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Visitas, VisitasRelations, Paciente, Medico} from '../models';
import {PacienteRepository} from './paciente.repository';
import {MedicoRepository} from './medico.repository';

export class VisitasRepository extends DefaultCrudRepository<
  Visitas,
  typeof Visitas.prototype.idvisita,
  VisitasRelations
> {

  public readonly paciente: BelongsToAccessor<Paciente, typeof Visitas.prototype.idvisita>;

  public readonly medico: BelongsToAccessor<Medico, typeof Visitas.prototype.idvisita>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('PacienteRepository') protected pacienteRepositoryGetter: Getter<PacienteRepository>, @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>,
  ) {
    super(Visitas, dataSource);
    this.medico = this.createBelongsToAccessorFor('medico', medicoRepositoryGetter,);
    this.registerInclusionResolver('medico', this.medico.inclusionResolver);
    this.paciente = this.createBelongsToAccessorFor('paciente', pacienteRepositoryGetter,);
    this.registerInclusionResolver('paciente', this.paciente.inclusionResolver);
  }
}
