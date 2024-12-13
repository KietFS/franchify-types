export interface ICreateOrderAddressDto {
    address: string;
  province: string;
  district?: string;
  ward?: string;
  shippingFee: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  orderAddress: ICreateOrderAddressDto;
  orderUserInfo: ICreateOrderUserInfoDto;
  isApplyUserSavePoints?: boolean;
  storeId: number;
  status: string;
  }

export interface ISendOtpPayload {
  phoneNumber: string;
}

export interface ISendOtpDto {
    
  }

export interface IVerifyOtpPayload {
  phoneNumber: string;
  otpCode: string;
}

export interface IVerifyOtpDto {
    
  }