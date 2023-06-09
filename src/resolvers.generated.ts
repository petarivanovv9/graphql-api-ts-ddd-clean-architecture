import { GraphQLResolveInfo } from 'graphql';
import { UserDto, AccountDto } from './modules/account/api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type GqlAccount = {
  __typename?: 'Account';
  /** Return the card payment profiles associated with the Account. */
  cardPaymentProfiles: Array<GqlCardPaymentProfile>;
  company?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  vatNumber?: Maybe<Scalars['String']['output']>;
};

export type GqlAddress = {
  __typename?: 'Address';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  /**
   * Note:
   * - `country` is string just for the example.
   * - It's better to have a concrete type, ex: `CountryCode` - 2-letter ISO 3166-2 country code
   */
  country: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type GqlCardPaymentProfile = {
  __typename?: 'CardPaymentProfile';
  address?: Maybe<GqlAddress>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type GqlDeleteCardPaymentProfileInput = {
  id: Scalars['ID']['input'];
};

export type GqlDeleteCardPaymentProfilePayload = {
  __typename?: 'DeleteCardPaymentProfilePayload';
  /** Fake field so that we have a payload type for consistency. */
  _noop?: Maybe<Scalars['Boolean']['output']>;
};

export type GqlMutation = {
  __typename?: 'Mutation';
  deleteCardPaymentProfile?: Maybe<GqlDeleteCardPaymentProfilePayload>;
};

export type GqlMutationDeleteCardPaymentProfileArgs = {
  input: GqlDeleteCardPaymentProfileInput;
};

export type GqlQuery = {
  __typename?: 'Query';
  /** Returns the current logged in user. */
  viewer: GqlUser;
};

export type GqlUser = {
  __typename?: 'User';
  account: GqlAccount;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<AccountDto>;
  Address: ResolverTypeWrapper<GqlAddress>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CardPaymentProfile: ResolverTypeWrapper<GqlCardPaymentProfile>;
  DeleteCardPaymentProfileInput: GqlDeleteCardPaymentProfileInput;
  DeleteCardPaymentProfilePayload: ResolverTypeWrapper<GqlDeleteCardPaymentProfilePayload>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<UserDto>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = ResolversObject<{
  Account: AccountDto;
  Address: GqlAddress;
  Boolean: Scalars['Boolean']['output'];
  CardPaymentProfile: GqlCardPaymentProfile;
  DeleteCardPaymentProfileInput: GqlDeleteCardPaymentProfileInput;
  DeleteCardPaymentProfilePayload: GqlDeleteCardPaymentProfilePayload;
  ID: Scalars['ID']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  User: UserDto;
}>;

export type GqlAccountResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['Account'] = GqlResolversParentTypes['Account'],
> = ResolversObject<{
  cardPaymentProfiles?: Resolver<
    Array<GqlResolversTypes['CardPaymentProfile']>,
    ParentType,
    ContextType
  >;
  company?: Resolver<
    Maybe<GqlResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  vatNumber?: Resolver<
    Maybe<GqlResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlAddressResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['Address'] = GqlResolversParentTypes['Address'],
> = ResolversObject<{
  address?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlCardPaymentProfileResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['CardPaymentProfile'] = GqlResolversParentTypes['CardPaymentProfile'],
> = ResolversObject<{
  address?: Resolver<
    Maybe<GqlResolversTypes['Address']>,
    ParentType,
    ContextType
  >;
  firstName?: Resolver<
    Maybe<GqlResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<
    Maybe<GqlResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlDeleteCardPaymentProfilePayloadResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['DeleteCardPaymentProfilePayload'] = GqlResolversParentTypes['DeleteCardPaymentProfilePayload'],
> = ResolversObject<{
  _noop?: Resolver<
    Maybe<GqlResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlMutationResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['Mutation'] = GqlResolversParentTypes['Mutation'],
> = ResolversObject<{
  deleteCardPaymentProfile?: Resolver<
    Maybe<GqlResolversTypes['DeleteCardPaymentProfilePayload']>,
    ParentType,
    ContextType,
    RequireFields<GqlMutationDeleteCardPaymentProfileArgs, 'input'>
  >;
}>;

export type GqlQueryResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query'],
> = ResolversObject<{
  viewer?: Resolver<GqlResolversTypes['User'], ParentType, ContextType>;
}>;

export type GqlUserResolvers<
  ContextType = any,
  ParentType extends GqlResolversParentTypes['User'] = GqlResolversParentTypes['User'],
> = ResolversObject<{
  account?: Resolver<GqlResolversTypes['Account'], ParentType, ContextType>;
  email?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlResolvers<ContextType = any> = ResolversObject<{
  Account?: GqlAccountResolvers<ContextType>;
  Address?: GqlAddressResolvers<ContextType>;
  CardPaymentProfile?: GqlCardPaymentProfileResolvers<ContextType>;
  DeleteCardPaymentProfilePayload?: GqlDeleteCardPaymentProfilePayloadResolvers<ContextType>;
  Mutation?: GqlMutationResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  User?: GqlUserResolvers<ContextType>;
}>;
