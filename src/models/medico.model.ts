import {Entity, model, property, hasMany} from '@loopback/repository';
import {Visitas} from './visitas.model';

@model()
export class Medico extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idmedico?: string;

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
  especialidad: string;

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

  @hasMany(() => Visitas)
  visitas: Visitas[];

  constructor(data?: Partial<Medico>) {
    super(data);
  }
}

export interface MedicoRelations {
  // describe navigational properties here
}

export type MedicoWithRelations = Medico & MedicoRelations;
