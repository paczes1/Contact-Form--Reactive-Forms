export class ContactRequest {
  name: string;
  surname: string;
  email: string;
  phone: bigint;
  password: string;
  confirmPassword: string;
  pets: 'dog' | 'cat' | 'other';
  address: Address;
  consents: Consents;
}

export class Address {
  city: '';
  street: '';
  building: '';
  flatNo: '';
}

export class Consents {
  newsletter: boolean;
  sms: boolean;
}
