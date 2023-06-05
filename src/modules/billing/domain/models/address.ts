interface AddressValueObjectProps {
  [index: string]: any;
}

interface AddressProps {
  country: string;
  address: string;
  city: string;
  zip: string;
}

//
// Address Value Object
//
export class Address {
  public readonly props;

  constructor(props: AddressValueObjectProps) {
    this.props = Object.freeze(props);
  }

  public equals(_?: AddressValueObjectProps): boolean {
    //
    // check whether to Addresses (value objects)
    // have the same structure
    //
    return false;
  }

  get country() {
    return this.props.country;
  }

  get address() {
    return this.props.address;
  }

  get address2() {
    return this.props.address2;
  }

  get city() {
    return this.props.city;
  }

  get state() {
    return this.props.state;
  }

  get stateName() {
    return this.props.stateName;
  }

  get zip() {
    return this.props.zip;
  }

  public static create(props: AddressProps) {
    return new Address(props);
  }
}
