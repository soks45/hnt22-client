export enum Country {
  Russia = 'russia',
  Unknown = 'unknown',
  Import = 'import'
}

export enum FuelType {
  Diesel = 'diesel',
  Unknown = 'unknown',
  Petrol = 'petrol'
}

export enum OwnershipType {
  Contract = 'contract',
  Rent = 'rent',
  Leasing = 'leasing',
  Unknown = 'unknown'
}
export interface Vehicle {
  organization: string;
  vehicleNumber: string;
  model: string;
  code: string;
  vehicleType: string;
  serviceType: string;
  vehicleTypeExt: string;
  vehicleChars: string;
  country: Country;
  fuelType: FuelType;
  subOrganization: boolean;
  ownershipType: OwnershipType
  vehicleId: number;
  date: Date;
  status: boolean;
}
