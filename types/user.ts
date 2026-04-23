interface IHair {
  color: string;
  type: string;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

interface ICompanyAddress {
  address: string;
  city: string;
  stateCode: string;
}

export interface IAddress {
  address: string;
  city: string;
  state: string;
  country: string;
  coordinates: ICoordinates;
}

export interface ICompany {
  name: string;
  department: string;
  title: string;
  address: ICompanyAddress;
}

export interface IBank {
  cardType: string;
  currency: string;
  cardNumber: string;
  cardExpire: string;
}

export interface ICrypto {
  coin: string;
  network: string;
  wallet: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  ip: string;
  role: 'admin' | 'moderator' | 'user';
  university?: string;
  
  hair: IHair;
  address: IAddress;
  company: ICompany;
  bank: IBank;
  crypto: ICrypto;
}

export interface IUserResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
