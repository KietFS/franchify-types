export interface ICreateStoreDto {
    
  }

export interface IGetStoreDto {
    
  }

export interface IStoreDto {
    id: number;
  name: string;
  storeCode: string;
  supportDelivery: boolean;
  supportPickup: boolean;
  openTime: number;
  closeTime: number;
  }

export interface IUpdateStoreDto {
    lng: number;
  }