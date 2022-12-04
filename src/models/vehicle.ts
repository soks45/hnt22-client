export enum Country {
  Russia = 'РОССИЯ',
  Unknown = 'Не определено',
  Import = 'ИМПОРТ'
}

export enum FuelType {
  Diesel = 'ДТ',
  Unknown = 'Не определено',
  Petrol = 'БЕНЗИН'
}

export enum OwnershipType {
  Contract = 'договор купли продажи',
  Rent = 'аренда',
  Leasing = 'лизинг',
  Unknown = ''
}
export interface Vehicle {
  organization: string;
  vehicleNumber: string;
  model: string;
  code: string;
  serviceType: string;
  vehicleType: string;
  vehicleTypeExt: string;
  vehicleChars: string;
  country: Country;
  fuelType: FuelType;
  subOrganization: boolean;
  ownershipType?: OwnershipType
  vehicleId: number;
  date: string;
  sma: boolean;
}
