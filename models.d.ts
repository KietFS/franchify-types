export interface IBid {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  priceStart: number;
  stepBid: number;
  priceWin: number;
  reservePrice: number;
  category: ICategory;
}
export interface ICart {
  id: number;
  user: IUser;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  cartDetails: ICartDetail[];
}
export interface ICartDetail {
  id: number;
  cart: ICart;
  product: IProduct;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
export enum ICategoryPropertyType {
  number = number,
  boolean = boolean,
  text = string,
}
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  properties: ICategoryProperty[];
  products: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}
export interface ICategoryProperty {
  displayName: string;
  name: string;
  type: ICategoryPropertyType;
  options: string[];
}
export interface IComment {
  id: number;
  content: string;
  productId: number;
  product: IProduct;
  parentComment: IComment;
  replies: IComment[];
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}
export interface IFeedback {
  id: number;
  rating: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface INotification {
  id: number;
  notification_token: INotificationToken;
  title: string;
  body: any;
  created_by: string;
  status: string;
}
export interface INotificationToken {
  id: number;
  user: IUser;
  device_type: string;
  notification_token: string;
  status: string;
}
export interface IOrderDetail {
  id: number;
  order: IOrder;
  product: IProduct;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum PaymentMethod {
  COD = "COD",
  MOMO = "MOMO",
  VNPAY = "VNPAY",
}
export enum IOrderStatus {
  PENDING = pending,
  RECEIVED = received,
  PROCESSING = processing,
  SHIPPING = shipping,
  DELIVERED = delivered,
  CANCELLED = cancelled,
}
export interface IOrder {
  id: number;
  user: IUser;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  orderAddress: IOrderAddress;
  orderUserInfo: IOrderUserInfo;
  store: IStore;
  orderDetails: IOrderDetail[];
  totalAmount: number;
}
export interface IOrderAddress {
  address: string;
  province: string;
  district: string;
  ward: string;
  shippingFee: number;
}
export interface IOrderUserInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
export interface IProduct {
  id: number;
  upc: string;
  name: string;
  price: IProductPrice;
  isOnSale: boolean;
  fullDescription: string;
  shortDescription: string;
  nutritionInformations: string;
  category: ICategory;
  properties: { [key: string]: string | number | boolean };
  images: string[];
  thumbnail: string;
  isAvailable: boolean;
  buyCount: number;
  storeProducts: IStoreProduct[];
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
  orderDetails: IOrderDetail[];
}
export interface IProductPrice {
  price: number;
  displayPrice: string;
  salePrice: number;
  displaySalePrice: string;
}
export interface ISettings {
  id: number;
  name: string;
  homePage: IHomePageConfig;
  headerConfigs: IHeaderConfig;
  footerConfigs: IFooterConfig;
}
export interface IHeaderConfig {}
export interface IFooterConfig {}
export interface IHomePageConfig {
  slideshow: string[];
}
export interface IStoreProduct {
  id: number;
  product: IProduct;
  store: IStore;
  price: IProductPrice;
  inventory: number;
}
export interface IStore {
  id: number;
  name: string;
  storeCode: number;
  supportDelivery: boolean;
  supportPickup: boolean;
  openTime: number;
  closeTime: number;
  lng: number;
  storeProducts: IStoreProduct[];
  staffs: IUser[];
  orders: IStore[];
}
export interface ITenant {
  id: number;
  name: string;
  fullDescription: string;
  slogan: string;
  email: string;
  companyPhoneNumber: string;
  companyLegalName: string;
  logoUrl: string;
  primaryColorScheme: string;
}
export interface ITenantSettings {
  carouselImages: string[];
}
export interface IUserDevice {
  id: number;
  deviceToken: string;
  user: IUser;
}
export enum IUserRole {
  USER = user,
  STAFF = staff,
  MANAGER = manager,
  ADMIN = admin,
}
export interface IUser {
  id: number;
  username: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  savePoints: number;
  email: string;
  password: string;
  isActive: boolean;
  cart: ICart;
  isVerified: boolean;
  role: IUserRole;
  createdAt: Date;
  updatedAt: Date;
  devices: IUserDevice[];
  store: IStore;
  comments: IComment[];
  orders: IOrder[];
}
