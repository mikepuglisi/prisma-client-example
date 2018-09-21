// Code generated by Prisma (prisma@1.17.0-beta.26). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  picture: (where?: PictureWhereInput) => Promise<boolean>;
  place: (where?: PlaceWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  picture: (where: PictureWhereUniqueInput) => Picture;
  pictures: (
    args?: {
      where?: PictureWhereInput;
      orderBy?: PictureOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<PictureNode>>;
  picturesConnection: (
    args?: {
      where?: PictureWhereInput;
      orderBy?: PictureOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PictureConnection;
  place: (where: PlaceWhereUniqueInput) => Place;
  places: (
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<PlaceNode>>;
  placesConnection: (
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PlaceConnection;
  post: (where: PostWhereUniqueInput) => Post;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<PostNode>>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<UserNode>>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPicture: (data: PictureCreateInput) => Picture;
  updatePicture: (
    args: { data: PictureUpdateInput; where: PictureWhereUniqueInput }
  ) => Picture;
  updateManyPictures: (
    args: { data: PictureUpdateInput; where?: PictureWhereInput }
  ) => BatchPayload;
  upsertPicture: (
    args: {
      where: PictureWhereUniqueInput;
      create: PictureCreateInput;
      update: PictureUpdateInput;
    }
  ) => Picture;
  deletePicture: (where: PictureWhereUniqueInput) => Picture;
  deleteManyPictures: (where?: PictureWhereInput) => BatchPayload;
  createPlace: (data: PlaceCreateInput) => Place;
  updatePlace: (
    args: { data: PlaceUpdateInput; where: PlaceWhereUniqueInput }
  ) => Place;
  updateManyPlaces: (
    args: { data: PlaceUpdateInput; where?: PlaceWhereInput }
  ) => BatchPayload;
  upsertPlace: (
    args: {
      where: PlaceWhereUniqueInput;
      create: PlaceCreateInput;
      update: PlaceUpdateInput;
    }
  ) => Place;
  deletePlace: (where: PlaceWhereUniqueInput) => Place;
  deleteManyPlaces: (where?: PlaceWhereInput) => BatchPayload;
  createPost: (data: PostCreateInput) => Post;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => Post;
  updateManyPosts: (
    args: { data: PostUpdateInput; where?: PostWhereInput }
  ) => BatchPayload;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => Post;
  deletePost: (where: PostWhereUniqueInput) => Post;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  picture: (
    where?: PictureSubscriptionWhereInput
  ) => PictureSubscriptionPayloadSubscription;
  place: (
    where?: PlaceSubscriptionWhereInput
  ) => PlaceSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PlaceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "shortDescription_ASC"
  | "shortDescription_DESC"
  | "description_ASC"
  | "description_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "maxGuests_ASC"
  | "maxGuests_DESC"
  | "numBedrooms_ASC"
  | "numBedrooms_DESC"
  | "numBeds_ASC"
  | "numBeds_DESC"
  | "numBaths_ASC"
  | "numBaths_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PictureOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "url_ASC"
  | "url_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "published_ASC"
  | "published_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  author?: UserWhereInput;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface PictureUpdateWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput;
  data: PictureUpdateDataInput;
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String;
  name?: String;
}

export type PictureWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  update?: UserUpdateWithoutPostsDataInput;
  upsert?: UserUpsertWithoutPostsInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface PictureSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PictureWhereInput;
  AND?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput;
  OR?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput;
  NOT?: PictureSubscriptionWhereInput[] | PictureSubscriptionWhereInput;
}

export interface PostUpdateInput {
  title?: String;
  published?: Boolean;
  author?: UserUpdateOneWithoutPostsInput;
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: String;
  published?: Boolean;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export type PlaceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface PlaceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  shortDescription?: String;
  shortDescription_not?: String;
  shortDescription_in?: String[] | String;
  shortDescription_not_in?: String[] | String;
  shortDescription_lt?: String;
  shortDescription_lte?: String;
  shortDescription_gt?: String;
  shortDescription_gte?: String;
  shortDescription_contains?: String;
  shortDescription_not_contains?: String;
  shortDescription_starts_with?: String;
  shortDescription_not_starts_with?: String;
  shortDescription_ends_with?: String;
  shortDescription_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  maxGuests?: Int;
  maxGuests_not?: Int;
  maxGuests_in?: Int[] | Int;
  maxGuests_not_in?: Int[] | Int;
  maxGuests_lt?: Int;
  maxGuests_lte?: Int;
  maxGuests_gt?: Int;
  maxGuests_gte?: Int;
  numBedrooms?: Int;
  numBedrooms_not?: Int;
  numBedrooms_in?: Int[] | Int;
  numBedrooms_not_in?: Int[] | Int;
  numBedrooms_lt?: Int;
  numBedrooms_lte?: Int;
  numBedrooms_gt?: Int;
  numBedrooms_gte?: Int;
  numBeds?: Int;
  numBeds_not?: Int;
  numBeds_in?: Int[] | Int;
  numBeds_not_in?: Int[] | Int;
  numBeds_lt?: Int;
  numBeds_lte?: Int;
  numBeds_gt?: Int;
  numBeds_gte?: Int;
  numBaths?: Int;
  numBaths_not?: Int;
  numBaths_in?: Int[] | Int;
  numBaths_not_in?: Int[] | Int;
  numBaths_lt?: Int;
  numBaths_lte?: Int;
  numBaths_gt?: Int;
  numBaths_gte?: Int;
  pictures_every?: PictureWhereInput;
  pictures_some?: PictureWhereInput;
  pictures_none?: PictureWhereInput;
  AND?: PlaceWhereInput[] | PlaceWhereInput;
  OR?: PlaceWhereInput[] | PlaceWhereInput;
  NOT?: PlaceWhereInput[] | PlaceWhereInput;
}

export interface UserCreateWithoutPostsInput {
  email?: String;
  name: String;
}

export interface UserUpdateInput {
  email?: String;
  name?: String;
  posts?: PostUpdateManyWithoutAuthorInput;
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface PostCreateInput {
  title: String;
  published?: Boolean;
  author?: UserCreateOneWithoutPostsInput;
}

export interface UserCreateInput {
  email?: String;
  name: String;
  posts?: PostCreateManyWithoutAuthorInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface PictureWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  AND?: PictureWhereInput[] | PictureWhereInput;
  OR?: PictureWhereInput[] | PictureWhereInput;
  NOT?: PictureWhereInput[] | PictureWhereInput;
}

export interface PictureCreateInput {
  url: String;
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface PictureUpdateInput {
  url?: String;
}

export interface PlaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PlaceWhereInput;
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
}

export interface PictureUpsertWithWhereUniqueNestedInput {
  where: PictureWhereUniqueInput;
  update: PictureUpdateDataInput;
  create: PictureCreateInput;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PictureUpdateDataInput {
  url?: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface PictureUpdateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput;
  delete?: PictureWhereUniqueInput[] | PictureWhereUniqueInput;
  connect?: PictureWhereUniqueInput[] | PictureWhereUniqueInput;
  disconnect?: PictureWhereUniqueInput[] | PictureWhereUniqueInput;
  update?:
    | PictureUpdateWithWhereUniqueNestedInput[]
    | PictureUpdateWithWhereUniqueNestedInput;
  upsert?:
    | PictureUpsertWithWhereUniqueNestedInput[]
    | PictureUpsertWithWhereUniqueNestedInput;
}

export interface PlaceUpdateInput {
  name?: String;
  shortDescription?: String;
  description?: String;
  slug?: String;
  maxGuests?: Int;
  numBedrooms?: Int;
  numBeds?: Int;
  numBaths?: Int;
  pictures?: PictureUpdateManyInput;
}

export interface PictureCreateManyInput {
  create?: PictureCreateInput[] | PictureCreateInput;
  connect?: PictureWhereUniqueInput[] | PictureWhereUniqueInput;
}

export interface PlaceCreateInput {
  name?: String;
  shortDescription: String;
  description: String;
  slug: String;
  maxGuests: Int;
  numBedrooms: Int;
  numBeds: Int;
  numBaths: Int;
  pictures?: PictureCreateManyInput;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface PostCreateWithoutAuthorInput {
  title: String;
  published?: Boolean;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PictureEdgeNode {
  cursor: String;
}

export interface PictureEdge extends Promise<PictureEdgeNode>, Fragmentable {
  node: <T = Picture>() => T;
  cursor: () => Promise<String>;
}

export interface PictureEdgeSubscription
  extends Promise<AsyncIterator<PictureEdgeNode>>,
    Fragmentable {
  node: <T = PictureSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  email?: String;
  name: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePictureNode {
  count: Int;
}

export interface AggregatePicture
  extends Promise<AggregatePictureNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePictureSubscription
  extends Promise<AsyncIterator<AggregatePictureNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayload
  extends Promise<PostSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Post>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValues>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePostNode {
  count: Int;
}

export interface AggregatePost
  extends Promise<AggregatePostNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePostNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PostConnectionNode {}

export interface PostConnection
  extends Promise<PostConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<PostEdgeNode>>>() => T;
  aggregate: <T = AggregatePost>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<PostEdgeSubscription>>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PictureConnectionNode {}

export interface PictureConnection
  extends Promise<PictureConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<PictureEdgeNode>>>() => T;
  aggregate: <T = AggregatePicture>() => T;
}

export interface PictureConnectionSubscription
  extends Promise<AsyncIterator<PictureConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<PictureEdgeSubscription>>>>() => T;
  aggregate: <T = AggregatePictureSubscription>() => T;
}

export interface PostNode {
  id: ID_Output;
  title: String;
  published: Boolean;
}

export interface Post extends Promise<PostNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = User>() => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<PostNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface PictureSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PictureSubscriptionPayload
  extends Promise<PictureSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Picture>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PicturePreviousValues>() => T;
}

export interface PictureSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PictureSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PictureSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PicturePreviousValuesSubscription>() => T;
}

export interface PlaceEdgeNode {
  cursor: String;
}

export interface PlaceEdge extends Promise<PlaceEdgeNode>, Fragmentable {
  node: <T = Place>() => T;
  cursor: () => Promise<String>;
}

export interface PlaceEdgeSubscription
  extends Promise<AsyncIterator<PlaceEdgeNode>>,
    Fragmentable {
  node: <T = PlaceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PicturePreviousValuesNode {
  id: ID_Output;
  url: String;
}

export interface PicturePreviousValues
  extends Promise<PicturePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
}

export interface PicturePreviousValuesSubscription
  extends Promise<AsyncIterator<PicturePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface PlaceNode {
  id: ID_Output;
  name?: String;
  shortDescription: String;
  description: String;
  slug: String;
  maxGuests: Int;
  numBedrooms: Int;
  numBeds: Int;
  numBaths: Int;
}

export interface Place extends Promise<PlaceNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  shortDescription: () => Promise<String>;
  description: () => Promise<String>;
  slug: () => Promise<String>;
  maxGuests: () => Promise<Int>;
  numBedrooms: () => Promise<Int>;
  numBeds: () => Promise<Int>;
  numBaths: () => Promise<Int>;
  pictures: <T = Promise<Array<PictureNode>>>(
    args?: {
      where?: PictureWhereInput;
      orderBy?: PictureOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PlaceSubscription
  extends Promise<AsyncIterator<PlaceNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  shortDescription: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  slug: () => Promise<AsyncIterator<String>>;
  maxGuests: () => Promise<AsyncIterator<Int>>;
  numBedrooms: () => Promise<AsyncIterator<Int>>;
  numBeds: () => Promise<AsyncIterator<Int>>;
  numBaths: () => Promise<AsyncIterator<Int>>;
  pictures: <T = Promise<AsyncIterator<Array<PictureSubscription>>>>(
    args?: {
      where?: PictureWhereInput;
      orderBy?: PictureOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PostEdgeNode {
  cursor: String;
}

export interface PostEdge extends Promise<PostEdgeNode>, Fragmentable {
  node: <T = Post>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdgeNode>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PostPreviousValuesNode {
  id: ID_Output;
  title: String;
  published: Boolean;
}

export interface PostPreviousValues
  extends Promise<PostPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface PlacePreviousValuesNode {
  id: ID_Output;
  name?: String;
  shortDescription: String;
  description: String;
  slug: String;
  maxGuests: Int;
  numBedrooms: Int;
  numBeds: Int;
  numBaths: Int;
}

export interface PlacePreviousValues
  extends Promise<PlacePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  shortDescription: () => Promise<String>;
  description: () => Promise<String>;
  slug: () => Promise<String>;
  maxGuests: () => Promise<Int>;
  numBedrooms: () => Promise<Int>;
  numBeds: () => Promise<Int>;
  numBaths: () => Promise<Int>;
}

export interface PlacePreviousValuesSubscription
  extends Promise<AsyncIterator<PlacePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  shortDescription: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  slug: () => Promise<AsyncIterator<String>>;
  maxGuests: () => Promise<AsyncIterator<Int>>;
  numBedrooms: () => Promise<AsyncIterator<Int>>;
  numBeds: () => Promise<AsyncIterator<Int>>;
  numBaths: () => Promise<AsyncIterator<Int>>;
}

export interface PlaceSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PlaceSubscriptionPayload
  extends Promise<PlaceSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Place>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlacePreviousValues>() => T;
}

export interface PlaceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlaceSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlaceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlacePreviousValuesSubscription>() => T;
}

export interface PictureNode {
  id: ID_Output;
  url: String;
}

export interface Picture extends Promise<PictureNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
}

export interface PictureSubscription
  extends Promise<AsyncIterator<PictureNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface UserNode {
  id: ID_Output;
  email?: String;
  name: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  posts: <T = Promise<Array<PostNode>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<Array<PostSubscription>>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PlaceConnectionNode {}

export interface PlaceConnection
  extends Promise<PlaceConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<PlaceEdgeNode>>>() => T;
  aggregate: <T = AggregatePlace>() => T;
}

export interface PlaceConnectionSubscription
  extends Promise<AsyncIterator<PlaceConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<PlaceEdgeSubscription>>>>() => T;
  aggregate: <T = AggregatePlaceSubscription>() => T;
}

export interface AggregatePlaceNode {
  count: Int;
}

export interface AggregatePlace
  extends Promise<AggregatePlaceNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlaceSubscription
  extends Promise<AsyncIterator<AggregatePlaceNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
