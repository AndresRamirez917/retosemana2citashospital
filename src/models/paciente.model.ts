import {Entity, model, property, hasMany} from '@loopback/repository';
import {Visitas} from './visitas.model';

@model()
export class Paciente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idpaciente?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  fechanac: string;

  @property({
    type: 'string',
    required: true,
  })
  ndocumento: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @hasMany(() => Visitas)
  visitas: Visitas[];

  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
