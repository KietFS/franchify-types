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
  page?: number;
  pageSize?: number;
}

export interface IUserSerializer {
  id: number;
  username: string;
  email: string;
}

export interface ICommentSerializer {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface ICreateCategoryDto {
  name: string;
}

export interface IUpdateCategoryDto {
  name: string;
}

export interface IGetCategoryDto {
  name?: string;
  page?: number;
  pageSize?: number;
}

export interface IGetStoreProductDto {
  storeId: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
  category?: number;
}

export interface IGetTenentProductDto {
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}

export interface ISearchProductDto {
  keyword: string;
}

export interface IGetProductDetailDto {
  storeId: number;
  upc?: string;
}

export interface ILinkProductDto {}

export interface ICreateOrderAddressDto {
  address: string;
  province: string;
  district?: string;
  ward?: string;
  shippingFee: number;
}

export interface ICreateOrderUserInfoDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface ICreateOrderDto {}

export interface IUpdateOrderStatusDto {
  status: string;
}

export interface ICreateProductDto {
  upc: string;
  name: string;
  price: IProductPriceDto;
}

export interface IUpdateProductDto {
  upc: string;
  name: string;
}

export interface IUpdateStoreProductDto {
  price: IProductPriceDto;
  inventory: number;
}

export interface IBulkProductDto {}

export interface ISendOtpPayload {
  phoneNumber: string;
}

export interface ISendOtpDto {}

export interface IVerifyOtpPayload {
  phoneNumber: string;
  otpCode: string;
}

export interface IVerifyOtpDto {}
