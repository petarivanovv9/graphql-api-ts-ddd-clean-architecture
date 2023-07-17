type Mutable<T> = { -readonly [P in keyof T]: T[P] };

type MockMethods<T extends new (...args: any) => T> = {
  [P in keyof T]: T[P] extends (...args: any) => infer _
    ? jest.MockedFunction<T[P]>
    : T[P];
};

type MockInstance<T extends new (...args: any) => any> = InstanceType<T> &
  Mutable<MockMethods<InstanceType<T>>>;

export const mockInstance = <C extends new (...args: any) => any>(c: C) => {
  const result = {} as MockInstance<C>;
  for (const key of Object.getOwnPropertyNames(c.prototype)) {
    result[key] = jest.fn(() => {
      throw new Error(`Not mocked method called: ${c.name}.${key}`);
    });
  }
  return result;
};
