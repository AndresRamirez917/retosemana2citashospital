import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Paciente} from './paciente.model';
import {Medico} from './medico.model';

@model()
export class Visitas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idvisita?: string;

  @property({
    type: 'string',
    required: true,
  })
  fechavisita: string;

  @property({
    type: 'string',
    required: true,
  })
  idpaciente: string;

  @property({
    type: 'string',
    required: true,
  })
  idmedico: string;

  @property({
    type: 'string',
    required: true,
  })
  motivovisita: string;

  @property({
    type: 'string',
    required: true,
  })
  pruenasrealizadas: string;

  @property({
    type: 'string',
    required: true,
  })
  diagnostico: string;

  @belongsTo(() => Paciente)
  pacienteId: string;

  @belongsTo(() => Medico)
  medicoId: string;

  constructor(data?: Partial<Visitas>) {
    super(data);
  }
}

export interface VisitasRelations {
  // describe navigational properties here
}

export type VisitasWithRelations = Visitas & VisitasRelations;
