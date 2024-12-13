export interface IBid {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  priceStart: number;
  stepBid: number;
  priceWin: number;
  reservePrice: number;
  category: ICategory;
}

export interface ICartDetail {
  id: number;
  cart: ICart;
  product: IProduct;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICart {
  id: number;
  user: IUser;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  cartDetails: ICartDetail[];
}

export interface ICategoryProperty {
  displayName: string;
  name: string;
  type: CategoryPropertyType;
  options?: Array<string>;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  properties: IICategoryProperty[];
  products: IProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  id: number;
  content: string;
  productId: number;
  product: IProduct;
  parentComment: IComment;
  replies: IComment[];
  user: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface IFeedback {
  id: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface INotificationToken {
  id: number;
  user: IUser;
  device_type: string;
  notification_token: string;
}

export interface INotifications {
  id: number;
  notification_token: INotificationToken;
  title: string;
  body: Iany;
  created_by: string;
}

export interface IOrderDetail {
  id: number;
  order: IOrder;
  product: IProduct;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface IOrderAddress {
  address: string;
  province: string;
  district?: string;
  ward?: string;
  shippingFee: number;
}

export interface IOrderUserInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface IOrder {
  id: number;
  user: IUser;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderAddress: IIOrderAddress;
  orderUserInfo: IIOrderUserInfo;
  store: IStore;
  isApplyUserSavePoints: boolean;
  totalAmount: number;
}

export interface IProductPrice {
  price: number;
  displayPrice: string;
  salePrice?: number;
  displaySalePrice?: string;
}

export interface IProduct {
  id: number;
  upc: string;
  name: string;
  price: IIProductPrice;
  isOnSale: boolean;
  fullDescription: string;
  shortDescription: string;
  nutritionInformations: string;
  category: ICategory;
  images: string[];
  thumbnail: string;
  isAvailable: boolean;
  buyCount: number;
  storeProducts: IStoreProduct[];
  comments: IComment[];
  createdAt: string;
  updatedAt: string;
  orderDetails: IOrderDetail[];
}

export interface ISettings {
  id: number;
  name: string;
  homePage: IIHomePageConfig;
  headerConfigs: IIHeaderConfig;
  footerConfigs: IIFooterConfig;
}

export interface IStoreProduct {
  id: number;
  product: IProduct;
  store: IStore;
  price: IIProductPrice;
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

export interface ITenantSettings {
  carouselImages?: string[];
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

export interface IUserDevice {
  id: number;
  deviceToken: string;
  user: IUser;
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
  createdAt: string;
  updatedAt: string;
  devices: IUserDevice[];
  store: IStore;
  comments: IComment[];
  orders: IOrder[];
}
