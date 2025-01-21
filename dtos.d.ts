export interface IAddProductToCartDto {
  cartId: number;
  productId: number;
  quantity: number;
}
export interface IChangeQuantityDto {
  quantity: number;
  cartDetailId: number;
}
export interface ICreateProductCommentDto {
  productId: number;
  content: string;
  parentComment: number;
}
export interface IGetProductCommentsDto {
  productId: number;
  page: number;
  pageSize: number;
}
export interface IUserSerializer {
  id: number;
  username: string;
  email: string;
}
export interface ICommentSerializer {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  replies: ICommentSerializer[];
  parentComment: ICommentSerializer;
  parentId: number;
  user: IUserSerializer;
}
export interface IParentCommmentSerializer {
  id: number;
}
export interface IProductCommentSerializer {
  content: string;
  createdAt: Date;
  updatedAt: Date;
  replies: ICommentSerializer[];
  parentComment: IParentCommmentSerializer;
  id: number;
  user: IUserSerializer;
}
export enum ICategoryPropertyType {
  number = number,
  boolean = boolean,
  string = string,
}
export interface ICategoryPropertyDto {
  name: string;
  displayName: string;
  type: ICategoryPropertyType;
  options: string[];
}
export interface ICreateCategoryDto {
  name: string;
  properties: ICategoryPropertyDto[];
}
export interface IUpdateCategoryDto {
  name: string;
  properties: ICategoryPropertyDto[];
}
export interface ICreateStoreDto {
  name: string;
  supportPickup: boolean;
  supportDelivery: boolean;
  openTime: number;
  closeTime: number;
  storeCode: number;
  lng: number;
  lat: number;
}
export interface ICreateUserDto {
  username: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
}
export interface IICreateUserPayloadDto {
  username: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  isVerified: boolean;
}
export interface IForgotPassWordDto {
  phoneNumber: string;
}
export interface IIForgotPasswordPayloadDto {
  phoneNumber: string;
}
export interface IGetCategoryDto {
  name: string;
  page: number;
  pageSize: number;
}
export interface IGetStoreProductDto {
  storeId: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  page: number;
  pageSize: number;
  category: number;
}
export interface IGetTenentProductDto {
  minPrice: number;
  maxPrice: number;
  page: number;
  pageSize: number;
}
export interface ISearchProductDto {
  keyword: string;
}
export interface IGetProductDetailDto {
  storeId: number;
  upc: string;
}
export interface IGetStoreDto {
  name: string;
  page: number;
  pageSize: number;
  currentLng: string;
  currentLat: string;
}
export interface ILinkProductDto {
  productIds: number[];
  storeId: number;
}
export enum IPaymentMethod {
  COD = COD,
  MOMO = MOMO,
  VNPAY = VNPAY,
}
export interface ICreateOrderAddressDto {
  address: string;
  province: string;
  district: string;
  ward: string;
  shippingFee: number;
}
export interface ICreateOrderUserInfoDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
export interface ICreateOrderDto {
  orderAddress: ICreateOrderAddressDto;
  orderUserInfo: ICreateOrderUserInfoDto;
  paymentMethod: IPaymentMethod;
  storeId: number;
}
export interface IUpdateOrderStatusDto {
  status: string;
}
export interface ICreateVNPayUrlDto {
  amount: number;
  orderId: number;
}
export interface IProductPriceDto {
  price: number;
  displayPrice: string;
  salePrice: number;
  displaySalePrice: string;
}
export interface ICreateProductDto {
  upc: string;
  name: string;
  price: IProductPriceDto;
  properties: { [key: string]: string | number | boolean; };
  isOnSale: boolean;
  fullDescription: string;
  shortDescription: string;
  nutritionInformations: string;
  category: number;
  images: string[];
  thumbnail: string;
}
export interface IUpdateProductDto {
  upc: string;
  name: string;
  properties: { [key: string]: string | number | boolean; };
  price: IProductPriceDto;
  isOnSale: boolean;
  fullDescription: string;
  shortDescription: string;
  nutritionInformations: string;
  category: number;
  images: string[];
  thumbnail: string;
  buyCount: number;
}
export interface IUpdateStoreProductDto {
  price: IProductPriceDto;
  inventory: number;
}
export interface IBulkProductDto {
  products: ICreateProductDto[];
}
export interface ISendOtpDto {
  phoneNumber: string;
}
export interface IISendOtpPayloadDto {
  phoneNumber: string;
}
export interface ISignInUserDto {
  phoneNumber: string;
  password: string;
}
export interface IISignInUserPayloadDto {
  phoneNumber: string;
  password: string;
}
export interface IStoreDto {
  id: number;
  name: string;
  storeCode: string;
  supportDelivery: boolean;
  supportPickup: boolean;
  openTime: number;
  closeTime: number;
  lng: number;
  lat: number;
}
export interface IUpdateStoreDto {
  name: string;
  supportPickup: boolean;
  supportDelivery: boolean;
  openTime: number;
  closeTime: number;
  storeCode: number;
  lng: number;
  lat: number;
  staffs: number[];
}
export interface IStoreDto {
  id: number;
  name: string;
}
export interface IUserDto {
  id: number;
  email: string;
  phoneNumber: string;
  username: string;
  savePoints: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  role: string;
  store: IStoreDto;
  accessToken: string;
  refreshToken: string;
  addresses: any[];
}
export interface IVerifyOtpDto {
  phoneNumber: string;
  otpCode: string;
}
export interface IIVerifyOtpPayloadDto {
  phoneNumber: string;
  otpCode: string;
}

























































































