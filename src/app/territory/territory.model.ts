export interface Territory {
  code: string;
  name: string;
  parentCode: string;
  parentName: string;
  type?: TerritoryType;
}

export enum TerritoryType {
  Departamento,
  Provincia,
  Distrito,
}
