interface CardPaymentProfileProps {
  firstName: string;
  lastName: string;
}

//
// CardPaymentProfile Entity
//
export class CardPaymentProfile {
  #id: string;

  #props: CardPaymentProfileProps;

  constructor(props: CardPaymentProfileProps, id: string) {
    this.#id = id;
    this.#props = props;
  }

  get id(): string {
    return this.#id;
  }

  get firstName() {
    return this.#props.firstName;
  }

  set firstName(value: string) {
    this.#props.firstName = value;
  }

  get lastName() {
    return this.#props.lastName;
  }

  set lastName(value: string) {
    this.#props.lastName = value;
  }

  static create(props: CardPaymentProfileProps, id: string) {
    return new CardPaymentProfile(props, id);
  }
}
