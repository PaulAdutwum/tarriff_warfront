
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Sector
 * 
 */
export type Sector = $Result.DefaultSelection<Prisma.$SectorPayload>
/**
 * Model TariffEvent
 * 
 */
export type TariffEvent = $Result.DefaultSelection<Prisma.$TariffEventPayload>
/**
 * Model SectorData
 * 
 */
export type SectorData = $Result.DefaultSelection<Prisma.$SectorDataPayload>
/**
 * Model StockMarket
 * 
 */
export type StockMarket = $Result.DefaultSelection<Prisma.$StockMarketPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model StockPrice
 * 
 */
export type StockPrice = $Result.DefaultSelection<Prisma.$StockPricePayload>
/**
 * Model StockImpact
 * 
 */
export type StockImpact = $Result.DefaultSelection<Prisma.$StockImpactPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model SavedSearch
 * 
 */
export type SavedSearch = $Result.DefaultSelection<Prisma.$SavedSearchPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ANALYST: 'ANALYST',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AlertType: {
  NEW_TARIFF: 'NEW_TARIFF',
  TARIFF_CHANGE: 'TARIFF_CHANGE',
  NEWS: 'NEWS',
  MARKET_IMPACT: 'MARKET_IMPACT'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]


export const ReportType: {
  TARIFF_ANALYSIS: 'TARIFF_ANALYSIS',
  SECTOR_IMPACT: 'SECTOR_IMPACT',
  MARKET_CORRELATION: 'MARKET_CORRELATION',
  CUSTOM: 'CUSTOM'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sector`: Exposes CRUD operations for the **Sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.SectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tariffEvent`: Exposes CRUD operations for the **TariffEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TariffEvents
    * const tariffEvents = await prisma.tariffEvent.findMany()
    * ```
    */
  get tariffEvent(): Prisma.TariffEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectorData`: Exposes CRUD operations for the **SectorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectorData
    * const sectorData = await prisma.sectorData.findMany()
    * ```
    */
  get sectorData(): Prisma.SectorDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMarket`: Exposes CRUD operations for the **StockMarket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMarkets
    * const stockMarkets = await prisma.stockMarket.findMany()
    * ```
    */
  get stockMarket(): Prisma.StockMarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockPrice`: Exposes CRUD operations for the **StockPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockPrices
    * const stockPrices = await prisma.stockPrice.findMany()
    * ```
    */
  get stockPrice(): Prisma.StockPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockImpact`: Exposes CRUD operations for the **StockImpact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockImpacts
    * const stockImpacts = await prisma.stockImpact.findMany()
    * ```
    */
  get stockImpact(): Prisma.StockImpactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedSearch`: Exposes CRUD operations for the **SavedSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedSearches
    * const savedSearches = await prisma.savedSearch.findMany()
    * ```
    */
  get savedSearch(): Prisma.SavedSearchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Country: 'Country',
    Sector: 'Sector',
    TariffEvent: 'TariffEvent',
    SectorData: 'SectorData',
    StockMarket: 'StockMarket',
    Stock: 'Stock',
    StockPrice: 'StockPrice',
    StockImpact: 'StockImpact',
    NewsArticle: 'NewsArticle',
    Alert: 'Alert',
    SavedSearch: 'SavedSearch',
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "country" | "sector" | "tariffEvent" | "sectorData" | "stockMarket" | "stock" | "stockPrice" | "stockImpact" | "newsArticle" | "alert" | "savedSearch" | "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Sector: {
        payload: Prisma.$SectorPayload<ExtArgs>
        fields: Prisma.SectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findFirst: {
            args: Prisma.SectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findMany: {
            args: Prisma.SectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          create: {
            args: Prisma.SectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          createMany: {
            args: Prisma.SectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          delete: {
            args: Prisma.SectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          update: {
            args: Prisma.SectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          deleteMany: {
            args: Prisma.SectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          upsert: {
            args: Prisma.SectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.SectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      TariffEvent: {
        payload: Prisma.$TariffEventPayload<ExtArgs>
        fields: Prisma.TariffEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>
          }
          findFirst: {
            args: Prisma.TariffEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>
          }
          findMany: {
            args: Prisma.TariffEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>[]
          }
          create: {
            args: Prisma.TariffEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>
          }
          createMany: {
            args: Prisma.TariffEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TariffEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>[]
          }
          delete: {
            args: Prisma.TariffEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>
          }
          update: {
            args: Prisma.TariffEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>
          }
          deleteMany: {
            args: Prisma.TariffEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TariffEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>[]
          }
          upsert: {
            args: Prisma.TariffEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffEventPayload>
          }
          aggregate: {
            args: Prisma.TariffEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariffEvent>
          }
          groupBy: {
            args: Prisma.TariffEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffEventCountArgs<ExtArgs>
            result: $Utils.Optional<TariffEventCountAggregateOutputType> | number
          }
        }
      }
      SectorData: {
        payload: Prisma.$SectorDataPayload<ExtArgs>
        fields: Prisma.SectorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>
          }
          findFirst: {
            args: Prisma.SectorDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>
          }
          findMany: {
            args: Prisma.SectorDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>[]
          }
          create: {
            args: Prisma.SectorDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>
          }
          createMany: {
            args: Prisma.SectorDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectorDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>[]
          }
          delete: {
            args: Prisma.SectorDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>
          }
          update: {
            args: Prisma.SectorDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>
          }
          deleteMany: {
            args: Prisma.SectorDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectorDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>[]
          }
          upsert: {
            args: Prisma.SectorDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorDataPayload>
          }
          aggregate: {
            args: Prisma.SectorDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectorData>
          }
          groupBy: {
            args: Prisma.SectorDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorDataCountArgs<ExtArgs>
            result: $Utils.Optional<SectorDataCountAggregateOutputType> | number
          }
        }
      }
      StockMarket: {
        payload: Prisma.$StockMarketPayload<ExtArgs>
        fields: Prisma.StockMarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>
          }
          findFirst: {
            args: Prisma.StockMarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>
          }
          findMany: {
            args: Prisma.StockMarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>[]
          }
          create: {
            args: Prisma.StockMarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>
          }
          createMany: {
            args: Prisma.StockMarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>[]
          }
          delete: {
            args: Prisma.StockMarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>
          }
          update: {
            args: Prisma.StockMarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>
          }
          deleteMany: {
            args: Prisma.StockMarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>[]
          }
          upsert: {
            args: Prisma.StockMarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMarketPayload>
          }
          aggregate: {
            args: Prisma.StockMarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMarket>
          }
          groupBy: {
            args: Prisma.StockMarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMarketCountArgs<ExtArgs>
            result: $Utils.Optional<StockMarketCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      StockPrice: {
        payload: Prisma.$StockPricePayload<ExtArgs>
        fields: Prisma.StockPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          findFirst: {
            args: Prisma.StockPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          findMany: {
            args: Prisma.StockPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>[]
          }
          create: {
            args: Prisma.StockPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          createMany: {
            args: Prisma.StockPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>[]
          }
          delete: {
            args: Prisma.StockPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          update: {
            args: Prisma.StockPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          deleteMany: {
            args: Prisma.StockPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>[]
          }
          upsert: {
            args: Prisma.StockPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          aggregate: {
            args: Prisma.StockPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockPrice>
          }
          groupBy: {
            args: Prisma.StockPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockPriceCountArgs<ExtArgs>
            result: $Utils.Optional<StockPriceCountAggregateOutputType> | number
          }
        }
      }
      StockImpact: {
        payload: Prisma.$StockImpactPayload<ExtArgs>
        fields: Prisma.StockImpactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockImpactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockImpactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>
          }
          findFirst: {
            args: Prisma.StockImpactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockImpactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>
          }
          findMany: {
            args: Prisma.StockImpactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>[]
          }
          create: {
            args: Prisma.StockImpactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>
          }
          createMany: {
            args: Prisma.StockImpactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockImpactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>[]
          }
          delete: {
            args: Prisma.StockImpactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>
          }
          update: {
            args: Prisma.StockImpactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>
          }
          deleteMany: {
            args: Prisma.StockImpactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockImpactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockImpactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>[]
          }
          upsert: {
            args: Prisma.StockImpactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockImpactPayload>
          }
          aggregate: {
            args: Prisma.StockImpactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockImpact>
          }
          groupBy: {
            args: Prisma.StockImpactGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockImpactGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockImpactCountArgs<ExtArgs>
            result: $Utils.Optional<StockImpactCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      SavedSearch: {
        payload: Prisma.$SavedSearchPayload<ExtArgs>
        fields: Prisma.SavedSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedSearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedSearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>
          }
          findFirst: {
            args: Prisma.SavedSearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedSearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>
          }
          findMany: {
            args: Prisma.SavedSearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>[]
          }
          create: {
            args: Prisma.SavedSearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>
          }
          createMany: {
            args: Prisma.SavedSearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedSearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>[]
          }
          delete: {
            args: Prisma.SavedSearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>
          }
          update: {
            args: Prisma.SavedSearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>
          }
          deleteMany: {
            args: Prisma.SavedSearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedSearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedSearchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>[]
          }
          upsert: {
            args: Prisma.SavedSearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedSearchPayload>
          }
          aggregate: {
            args: Prisma.SavedSearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedSearch>
          }
          groupBy: {
            args: Prisma.SavedSearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedSearchCountArgs<ExtArgs>
            result: $Utils.Optional<SavedSearchCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    country?: CountryOmit
    sector?: SectorOmit
    tariffEvent?: TariffEventOmit
    sectorData?: SectorDataOmit
    stockMarket?: StockMarketOmit
    stock?: StockOmit
    stockPrice?: StockPriceOmit
    stockImpact?: StockImpactOmit
    newsArticle?: NewsArticleOmit
    alert?: AlertOmit
    savedSearch?: SavedSearchOmit
    report?: ReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    alerts: number
    savedSearches: number
    reports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | UserCountOutputTypeCountAlertsArgs
    savedSearches?: boolean | UserCountOutputTypeCountSavedSearchesArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedSearchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    tariffFromSource: number
    tariffToTarget: number
    sectorData: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffFromSource?: boolean | CountryCountOutputTypeCountTariffFromSourceArgs
    tariffToTarget?: boolean | CountryCountOutputTypeCountTariffToTargetArgs
    sectorData?: boolean | CountryCountOutputTypeCountSectorDataArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountTariffFromSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffEventWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountTariffToTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffEventWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountSectorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorDataWhereInput
  }


  /**
   * Count Type SectorCountOutputType
   */

  export type SectorCountOutputType = {
    tariffs: number
    sectorData: number
  }

  export type SectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffs?: boolean | SectorCountOutputTypeCountTariffsArgs
    sectorData?: boolean | SectorCountOutputTypeCountSectorDataArgs
  }

  // Custom InputTypes
  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorCountOutputType
     */
    select?: SectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountTariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffEventWhereInput
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountSectorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorDataWhereInput
  }


  /**
   * Count Type TariffEventCountOutputType
   */

  export type TariffEventCountOutputType = {
    stockImpacts: number
  }

  export type TariffEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockImpacts?: boolean | TariffEventCountOutputTypeCountStockImpactsArgs
  }

  // Custom InputTypes
  /**
   * TariffEventCountOutputType without action
   */
  export type TariffEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEventCountOutputType
     */
    select?: TariffEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TariffEventCountOutputType without action
   */
  export type TariffEventCountOutputTypeCountStockImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockImpactWhereInput
  }


  /**
   * Count Type StockMarketCountOutputType
   */

  export type StockMarketCountOutputType = {
    stocks: number
    impacts: number
  }

  export type StockMarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | StockMarketCountOutputTypeCountStocksArgs
    impacts?: boolean | StockMarketCountOutputTypeCountImpactsArgs
  }

  // Custom InputTypes
  /**
   * StockMarketCountOutputType without action
   */
  export type StockMarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarketCountOutputType
     */
    select?: StockMarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockMarketCountOutputType without action
   */
  export type StockMarketCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }

  /**
   * StockMarketCountOutputType without action
   */
  export type StockMarketCountOutputTypeCountImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockImpactWhereInput
  }


  /**
   * Count Type StockCountOutputType
   */

  export type StockCountOutputType = {
    priceHistory: number
    impacts: number
  }

  export type StockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceHistory?: boolean | StockCountOutputTypeCountPriceHistoryArgs
    impacts?: boolean | StockCountOutputTypeCountImpactsArgs
  }

  // Custom InputTypes
  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockCountOutputType
     */
    select?: StockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockPriceWhereInput
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockImpactWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alerts?: boolean | User$alertsArgs<ExtArgs>
    savedSearches?: boolean | User$savedSearchesArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | User$alertsArgs<ExtArgs>
    savedSearches?: boolean | User$savedSearchesArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      savedSearches: Prisma.$SavedSearchPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerts<T extends User$alertsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedSearches<T extends User$savedSearchesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedSearchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.alerts
   */
  export type User$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User.savedSearches
   */
  export type User$savedSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    where?: SavedSearchWhereInput
    orderBy?: SavedSearchOrderByWithRelationInput | SavedSearchOrderByWithRelationInput[]
    cursor?: SavedSearchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedSearchScalarFieldEnum | SavedSearchScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    region: string | null
    flagUrl: string | null
    economicStatus: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    region: string | null
    flagUrl: string | null
    economicStatus: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    region: number
    flagUrl: number
    economicStatus: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    region?: true
    flagUrl?: true
    economicStatus?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    region?: true
    flagUrl?: true
    economicStatus?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    region?: true
    flagUrl?: true
    economicStatus?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    code: string
    region: string
    flagUrl: string | null
    economicStatus: string | null
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    region?: boolean
    flagUrl?: boolean
    economicStatus?: boolean
    tariffFromSource?: boolean | Country$tariffFromSourceArgs<ExtArgs>
    tariffToTarget?: boolean | Country$tariffToTargetArgs<ExtArgs>
    sectorData?: boolean | Country$sectorDataArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    region?: boolean
    flagUrl?: boolean
    economicStatus?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    region?: boolean
    flagUrl?: boolean
    economicStatus?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    region?: boolean
    flagUrl?: boolean
    economicStatus?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "region" | "flagUrl" | "economicStatus", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffFromSource?: boolean | Country$tariffFromSourceArgs<ExtArgs>
    tariffToTarget?: boolean | Country$tariffToTargetArgs<ExtArgs>
    sectorData?: boolean | Country$sectorDataArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      tariffFromSource: Prisma.$TariffEventPayload<ExtArgs>[]
      tariffToTarget: Prisma.$TariffEventPayload<ExtArgs>[]
      sectorData: Prisma.$SectorDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      region: string
      flagUrl: string | null
      economicStatus: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tariffFromSource<T extends Country$tariffFromSourceArgs<ExtArgs> = {}>(args?: Subset<T, Country$tariffFromSourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tariffToTarget<T extends Country$tariffToTargetArgs<ExtArgs> = {}>(args?: Subset<T, Country$tariffToTargetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sectorData<T extends Country$sectorDataArgs<ExtArgs> = {}>(args?: Subset<T, Country$sectorDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly region: FieldRef<"Country", 'String'>
    readonly flagUrl: FieldRef<"Country", 'String'>
    readonly economicStatus: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.tariffFromSource
   */
  export type Country$tariffFromSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    where?: TariffEventWhereInput
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    cursor?: TariffEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffEventScalarFieldEnum | TariffEventScalarFieldEnum[]
  }

  /**
   * Country.tariffToTarget
   */
  export type Country$tariffToTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    where?: TariffEventWhereInput
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    cursor?: TariffEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffEventScalarFieldEnum | TariffEventScalarFieldEnum[]
  }

  /**
   * Country.sectorData
   */
  export type Country$sectorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    where?: SectorDataWhereInput
    orderBy?: SectorDataOrderByWithRelationInput | SectorDataOrderByWithRelationInput[]
    cursor?: SectorDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectorDataScalarFieldEnum | SectorDataScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type SectorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type SectorMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sector to aggregate.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type SectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorWhereInput
    orderBy?: SectorOrderByWithAggregationInput | SectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: SectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: SectorCountAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends SectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type SectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tariffs?: boolean | Sector$tariffsArgs<ExtArgs>
    sectorData?: boolean | Sector$sectorDataArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type SectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["sector"]>
  export type SectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffs?: boolean | Sector$tariffsArgs<ExtArgs>
    sectorData?: boolean | Sector$sectorDataArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sector"
    objects: {
      tariffs: Prisma.$TariffEventPayload<ExtArgs>[]
      sectorData: Prisma.$SectorDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type SectorGetPayload<S extends boolean | null | undefined | SectorDefaultArgs> = $Result.GetResult<Prisma.$SectorPayload, S>

  type SectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface SectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sector'], meta: { name: 'Sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {SectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorFindUniqueArgs>(args: SelectSubset<T, SectorFindUniqueArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorFindFirstArgs>(args?: SelectSubset<T, SectorFindFirstArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorFindManyArgs>(args?: SelectSubset<T, SectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sector.
     * @param {SectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends SectorCreateArgs>(args: SelectSubset<T, SectorCreateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sectors.
     * @param {SectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorCreateManyArgs>(args?: SelectSubset<T, SectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {SectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectorCreateManyAndReturnArgs>(args?: SelectSubset<T, SectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sector.
     * @param {SectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends SectorDeleteArgs>(args: SelectSubset<T, SectorDeleteArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sector.
     * @param {SectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorUpdateArgs>(args: SelectSubset<T, SectorUpdateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sectors.
     * @param {SectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorDeleteManyArgs>(args?: SelectSubset<T, SectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorUpdateManyArgs>(args: SelectSubset<T, SectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {SectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectorUpdateManyAndReturnArgs>(args: SelectSubset<T, SectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sector.
     * @param {SectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends SectorUpsertArgs>(args: SelectSubset<T, SectorUpsertArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends SectorCountArgs>(
      args?: Subset<T, SectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorGroupByArgs['orderBy'] }
        : { orderBy?: SectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sector model
   */
  readonly fields: SectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tariffs<T extends Sector$tariffsArgs<ExtArgs> = {}>(args?: Subset<T, Sector$tariffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sectorData<T extends Sector$sectorDataArgs<ExtArgs> = {}>(args?: Subset<T, Sector$sectorDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sector model
   */
  interface SectorFieldRefs {
    readonly id: FieldRef<"Sector", 'String'>
    readonly name: FieldRef<"Sector", 'String'>
    readonly description: FieldRef<"Sector", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sector findUnique
   */
  export type SectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findUniqueOrThrow
   */
  export type SectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findFirst
   */
  export type SectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findFirstOrThrow
   */
  export type SectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findMany
   */
  export type SectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sectors to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector create
   */
  export type SectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sector.
     */
    data: XOR<SectorCreateInput, SectorUncheckedCreateInput>
  }

  /**
   * Sector createMany
   */
  export type SectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector createManyAndReturn
   */
  export type SectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector update
   */
  export type SectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sector.
     */
    data: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
    /**
     * Choose, which Sector to update.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector updateMany
   */
  export type SectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector updateManyAndReturn
   */
  export type SectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector upsert
   */
  export type SectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sector to update in case it exists.
     */
    where: SectorWhereUniqueInput
    /**
     * In case the Sector found by the `where` argument doesn't exist, create a new Sector with this data.
     */
    create: XOR<SectorCreateInput, SectorUncheckedCreateInput>
    /**
     * In case the Sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
  }

  /**
   * Sector delete
   */
  export type SectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter which Sector to delete.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector deleteMany
   */
  export type SectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sectors to delete
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to delete.
     */
    limit?: number
  }

  /**
   * Sector.tariffs
   */
  export type Sector$tariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    where?: TariffEventWhereInput
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    cursor?: TariffEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffEventScalarFieldEnum | TariffEventScalarFieldEnum[]
  }

  /**
   * Sector.sectorData
   */
  export type Sector$sectorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    where?: SectorDataWhereInput
    orderBy?: SectorDataOrderByWithRelationInput | SectorDataOrderByWithRelationInput[]
    cursor?: SectorDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectorDataScalarFieldEnum | SectorDataScalarFieldEnum[]
  }

  /**
   * Sector without action
   */
  export type SectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
  }


  /**
   * Model TariffEvent
   */

  export type AggregateTariffEvent = {
    _count: TariffEventCountAggregateOutputType | null
    _avg: TariffEventAvgAggregateOutputType | null
    _sum: TariffEventSumAggregateOutputType | null
    _min: TariffEventMinAggregateOutputType | null
    _max: TariffEventMaxAggregateOutputType | null
  }

  export type TariffEventAvgAggregateOutputType = {
    tariffRate: number | null
    previousRate: number | null
    impactScore: number | null
  }

  export type TariffEventSumAggregateOutputType = {
    tariffRate: number | null
    previousRate: number | null
    impactScore: number | null
  }

  export type TariffEventMinAggregateOutputType = {
    id: string | null
    sourceCountryId: string | null
    targetCountryId: string | null
    sectorId: string | null
    tariffRate: number | null
    previousRate: number | null
    announcementDate: Date | null
    effectiveDate: Date | null
    expiryDate: Date | null
    description: string | null
    impactScore: number | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffEventMaxAggregateOutputType = {
    id: string | null
    sourceCountryId: string | null
    targetCountryId: string | null
    sectorId: string | null
    tariffRate: number | null
    previousRate: number | null
    announcementDate: Date | null
    effectiveDate: Date | null
    expiryDate: Date | null
    description: string | null
    impactScore: number | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffEventCountAggregateOutputType = {
    id: number
    sourceCountryId: number
    targetCountryId: number
    sectorId: number
    tariffRate: number
    previousRate: number
    announcementDate: number
    effectiveDate: number
    expiryDate: number
    description: number
    impactScore: number
    sourceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TariffEventAvgAggregateInputType = {
    tariffRate?: true
    previousRate?: true
    impactScore?: true
  }

  export type TariffEventSumAggregateInputType = {
    tariffRate?: true
    previousRate?: true
    impactScore?: true
  }

  export type TariffEventMinAggregateInputType = {
    id?: true
    sourceCountryId?: true
    targetCountryId?: true
    sectorId?: true
    tariffRate?: true
    previousRate?: true
    announcementDate?: true
    effectiveDate?: true
    expiryDate?: true
    description?: true
    impactScore?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffEventMaxAggregateInputType = {
    id?: true
    sourceCountryId?: true
    targetCountryId?: true
    sectorId?: true
    tariffRate?: true
    previousRate?: true
    announcementDate?: true
    effectiveDate?: true
    expiryDate?: true
    description?: true
    impactScore?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffEventCountAggregateInputType = {
    id?: true
    sourceCountryId?: true
    targetCountryId?: true
    sectorId?: true
    tariffRate?: true
    previousRate?: true
    announcementDate?: true
    effectiveDate?: true
    expiryDate?: true
    description?: true
    impactScore?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TariffEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffEvent to aggregate.
     */
    where?: TariffEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffEvents to fetch.
     */
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TariffEvents
    **/
    _count?: true | TariffEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffEventMaxAggregateInputType
  }

  export type GetTariffEventAggregateType<T extends TariffEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTariffEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariffEvent[P]>
      : GetScalarType<T[P], AggregateTariffEvent[P]>
  }




  export type TariffEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffEventWhereInput
    orderBy?: TariffEventOrderByWithAggregationInput | TariffEventOrderByWithAggregationInput[]
    by: TariffEventScalarFieldEnum[] | TariffEventScalarFieldEnum
    having?: TariffEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffEventCountAggregateInputType | true
    _avg?: TariffEventAvgAggregateInputType
    _sum?: TariffEventSumAggregateInputType
    _min?: TariffEventMinAggregateInputType
    _max?: TariffEventMaxAggregateInputType
  }

  export type TariffEventGroupByOutputType = {
    id: string
    sourceCountryId: string
    targetCountryId: string
    sectorId: string
    tariffRate: number
    previousRate: number | null
    announcementDate: Date
    effectiveDate: Date
    expiryDate: Date | null
    description: string | null
    impactScore: number | null
    sourceUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: TariffEventCountAggregateOutputType | null
    _avg: TariffEventAvgAggregateOutputType | null
    _sum: TariffEventSumAggregateOutputType | null
    _min: TariffEventMinAggregateOutputType | null
    _max: TariffEventMaxAggregateOutputType | null
  }

  type GetTariffEventGroupByPayload<T extends TariffEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffEventGroupByOutputType[P]>
            : GetScalarType<T[P], TariffEventGroupByOutputType[P]>
        }
      >
    >


  export type TariffEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCountryId?: boolean
    targetCountryId?: boolean
    sectorId?: boolean
    tariffRate?: boolean
    previousRate?: boolean
    announcementDate?: boolean
    effectiveDate?: boolean
    expiryDate?: boolean
    description?: boolean
    impactScore?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceCountry?: boolean | CountryDefaultArgs<ExtArgs>
    targetCountry?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    stockImpacts?: boolean | TariffEvent$stockImpactsArgs<ExtArgs>
    _count?: boolean | TariffEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffEvent"]>

  export type TariffEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCountryId?: boolean
    targetCountryId?: boolean
    sectorId?: boolean
    tariffRate?: boolean
    previousRate?: boolean
    announcementDate?: boolean
    effectiveDate?: boolean
    expiryDate?: boolean
    description?: boolean
    impactScore?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceCountry?: boolean | CountryDefaultArgs<ExtArgs>
    targetCountry?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffEvent"]>

  export type TariffEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCountryId?: boolean
    targetCountryId?: boolean
    sectorId?: boolean
    tariffRate?: boolean
    previousRate?: boolean
    announcementDate?: boolean
    effectiveDate?: boolean
    expiryDate?: boolean
    description?: boolean
    impactScore?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceCountry?: boolean | CountryDefaultArgs<ExtArgs>
    targetCountry?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffEvent"]>

  export type TariffEventSelectScalar = {
    id?: boolean
    sourceCountryId?: boolean
    targetCountryId?: boolean
    sectorId?: boolean
    tariffRate?: boolean
    previousRate?: boolean
    announcementDate?: boolean
    effectiveDate?: boolean
    expiryDate?: boolean
    description?: boolean
    impactScore?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TariffEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceCountryId" | "targetCountryId" | "sectorId" | "tariffRate" | "previousRate" | "announcementDate" | "effectiveDate" | "expiryDate" | "description" | "impactScore" | "sourceUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["tariffEvent"]>
  export type TariffEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceCountry?: boolean | CountryDefaultArgs<ExtArgs>
    targetCountry?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    stockImpacts?: boolean | TariffEvent$stockImpactsArgs<ExtArgs>
    _count?: boolean | TariffEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TariffEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceCountry?: boolean | CountryDefaultArgs<ExtArgs>
    targetCountry?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }
  export type TariffEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceCountry?: boolean | CountryDefaultArgs<ExtArgs>
    targetCountry?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }

  export type $TariffEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TariffEvent"
    objects: {
      sourceCountry: Prisma.$CountryPayload<ExtArgs>
      targetCountry: Prisma.$CountryPayload<ExtArgs>
      sector: Prisma.$SectorPayload<ExtArgs>
      stockImpacts: Prisma.$StockImpactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceCountryId: string
      targetCountryId: string
      sectorId: string
      tariffRate: number
      previousRate: number | null
      announcementDate: Date
      effectiveDate: Date
      expiryDate: Date | null
      description: string | null
      impactScore: number | null
      sourceUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tariffEvent"]>
    composites: {}
  }

  type TariffEventGetPayload<S extends boolean | null | undefined | TariffEventDefaultArgs> = $Result.GetResult<Prisma.$TariffEventPayload, S>

  type TariffEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TariffEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TariffEventCountAggregateInputType | true
    }

  export interface TariffEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TariffEvent'], meta: { name: 'TariffEvent' } }
    /**
     * Find zero or one TariffEvent that matches the filter.
     * @param {TariffEventFindUniqueArgs} args - Arguments to find a TariffEvent
     * @example
     * // Get one TariffEvent
     * const tariffEvent = await prisma.tariffEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffEventFindUniqueArgs>(args: SelectSubset<T, TariffEventFindUniqueArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TariffEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TariffEventFindUniqueOrThrowArgs} args - Arguments to find a TariffEvent
     * @example
     * // Get one TariffEvent
     * const tariffEvent = await prisma.tariffEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TariffEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventFindFirstArgs} args - Arguments to find a TariffEvent
     * @example
     * // Get one TariffEvent
     * const tariffEvent = await prisma.tariffEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffEventFindFirstArgs>(args?: SelectSubset<T, TariffEventFindFirstArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TariffEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventFindFirstOrThrowArgs} args - Arguments to find a TariffEvent
     * @example
     * // Get one TariffEvent
     * const tariffEvent = await prisma.tariffEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TariffEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TariffEvents
     * const tariffEvents = await prisma.tariffEvent.findMany()
     * 
     * // Get first 10 TariffEvents
     * const tariffEvents = await prisma.tariffEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffEventWithIdOnly = await prisma.tariffEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TariffEventFindManyArgs>(args?: SelectSubset<T, TariffEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TariffEvent.
     * @param {TariffEventCreateArgs} args - Arguments to create a TariffEvent.
     * @example
     * // Create one TariffEvent
     * const TariffEvent = await prisma.tariffEvent.create({
     *   data: {
     *     // ... data to create a TariffEvent
     *   }
     * })
     * 
     */
    create<T extends TariffEventCreateArgs>(args: SelectSubset<T, TariffEventCreateArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TariffEvents.
     * @param {TariffEventCreateManyArgs} args - Arguments to create many TariffEvents.
     * @example
     * // Create many TariffEvents
     * const tariffEvent = await prisma.tariffEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffEventCreateManyArgs>(args?: SelectSubset<T, TariffEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TariffEvents and returns the data saved in the database.
     * @param {TariffEventCreateManyAndReturnArgs} args - Arguments to create many TariffEvents.
     * @example
     * // Create many TariffEvents
     * const tariffEvent = await prisma.tariffEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TariffEvents and only return the `id`
     * const tariffEventWithIdOnly = await prisma.tariffEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TariffEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TariffEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TariffEvent.
     * @param {TariffEventDeleteArgs} args - Arguments to delete one TariffEvent.
     * @example
     * // Delete one TariffEvent
     * const TariffEvent = await prisma.tariffEvent.delete({
     *   where: {
     *     // ... filter to delete one TariffEvent
     *   }
     * })
     * 
     */
    delete<T extends TariffEventDeleteArgs>(args: SelectSubset<T, TariffEventDeleteArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TariffEvent.
     * @param {TariffEventUpdateArgs} args - Arguments to update one TariffEvent.
     * @example
     * // Update one TariffEvent
     * const tariffEvent = await prisma.tariffEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffEventUpdateArgs>(args: SelectSubset<T, TariffEventUpdateArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TariffEvents.
     * @param {TariffEventDeleteManyArgs} args - Arguments to filter TariffEvents to delete.
     * @example
     * // Delete a few TariffEvents
     * const { count } = await prisma.tariffEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffEventDeleteManyArgs>(args?: SelectSubset<T, TariffEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TariffEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TariffEvents
     * const tariffEvent = await prisma.tariffEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffEventUpdateManyArgs>(args: SelectSubset<T, TariffEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TariffEvents and returns the data updated in the database.
     * @param {TariffEventUpdateManyAndReturnArgs} args - Arguments to update many TariffEvents.
     * @example
     * // Update many TariffEvents
     * const tariffEvent = await prisma.tariffEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TariffEvents and only return the `id`
     * const tariffEventWithIdOnly = await prisma.tariffEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TariffEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TariffEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TariffEvent.
     * @param {TariffEventUpsertArgs} args - Arguments to update or create a TariffEvent.
     * @example
     * // Update or create a TariffEvent
     * const tariffEvent = await prisma.tariffEvent.upsert({
     *   create: {
     *     // ... data to create a TariffEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TariffEvent we want to update
     *   }
     * })
     */
    upsert<T extends TariffEventUpsertArgs>(args: SelectSubset<T, TariffEventUpsertArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TariffEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventCountArgs} args - Arguments to filter TariffEvents to count.
     * @example
     * // Count the number of TariffEvents
     * const count = await prisma.tariffEvent.count({
     *   where: {
     *     // ... the filter for the TariffEvents we want to count
     *   }
     * })
    **/
    count<T extends TariffEventCountArgs>(
      args?: Subset<T, TariffEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TariffEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TariffEventAggregateArgs>(args: Subset<T, TariffEventAggregateArgs>): Prisma.PrismaPromise<GetTariffEventAggregateType<T>>

    /**
     * Group by TariffEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TariffEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffEventGroupByArgs['orderBy'] }
        : { orderBy?: TariffEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TariffEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TariffEvent model
   */
  readonly fields: TariffEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TariffEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceCountry<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetCountry<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sector<T extends SectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectorDefaultArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stockImpacts<T extends TariffEvent$stockImpactsArgs<ExtArgs> = {}>(args?: Subset<T, TariffEvent$stockImpactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TariffEvent model
   */
  interface TariffEventFieldRefs {
    readonly id: FieldRef<"TariffEvent", 'String'>
    readonly sourceCountryId: FieldRef<"TariffEvent", 'String'>
    readonly targetCountryId: FieldRef<"TariffEvent", 'String'>
    readonly sectorId: FieldRef<"TariffEvent", 'String'>
    readonly tariffRate: FieldRef<"TariffEvent", 'Float'>
    readonly previousRate: FieldRef<"TariffEvent", 'Float'>
    readonly announcementDate: FieldRef<"TariffEvent", 'DateTime'>
    readonly effectiveDate: FieldRef<"TariffEvent", 'DateTime'>
    readonly expiryDate: FieldRef<"TariffEvent", 'DateTime'>
    readonly description: FieldRef<"TariffEvent", 'String'>
    readonly impactScore: FieldRef<"TariffEvent", 'Float'>
    readonly sourceUrl: FieldRef<"TariffEvent", 'String'>
    readonly createdAt: FieldRef<"TariffEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"TariffEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TariffEvent findUnique
   */
  export type TariffEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * Filter, which TariffEvent to fetch.
     */
    where: TariffEventWhereUniqueInput
  }

  /**
   * TariffEvent findUniqueOrThrow
   */
  export type TariffEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * Filter, which TariffEvent to fetch.
     */
    where: TariffEventWhereUniqueInput
  }

  /**
   * TariffEvent findFirst
   */
  export type TariffEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * Filter, which TariffEvent to fetch.
     */
    where?: TariffEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffEvents to fetch.
     */
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffEvents.
     */
    cursor?: TariffEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffEvents.
     */
    distinct?: TariffEventScalarFieldEnum | TariffEventScalarFieldEnum[]
  }

  /**
   * TariffEvent findFirstOrThrow
   */
  export type TariffEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * Filter, which TariffEvent to fetch.
     */
    where?: TariffEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffEvents to fetch.
     */
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffEvents.
     */
    cursor?: TariffEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffEvents.
     */
    distinct?: TariffEventScalarFieldEnum | TariffEventScalarFieldEnum[]
  }

  /**
   * TariffEvent findMany
   */
  export type TariffEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * Filter, which TariffEvents to fetch.
     */
    where?: TariffEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffEvents to fetch.
     */
    orderBy?: TariffEventOrderByWithRelationInput | TariffEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TariffEvents.
     */
    cursor?: TariffEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffEvents.
     */
    skip?: number
    distinct?: TariffEventScalarFieldEnum | TariffEventScalarFieldEnum[]
  }

  /**
   * TariffEvent create
   */
  export type TariffEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TariffEvent.
     */
    data: XOR<TariffEventCreateInput, TariffEventUncheckedCreateInput>
  }

  /**
   * TariffEvent createMany
   */
  export type TariffEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TariffEvents.
     */
    data: TariffEventCreateManyInput | TariffEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TariffEvent createManyAndReturn
   */
  export type TariffEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * The data used to create many TariffEvents.
     */
    data: TariffEventCreateManyInput | TariffEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TariffEvent update
   */
  export type TariffEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TariffEvent.
     */
    data: XOR<TariffEventUpdateInput, TariffEventUncheckedUpdateInput>
    /**
     * Choose, which TariffEvent to update.
     */
    where: TariffEventWhereUniqueInput
  }

  /**
   * TariffEvent updateMany
   */
  export type TariffEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TariffEvents.
     */
    data: XOR<TariffEventUpdateManyMutationInput, TariffEventUncheckedUpdateManyInput>
    /**
     * Filter which TariffEvents to update
     */
    where?: TariffEventWhereInput
    /**
     * Limit how many TariffEvents to update.
     */
    limit?: number
  }

  /**
   * TariffEvent updateManyAndReturn
   */
  export type TariffEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * The data used to update TariffEvents.
     */
    data: XOR<TariffEventUpdateManyMutationInput, TariffEventUncheckedUpdateManyInput>
    /**
     * Filter which TariffEvents to update
     */
    where?: TariffEventWhereInput
    /**
     * Limit how many TariffEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TariffEvent upsert
   */
  export type TariffEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TariffEvent to update in case it exists.
     */
    where: TariffEventWhereUniqueInput
    /**
     * In case the TariffEvent found by the `where` argument doesn't exist, create a new TariffEvent with this data.
     */
    create: XOR<TariffEventCreateInput, TariffEventUncheckedCreateInput>
    /**
     * In case the TariffEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffEventUpdateInput, TariffEventUncheckedUpdateInput>
  }

  /**
   * TariffEvent delete
   */
  export type TariffEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
    /**
     * Filter which TariffEvent to delete.
     */
    where: TariffEventWhereUniqueInput
  }

  /**
   * TariffEvent deleteMany
   */
  export type TariffEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffEvents to delete
     */
    where?: TariffEventWhereInput
    /**
     * Limit how many TariffEvents to delete.
     */
    limit?: number
  }

  /**
   * TariffEvent.stockImpacts
   */
  export type TariffEvent$stockImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    where?: StockImpactWhereInput
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    cursor?: StockImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockImpactScalarFieldEnum | StockImpactScalarFieldEnum[]
  }

  /**
   * TariffEvent without action
   */
  export type TariffEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffEvent
     */
    select?: TariffEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffEvent
     */
    omit?: TariffEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffEventInclude<ExtArgs> | null
  }


  /**
   * Model SectorData
   */

  export type AggregateSectorData = {
    _count: SectorDataCountAggregateOutputType | null
    _avg: SectorDataAvgAggregateOutputType | null
    _sum: SectorDataSumAggregateOutputType | null
    _min: SectorDataMinAggregateOutputType | null
    _max: SectorDataMaxAggregateOutputType | null
  }

  export type SectorDataAvgAggregateOutputType = {
    gdpValue: number | null
    exportValue: number | null
    importValue: number | null
    employment: number | null
    year: number | null
    quarter: number | null
  }

  export type SectorDataSumAggregateOutputType = {
    gdpValue: number | null
    exportValue: number | null
    importValue: number | null
    employment: number | null
    year: number | null
    quarter: number | null
  }

  export type SectorDataMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    sectorId: string | null
    gdpValue: number | null
    exportValue: number | null
    importValue: number | null
    employment: number | null
    year: number | null
    quarter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorDataMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    sectorId: string | null
    gdpValue: number | null
    exportValue: number | null
    importValue: number | null
    employment: number | null
    year: number | null
    quarter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorDataCountAggregateOutputType = {
    id: number
    countryId: number
    sectorId: number
    gdpValue: number
    exportValue: number
    importValue: number
    employment: number
    year: number
    quarter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectorDataAvgAggregateInputType = {
    gdpValue?: true
    exportValue?: true
    importValue?: true
    employment?: true
    year?: true
    quarter?: true
  }

  export type SectorDataSumAggregateInputType = {
    gdpValue?: true
    exportValue?: true
    importValue?: true
    employment?: true
    year?: true
    quarter?: true
  }

  export type SectorDataMinAggregateInputType = {
    id?: true
    countryId?: true
    sectorId?: true
    gdpValue?: true
    exportValue?: true
    importValue?: true
    employment?: true
    year?: true
    quarter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorDataMaxAggregateInputType = {
    id?: true
    countryId?: true
    sectorId?: true
    gdpValue?: true
    exportValue?: true
    importValue?: true
    employment?: true
    year?: true
    quarter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorDataCountAggregateInputType = {
    id?: true
    countryId?: true
    sectorId?: true
    gdpValue?: true
    exportValue?: true
    importValue?: true
    employment?: true
    year?: true
    quarter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectorData to aggregate.
     */
    where?: SectorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorData to fetch.
     */
    orderBy?: SectorDataOrderByWithRelationInput | SectorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectorData
    **/
    _count?: true | SectorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectorDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectorDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorDataMaxAggregateInputType
  }

  export type GetSectorDataAggregateType<T extends SectorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSectorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectorData[P]>
      : GetScalarType<T[P], AggregateSectorData[P]>
  }




  export type SectorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorDataWhereInput
    orderBy?: SectorDataOrderByWithAggregationInput | SectorDataOrderByWithAggregationInput[]
    by: SectorDataScalarFieldEnum[] | SectorDataScalarFieldEnum
    having?: SectorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorDataCountAggregateInputType | true
    _avg?: SectorDataAvgAggregateInputType
    _sum?: SectorDataSumAggregateInputType
    _min?: SectorDataMinAggregateInputType
    _max?: SectorDataMaxAggregateInputType
  }

  export type SectorDataGroupByOutputType = {
    id: string
    countryId: string
    sectorId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment: number | null
    year: number
    quarter: number
    createdAt: Date
    updatedAt: Date
    _count: SectorDataCountAggregateOutputType | null
    _avg: SectorDataAvgAggregateOutputType | null
    _sum: SectorDataSumAggregateOutputType | null
    _min: SectorDataMinAggregateOutputType | null
    _max: SectorDataMaxAggregateOutputType | null
  }

  type GetSectorDataGroupByPayload<T extends SectorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorDataGroupByOutputType[P]>
            : GetScalarType<T[P], SectorDataGroupByOutputType[P]>
        }
      >
    >


  export type SectorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    sectorId?: boolean
    gdpValue?: boolean
    exportValue?: boolean
    importValue?: boolean
    employment?: boolean
    year?: boolean
    quarter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectorData"]>

  export type SectorDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    sectorId?: boolean
    gdpValue?: boolean
    exportValue?: boolean
    importValue?: boolean
    employment?: boolean
    year?: boolean
    quarter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectorData"]>

  export type SectorDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    sectorId?: boolean
    gdpValue?: boolean
    exportValue?: boolean
    importValue?: boolean
    employment?: boolean
    year?: boolean
    quarter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectorData"]>

  export type SectorDataSelectScalar = {
    id?: boolean
    countryId?: boolean
    sectorId?: boolean
    gdpValue?: boolean
    exportValue?: boolean
    importValue?: boolean
    employment?: boolean
    year?: boolean
    quarter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectorDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryId" | "sectorId" | "gdpValue" | "exportValue" | "importValue" | "employment" | "year" | "quarter" | "createdAt" | "updatedAt", ExtArgs["result"]["sectorData"]>
  export type SectorDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }
  export type SectorDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }
  export type SectorDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }

  export type $SectorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectorData"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      sector: Prisma.$SectorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryId: string
      sectorId: string
      gdpValue: number
      exportValue: number
      importValue: number
      employment: number | null
      year: number
      quarter: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sectorData"]>
    composites: {}
  }

  type SectorDataGetPayload<S extends boolean | null | undefined | SectorDataDefaultArgs> = $Result.GetResult<Prisma.$SectorDataPayload, S>

  type SectorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorDataCountAggregateInputType | true
    }

  export interface SectorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectorData'], meta: { name: 'SectorData' } }
    /**
     * Find zero or one SectorData that matches the filter.
     * @param {SectorDataFindUniqueArgs} args - Arguments to find a SectorData
     * @example
     * // Get one SectorData
     * const sectorData = await prisma.sectorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorDataFindUniqueArgs>(args: SelectSubset<T, SectorDataFindUniqueArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectorData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorDataFindUniqueOrThrowArgs} args - Arguments to find a SectorData
     * @example
     * // Get one SectorData
     * const sectorData = await prisma.sectorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataFindFirstArgs} args - Arguments to find a SectorData
     * @example
     * // Get one SectorData
     * const sectorData = await prisma.sectorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorDataFindFirstArgs>(args?: SelectSubset<T, SectorDataFindFirstArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataFindFirstOrThrowArgs} args - Arguments to find a SectorData
     * @example
     * // Get one SectorData
     * const sectorData = await prisma.sectorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectorData
     * const sectorData = await prisma.sectorData.findMany()
     * 
     * // Get first 10 SectorData
     * const sectorData = await prisma.sectorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorDataWithIdOnly = await prisma.sectorData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorDataFindManyArgs>(args?: SelectSubset<T, SectorDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectorData.
     * @param {SectorDataCreateArgs} args - Arguments to create a SectorData.
     * @example
     * // Create one SectorData
     * const SectorData = await prisma.sectorData.create({
     *   data: {
     *     // ... data to create a SectorData
     *   }
     * })
     * 
     */
    create<T extends SectorDataCreateArgs>(args: SelectSubset<T, SectorDataCreateArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectorData.
     * @param {SectorDataCreateManyArgs} args - Arguments to create many SectorData.
     * @example
     * // Create many SectorData
     * const sectorData = await prisma.sectorData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorDataCreateManyArgs>(args?: SelectSubset<T, SectorDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectorData and returns the data saved in the database.
     * @param {SectorDataCreateManyAndReturnArgs} args - Arguments to create many SectorData.
     * @example
     * // Create many SectorData
     * const sectorData = await prisma.sectorData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectorData and only return the `id`
     * const sectorDataWithIdOnly = await prisma.sectorData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectorDataCreateManyAndReturnArgs>(args?: SelectSubset<T, SectorDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectorData.
     * @param {SectorDataDeleteArgs} args - Arguments to delete one SectorData.
     * @example
     * // Delete one SectorData
     * const SectorData = await prisma.sectorData.delete({
     *   where: {
     *     // ... filter to delete one SectorData
     *   }
     * })
     * 
     */
    delete<T extends SectorDataDeleteArgs>(args: SelectSubset<T, SectorDataDeleteArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectorData.
     * @param {SectorDataUpdateArgs} args - Arguments to update one SectorData.
     * @example
     * // Update one SectorData
     * const sectorData = await prisma.sectorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorDataUpdateArgs>(args: SelectSubset<T, SectorDataUpdateArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectorData.
     * @param {SectorDataDeleteManyArgs} args - Arguments to filter SectorData to delete.
     * @example
     * // Delete a few SectorData
     * const { count } = await prisma.sectorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorDataDeleteManyArgs>(args?: SelectSubset<T, SectorDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectorData
     * const sectorData = await prisma.sectorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorDataUpdateManyArgs>(args: SelectSubset<T, SectorDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectorData and returns the data updated in the database.
     * @param {SectorDataUpdateManyAndReturnArgs} args - Arguments to update many SectorData.
     * @example
     * // Update many SectorData
     * const sectorData = await prisma.sectorData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectorData and only return the `id`
     * const sectorDataWithIdOnly = await prisma.sectorData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectorDataUpdateManyAndReturnArgs>(args: SelectSubset<T, SectorDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectorData.
     * @param {SectorDataUpsertArgs} args - Arguments to update or create a SectorData.
     * @example
     * // Update or create a SectorData
     * const sectorData = await prisma.sectorData.upsert({
     *   create: {
     *     // ... data to create a SectorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectorData we want to update
     *   }
     * })
     */
    upsert<T extends SectorDataUpsertArgs>(args: SelectSubset<T, SectorDataUpsertArgs<ExtArgs>>): Prisma__SectorDataClient<$Result.GetResult<Prisma.$SectorDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataCountArgs} args - Arguments to filter SectorData to count.
     * @example
     * // Count the number of SectorData
     * const count = await prisma.sectorData.count({
     *   where: {
     *     // ... the filter for the SectorData we want to count
     *   }
     * })
    **/
    count<T extends SectorDataCountArgs>(
      args?: Subset<T, SectorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectorDataAggregateArgs>(args: Subset<T, SectorDataAggregateArgs>): Prisma.PrismaPromise<GetSectorDataAggregateType<T>>

    /**
     * Group by SectorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorDataGroupByArgs['orderBy'] }
        : { orderBy?: SectorDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectorData model
   */
  readonly fields: SectorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sector<T extends SectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectorDefaultArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectorData model
   */
  interface SectorDataFieldRefs {
    readonly id: FieldRef<"SectorData", 'String'>
    readonly countryId: FieldRef<"SectorData", 'String'>
    readonly sectorId: FieldRef<"SectorData", 'String'>
    readonly gdpValue: FieldRef<"SectorData", 'Float'>
    readonly exportValue: FieldRef<"SectorData", 'Float'>
    readonly importValue: FieldRef<"SectorData", 'Float'>
    readonly employment: FieldRef<"SectorData", 'Int'>
    readonly year: FieldRef<"SectorData", 'Int'>
    readonly quarter: FieldRef<"SectorData", 'Int'>
    readonly createdAt: FieldRef<"SectorData", 'DateTime'>
    readonly updatedAt: FieldRef<"SectorData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SectorData findUnique
   */
  export type SectorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * Filter, which SectorData to fetch.
     */
    where: SectorDataWhereUniqueInput
  }

  /**
   * SectorData findUniqueOrThrow
   */
  export type SectorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * Filter, which SectorData to fetch.
     */
    where: SectorDataWhereUniqueInput
  }

  /**
   * SectorData findFirst
   */
  export type SectorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * Filter, which SectorData to fetch.
     */
    where?: SectorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorData to fetch.
     */
    orderBy?: SectorDataOrderByWithRelationInput | SectorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectorData.
     */
    cursor?: SectorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectorData.
     */
    distinct?: SectorDataScalarFieldEnum | SectorDataScalarFieldEnum[]
  }

  /**
   * SectorData findFirstOrThrow
   */
  export type SectorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * Filter, which SectorData to fetch.
     */
    where?: SectorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorData to fetch.
     */
    orderBy?: SectorDataOrderByWithRelationInput | SectorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectorData.
     */
    cursor?: SectorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectorData.
     */
    distinct?: SectorDataScalarFieldEnum | SectorDataScalarFieldEnum[]
  }

  /**
   * SectorData findMany
   */
  export type SectorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * Filter, which SectorData to fetch.
     */
    where?: SectorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectorData to fetch.
     */
    orderBy?: SectorDataOrderByWithRelationInput | SectorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectorData.
     */
    cursor?: SectorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectorData.
     */
    skip?: number
    distinct?: SectorDataScalarFieldEnum | SectorDataScalarFieldEnum[]
  }

  /**
   * SectorData create
   */
  export type SectorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SectorData.
     */
    data: XOR<SectorDataCreateInput, SectorDataUncheckedCreateInput>
  }

  /**
   * SectorData createMany
   */
  export type SectorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectorData.
     */
    data: SectorDataCreateManyInput | SectorDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectorData createManyAndReturn
   */
  export type SectorDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * The data used to create many SectorData.
     */
    data: SectorDataCreateManyInput | SectorDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectorData update
   */
  export type SectorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SectorData.
     */
    data: XOR<SectorDataUpdateInput, SectorDataUncheckedUpdateInput>
    /**
     * Choose, which SectorData to update.
     */
    where: SectorDataWhereUniqueInput
  }

  /**
   * SectorData updateMany
   */
  export type SectorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectorData.
     */
    data: XOR<SectorDataUpdateManyMutationInput, SectorDataUncheckedUpdateManyInput>
    /**
     * Filter which SectorData to update
     */
    where?: SectorDataWhereInput
    /**
     * Limit how many SectorData to update.
     */
    limit?: number
  }

  /**
   * SectorData updateManyAndReturn
   */
  export type SectorDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * The data used to update SectorData.
     */
    data: XOR<SectorDataUpdateManyMutationInput, SectorDataUncheckedUpdateManyInput>
    /**
     * Filter which SectorData to update
     */
    where?: SectorDataWhereInput
    /**
     * Limit how many SectorData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectorData upsert
   */
  export type SectorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SectorData to update in case it exists.
     */
    where: SectorDataWhereUniqueInput
    /**
     * In case the SectorData found by the `where` argument doesn't exist, create a new SectorData with this data.
     */
    create: XOR<SectorDataCreateInput, SectorDataUncheckedCreateInput>
    /**
     * In case the SectorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorDataUpdateInput, SectorDataUncheckedUpdateInput>
  }

  /**
   * SectorData delete
   */
  export type SectorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
    /**
     * Filter which SectorData to delete.
     */
    where: SectorDataWhereUniqueInput
  }

  /**
   * SectorData deleteMany
   */
  export type SectorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectorData to delete
     */
    where?: SectorDataWhereInput
    /**
     * Limit how many SectorData to delete.
     */
    limit?: number
  }

  /**
   * SectorData without action
   */
  export type SectorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorData
     */
    select?: SectorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectorData
     */
    omit?: SectorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorDataInclude<ExtArgs> | null
  }


  /**
   * Model StockMarket
   */

  export type AggregateStockMarket = {
    _count: StockMarketCountAggregateOutputType | null
    _min: StockMarketMinAggregateOutputType | null
    _max: StockMarketMaxAggregateOutputType | null
  }

  export type StockMarketMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    country: string | null
  }

  export type StockMarketMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    country: string | null
  }

  export type StockMarketCountAggregateOutputType = {
    id: number
    name: number
    code: number
    country: number
    _all: number
  }


  export type StockMarketMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
  }

  export type StockMarketMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
  }

  export type StockMarketCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    _all?: true
  }

  export type StockMarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMarket to aggregate.
     */
    where?: StockMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMarkets to fetch.
     */
    orderBy?: StockMarketOrderByWithRelationInput | StockMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMarkets
    **/
    _count?: true | StockMarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMarketMaxAggregateInputType
  }

  export type GetStockMarketAggregateType<T extends StockMarketAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMarket[P]>
      : GetScalarType<T[P], AggregateStockMarket[P]>
  }




  export type StockMarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMarketWhereInput
    orderBy?: StockMarketOrderByWithAggregationInput | StockMarketOrderByWithAggregationInput[]
    by: StockMarketScalarFieldEnum[] | StockMarketScalarFieldEnum
    having?: StockMarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMarketCountAggregateInputType | true
    _min?: StockMarketMinAggregateInputType
    _max?: StockMarketMaxAggregateInputType
  }

  export type StockMarketGroupByOutputType = {
    id: string
    name: string
    code: string
    country: string
    _count: StockMarketCountAggregateOutputType | null
    _min: StockMarketMinAggregateOutputType | null
    _max: StockMarketMaxAggregateOutputType | null
  }

  type GetStockMarketGroupByPayload<T extends StockMarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMarketGroupByOutputType[P]>
            : GetScalarType<T[P], StockMarketGroupByOutputType[P]>
        }
      >
    >


  export type StockMarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    stocks?: boolean | StockMarket$stocksArgs<ExtArgs>
    impacts?: boolean | StockMarket$impactsArgs<ExtArgs>
    _count?: boolean | StockMarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMarket"]>

  export type StockMarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
  }, ExtArgs["result"]["stockMarket"]>

  export type StockMarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
  }, ExtArgs["result"]["stockMarket"]>

  export type StockMarketSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
  }

  export type StockMarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "country", ExtArgs["result"]["stockMarket"]>
  export type StockMarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | StockMarket$stocksArgs<ExtArgs>
    impacts?: boolean | StockMarket$impactsArgs<ExtArgs>
    _count?: boolean | StockMarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockMarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StockMarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StockMarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMarket"
    objects: {
      stocks: Prisma.$StockPayload<ExtArgs>[]
      impacts: Prisma.$StockImpactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      country: string
    }, ExtArgs["result"]["stockMarket"]>
    composites: {}
  }

  type StockMarketGetPayload<S extends boolean | null | undefined | StockMarketDefaultArgs> = $Result.GetResult<Prisma.$StockMarketPayload, S>

  type StockMarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMarketCountAggregateInputType | true
    }

  export interface StockMarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMarket'], meta: { name: 'StockMarket' } }
    /**
     * Find zero or one StockMarket that matches the filter.
     * @param {StockMarketFindUniqueArgs} args - Arguments to find a StockMarket
     * @example
     * // Get one StockMarket
     * const stockMarket = await prisma.stockMarket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMarketFindUniqueArgs>(args: SelectSubset<T, StockMarketFindUniqueArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMarket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMarketFindUniqueOrThrowArgs} args - Arguments to find a StockMarket
     * @example
     * // Get one StockMarket
     * const stockMarket = await prisma.stockMarket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMarketFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMarket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketFindFirstArgs} args - Arguments to find a StockMarket
     * @example
     * // Get one StockMarket
     * const stockMarket = await prisma.stockMarket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMarketFindFirstArgs>(args?: SelectSubset<T, StockMarketFindFirstArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMarket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketFindFirstOrThrowArgs} args - Arguments to find a StockMarket
     * @example
     * // Get one StockMarket
     * const stockMarket = await prisma.stockMarket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMarketFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMarkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMarkets
     * const stockMarkets = await prisma.stockMarket.findMany()
     * 
     * // Get first 10 StockMarkets
     * const stockMarkets = await prisma.stockMarket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMarketWithIdOnly = await prisma.stockMarket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMarketFindManyArgs>(args?: SelectSubset<T, StockMarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMarket.
     * @param {StockMarketCreateArgs} args - Arguments to create a StockMarket.
     * @example
     * // Create one StockMarket
     * const StockMarket = await prisma.stockMarket.create({
     *   data: {
     *     // ... data to create a StockMarket
     *   }
     * })
     * 
     */
    create<T extends StockMarketCreateArgs>(args: SelectSubset<T, StockMarketCreateArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMarkets.
     * @param {StockMarketCreateManyArgs} args - Arguments to create many StockMarkets.
     * @example
     * // Create many StockMarkets
     * const stockMarket = await prisma.stockMarket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMarketCreateManyArgs>(args?: SelectSubset<T, StockMarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMarkets and returns the data saved in the database.
     * @param {StockMarketCreateManyAndReturnArgs} args - Arguments to create many StockMarkets.
     * @example
     * // Create many StockMarkets
     * const stockMarket = await prisma.stockMarket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMarkets and only return the `id`
     * const stockMarketWithIdOnly = await prisma.stockMarket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMarketCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockMarket.
     * @param {StockMarketDeleteArgs} args - Arguments to delete one StockMarket.
     * @example
     * // Delete one StockMarket
     * const StockMarket = await prisma.stockMarket.delete({
     *   where: {
     *     // ... filter to delete one StockMarket
     *   }
     * })
     * 
     */
    delete<T extends StockMarketDeleteArgs>(args: SelectSubset<T, StockMarketDeleteArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMarket.
     * @param {StockMarketUpdateArgs} args - Arguments to update one StockMarket.
     * @example
     * // Update one StockMarket
     * const stockMarket = await prisma.stockMarket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMarketUpdateArgs>(args: SelectSubset<T, StockMarketUpdateArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMarkets.
     * @param {StockMarketDeleteManyArgs} args - Arguments to filter StockMarkets to delete.
     * @example
     * // Delete a few StockMarkets
     * const { count } = await prisma.stockMarket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMarketDeleteManyArgs>(args?: SelectSubset<T, StockMarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMarkets
     * const stockMarket = await prisma.stockMarket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMarketUpdateManyArgs>(args: SelectSubset<T, StockMarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMarkets and returns the data updated in the database.
     * @param {StockMarketUpdateManyAndReturnArgs} args - Arguments to update many StockMarkets.
     * @example
     * // Update many StockMarkets
     * const stockMarket = await prisma.stockMarket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMarkets and only return the `id`
     * const stockMarketWithIdOnly = await prisma.stockMarket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockMarketUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockMarket.
     * @param {StockMarketUpsertArgs} args - Arguments to update or create a StockMarket.
     * @example
     * // Update or create a StockMarket
     * const stockMarket = await prisma.stockMarket.upsert({
     *   create: {
     *     // ... data to create a StockMarket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMarket we want to update
     *   }
     * })
     */
    upsert<T extends StockMarketUpsertArgs>(args: SelectSubset<T, StockMarketUpsertArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketCountArgs} args - Arguments to filter StockMarkets to count.
     * @example
     * // Count the number of StockMarkets
     * const count = await prisma.stockMarket.count({
     *   where: {
     *     // ... the filter for the StockMarkets we want to count
     *   }
     * })
    **/
    count<T extends StockMarketCountArgs>(
      args?: Subset<T, StockMarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockMarketAggregateArgs>(args: Subset<T, StockMarketAggregateArgs>): Prisma.PrismaPromise<GetStockMarketAggregateType<T>>

    /**
     * Group by StockMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockMarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMarketGroupByArgs['orderBy'] }
        : { orderBy?: StockMarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockMarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMarket model
   */
  readonly fields: StockMarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMarket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stocks<T extends StockMarket$stocksArgs<ExtArgs> = {}>(args?: Subset<T, StockMarket$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    impacts<T extends StockMarket$impactsArgs<ExtArgs> = {}>(args?: Subset<T, StockMarket$impactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockMarket model
   */
  interface StockMarketFieldRefs {
    readonly id: FieldRef<"StockMarket", 'String'>
    readonly name: FieldRef<"StockMarket", 'String'>
    readonly code: FieldRef<"StockMarket", 'String'>
    readonly country: FieldRef<"StockMarket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockMarket findUnique
   */
  export type StockMarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * Filter, which StockMarket to fetch.
     */
    where: StockMarketWhereUniqueInput
  }

  /**
   * StockMarket findUniqueOrThrow
   */
  export type StockMarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * Filter, which StockMarket to fetch.
     */
    where: StockMarketWhereUniqueInput
  }

  /**
   * StockMarket findFirst
   */
  export type StockMarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * Filter, which StockMarket to fetch.
     */
    where?: StockMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMarkets to fetch.
     */
    orderBy?: StockMarketOrderByWithRelationInput | StockMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMarkets.
     */
    cursor?: StockMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMarkets.
     */
    distinct?: StockMarketScalarFieldEnum | StockMarketScalarFieldEnum[]
  }

  /**
   * StockMarket findFirstOrThrow
   */
  export type StockMarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * Filter, which StockMarket to fetch.
     */
    where?: StockMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMarkets to fetch.
     */
    orderBy?: StockMarketOrderByWithRelationInput | StockMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMarkets.
     */
    cursor?: StockMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMarkets.
     */
    distinct?: StockMarketScalarFieldEnum | StockMarketScalarFieldEnum[]
  }

  /**
   * StockMarket findMany
   */
  export type StockMarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * Filter, which StockMarkets to fetch.
     */
    where?: StockMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMarkets to fetch.
     */
    orderBy?: StockMarketOrderByWithRelationInput | StockMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMarkets.
     */
    cursor?: StockMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMarkets.
     */
    skip?: number
    distinct?: StockMarketScalarFieldEnum | StockMarketScalarFieldEnum[]
  }

  /**
   * StockMarket create
   */
  export type StockMarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMarket.
     */
    data: XOR<StockMarketCreateInput, StockMarketUncheckedCreateInput>
  }

  /**
   * StockMarket createMany
   */
  export type StockMarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMarkets.
     */
    data: StockMarketCreateManyInput | StockMarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMarket createManyAndReturn
   */
  export type StockMarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * The data used to create many StockMarkets.
     */
    data: StockMarketCreateManyInput | StockMarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMarket update
   */
  export type StockMarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMarket.
     */
    data: XOR<StockMarketUpdateInput, StockMarketUncheckedUpdateInput>
    /**
     * Choose, which StockMarket to update.
     */
    where: StockMarketWhereUniqueInput
  }

  /**
   * StockMarket updateMany
   */
  export type StockMarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMarkets.
     */
    data: XOR<StockMarketUpdateManyMutationInput, StockMarketUncheckedUpdateManyInput>
    /**
     * Filter which StockMarkets to update
     */
    where?: StockMarketWhereInput
    /**
     * Limit how many StockMarkets to update.
     */
    limit?: number
  }

  /**
   * StockMarket updateManyAndReturn
   */
  export type StockMarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * The data used to update StockMarkets.
     */
    data: XOR<StockMarketUpdateManyMutationInput, StockMarketUncheckedUpdateManyInput>
    /**
     * Filter which StockMarkets to update
     */
    where?: StockMarketWhereInput
    /**
     * Limit how many StockMarkets to update.
     */
    limit?: number
  }

  /**
   * StockMarket upsert
   */
  export type StockMarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMarket to update in case it exists.
     */
    where: StockMarketWhereUniqueInput
    /**
     * In case the StockMarket found by the `where` argument doesn't exist, create a new StockMarket with this data.
     */
    create: XOR<StockMarketCreateInput, StockMarketUncheckedCreateInput>
    /**
     * In case the StockMarket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMarketUpdateInput, StockMarketUncheckedUpdateInput>
  }

  /**
   * StockMarket delete
   */
  export type StockMarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
    /**
     * Filter which StockMarket to delete.
     */
    where: StockMarketWhereUniqueInput
  }

  /**
   * StockMarket deleteMany
   */
  export type StockMarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMarkets to delete
     */
    where?: StockMarketWhereInput
    /**
     * Limit how many StockMarkets to delete.
     */
    limit?: number
  }

  /**
   * StockMarket.stocks
   */
  export type StockMarket$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * StockMarket.impacts
   */
  export type StockMarket$impactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    where?: StockImpactWhereInput
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    cursor?: StockImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockImpactScalarFieldEnum | StockImpactScalarFieldEnum[]
  }

  /**
   * StockMarket without action
   */
  export type StockMarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMarket
     */
    select?: StockMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMarket
     */
    omit?: StockMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMarketInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    currentPrice: number | null
  }

  export type StockSumAggregateOutputType = {
    currentPrice: number | null
  }

  export type StockMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    marketId: string | null
    sector: string | null
    currentPrice: number | null
  }

  export type StockMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    marketId: string | null
    sector: string | null
    currentPrice: number | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    marketId: number
    sector: number
    currentPrice: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    currentPrice?: true
  }

  export type StockSumAggregateInputType = {
    currentPrice?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    marketId?: true
    sector?: true
    currentPrice?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    marketId?: true
    sector?: true
    currentPrice?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    marketId?: true
    sector?: true
    currentPrice?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: string
    symbol: string
    name: string
    marketId: string
    sector: string
    currentPrice: number
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    marketId?: boolean
    sector?: boolean
    currentPrice?: boolean
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
    priceHistory?: boolean | Stock$priceHistoryArgs<ExtArgs>
    impacts?: boolean | Stock$impactsArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    marketId?: boolean
    sector?: boolean
    currentPrice?: boolean
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    marketId?: boolean
    sector?: boolean
    currentPrice?: boolean
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    marketId?: boolean
    sector?: boolean
    currentPrice?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "marketId" | "sector" | "currentPrice", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
    priceHistory?: boolean | Stock$priceHistoryArgs<ExtArgs>
    impacts?: boolean | Stock$impactsArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }
  export type StockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      market: Prisma.$StockMarketPayload<ExtArgs>
      priceHistory: Prisma.$StockPricePayload<ExtArgs>[]
      impacts: Prisma.$StockImpactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      name: string
      marketId: string
      sector: string
      currentPrice: number
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends StockMarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockMarketDefaultArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    priceHistory<T extends Stock$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Stock$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    impacts<T extends Stock$impactsArgs<ExtArgs> = {}>(args?: Subset<T, Stock$impactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'String'>
    readonly symbol: FieldRef<"Stock", 'String'>
    readonly name: FieldRef<"Stock", 'String'>
    readonly marketId: FieldRef<"Stock", 'String'>
    readonly sector: FieldRef<"Stock", 'String'>
    readonly currentPrice: FieldRef<"Stock", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock.priceHistory
   */
  export type Stock$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    where?: StockPriceWhereInput
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    cursor?: StockPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * Stock.impacts
   */
  export type Stock$impactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    where?: StockImpactWhereInput
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    cursor?: StockImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockImpactScalarFieldEnum | StockImpactScalarFieldEnum[]
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model StockPrice
   */

  export type AggregateStockPrice = {
    _count: StockPriceCountAggregateOutputType | null
    _avg: StockPriceAvgAggregateOutputType | null
    _sum: StockPriceSumAggregateOutputType | null
    _min: StockPriceMinAggregateOutputType | null
    _max: StockPriceMaxAggregateOutputType | null
  }

  export type StockPriceAvgAggregateOutputType = {
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    closePrice: number | null
    volume: number | null
  }

  export type StockPriceSumAggregateOutputType = {
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    closePrice: number | null
    volume: number | null
  }

  export type StockPriceMinAggregateOutputType = {
    id: string | null
    stockId: string | null
    date: Date | null
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    closePrice: number | null
    volume: number | null
    createdAt: Date | null
  }

  export type StockPriceMaxAggregateOutputType = {
    id: string | null
    stockId: string | null
    date: Date | null
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    closePrice: number | null
    volume: number | null
    createdAt: Date | null
  }

  export type StockPriceCountAggregateOutputType = {
    id: number
    stockId: number
    date: number
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt: number
    _all: number
  }


  export type StockPriceAvgAggregateInputType = {
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    volume?: true
  }

  export type StockPriceSumAggregateInputType = {
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    volume?: true
  }

  export type StockPriceMinAggregateInputType = {
    id?: true
    stockId?: true
    date?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    volume?: true
    createdAt?: true
  }

  export type StockPriceMaxAggregateInputType = {
    id?: true
    stockId?: true
    date?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    volume?: true
    createdAt?: true
  }

  export type StockPriceCountAggregateInputType = {
    id?: true
    stockId?: true
    date?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    volume?: true
    createdAt?: true
    _all?: true
  }

  export type StockPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockPrice to aggregate.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockPrices
    **/
    _count?: true | StockPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockPriceMaxAggregateInputType
  }

  export type GetStockPriceAggregateType<T extends StockPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateStockPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockPrice[P]>
      : GetScalarType<T[P], AggregateStockPrice[P]>
  }




  export type StockPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockPriceWhereInput
    orderBy?: StockPriceOrderByWithAggregationInput | StockPriceOrderByWithAggregationInput[]
    by: StockPriceScalarFieldEnum[] | StockPriceScalarFieldEnum
    having?: StockPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockPriceCountAggregateInputType | true
    _avg?: StockPriceAvgAggregateInputType
    _sum?: StockPriceSumAggregateInputType
    _min?: StockPriceMinAggregateInputType
    _max?: StockPriceMaxAggregateInputType
  }

  export type StockPriceGroupByOutputType = {
    id: string
    stockId: string
    date: Date
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt: Date
    _count: StockPriceCountAggregateOutputType | null
    _avg: StockPriceAvgAggregateOutputType | null
    _sum: StockPriceSumAggregateOutputType | null
    _min: StockPriceMinAggregateOutputType | null
    _max: StockPriceMaxAggregateOutputType | null
  }

  type GetStockPriceGroupByPayload<T extends StockPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockPriceGroupByOutputType[P]>
            : GetScalarType<T[P], StockPriceGroupByOutputType[P]>
        }
      >
    >


  export type StockPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    date?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    volume?: boolean
    createdAt?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPrice"]>

  export type StockPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    date?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    volume?: boolean
    createdAt?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPrice"]>

  export type StockPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    date?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    volume?: boolean
    createdAt?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPrice"]>

  export type StockPriceSelectScalar = {
    id?: boolean
    stockId?: boolean
    date?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    volume?: boolean
    createdAt?: boolean
  }

  export type StockPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stockId" | "date" | "openPrice" | "highPrice" | "lowPrice" | "closePrice" | "volume" | "createdAt", ExtArgs["result"]["stockPrice"]>
  export type StockPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type StockPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type StockPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }

  export type $StockPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockPrice"
    objects: {
      stock: Prisma.$StockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockId: string
      date: Date
      openPrice: number
      highPrice: number
      lowPrice: number
      closePrice: number
      volume: number
      createdAt: Date
    }, ExtArgs["result"]["stockPrice"]>
    composites: {}
  }

  type StockPriceGetPayload<S extends boolean | null | undefined | StockPriceDefaultArgs> = $Result.GetResult<Prisma.$StockPricePayload, S>

  type StockPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockPriceCountAggregateInputType | true
    }

  export interface StockPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockPrice'], meta: { name: 'StockPrice' } }
    /**
     * Find zero or one StockPrice that matches the filter.
     * @param {StockPriceFindUniqueArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockPriceFindUniqueArgs>(args: SelectSubset<T, StockPriceFindUniqueArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockPriceFindUniqueOrThrowArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, StockPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceFindFirstArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockPriceFindFirstArgs>(args?: SelectSubset<T, StockPriceFindFirstArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceFindFirstOrThrowArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, StockPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockPrices
     * const stockPrices = await prisma.stockPrice.findMany()
     * 
     * // Get first 10 StockPrices
     * const stockPrices = await prisma.stockPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockPriceWithIdOnly = await prisma.stockPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockPriceFindManyArgs>(args?: SelectSubset<T, StockPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockPrice.
     * @param {StockPriceCreateArgs} args - Arguments to create a StockPrice.
     * @example
     * // Create one StockPrice
     * const StockPrice = await prisma.stockPrice.create({
     *   data: {
     *     // ... data to create a StockPrice
     *   }
     * })
     * 
     */
    create<T extends StockPriceCreateArgs>(args: SelectSubset<T, StockPriceCreateArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockPrices.
     * @param {StockPriceCreateManyArgs} args - Arguments to create many StockPrices.
     * @example
     * // Create many StockPrices
     * const stockPrice = await prisma.stockPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockPriceCreateManyArgs>(args?: SelectSubset<T, StockPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockPrices and returns the data saved in the database.
     * @param {StockPriceCreateManyAndReturnArgs} args - Arguments to create many StockPrices.
     * @example
     * // Create many StockPrices
     * const stockPrice = await prisma.stockPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockPrices and only return the `id`
     * const stockPriceWithIdOnly = await prisma.stockPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, StockPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockPrice.
     * @param {StockPriceDeleteArgs} args - Arguments to delete one StockPrice.
     * @example
     * // Delete one StockPrice
     * const StockPrice = await prisma.stockPrice.delete({
     *   where: {
     *     // ... filter to delete one StockPrice
     *   }
     * })
     * 
     */
    delete<T extends StockPriceDeleteArgs>(args: SelectSubset<T, StockPriceDeleteArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockPrice.
     * @param {StockPriceUpdateArgs} args - Arguments to update one StockPrice.
     * @example
     * // Update one StockPrice
     * const stockPrice = await prisma.stockPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockPriceUpdateArgs>(args: SelectSubset<T, StockPriceUpdateArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockPrices.
     * @param {StockPriceDeleteManyArgs} args - Arguments to filter StockPrices to delete.
     * @example
     * // Delete a few StockPrices
     * const { count } = await prisma.stockPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockPriceDeleteManyArgs>(args?: SelectSubset<T, StockPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockPrices
     * const stockPrice = await prisma.stockPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockPriceUpdateManyArgs>(args: SelectSubset<T, StockPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockPrices and returns the data updated in the database.
     * @param {StockPriceUpdateManyAndReturnArgs} args - Arguments to update many StockPrices.
     * @example
     * // Update many StockPrices
     * const stockPrice = await prisma.stockPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockPrices and only return the `id`
     * const stockPriceWithIdOnly = await prisma.stockPrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, StockPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockPrice.
     * @param {StockPriceUpsertArgs} args - Arguments to update or create a StockPrice.
     * @example
     * // Update or create a StockPrice
     * const stockPrice = await prisma.stockPrice.upsert({
     *   create: {
     *     // ... data to create a StockPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockPrice we want to update
     *   }
     * })
     */
    upsert<T extends StockPriceUpsertArgs>(args: SelectSubset<T, StockPriceUpsertArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceCountArgs} args - Arguments to filter StockPrices to count.
     * @example
     * // Count the number of StockPrices
     * const count = await prisma.stockPrice.count({
     *   where: {
     *     // ... the filter for the StockPrices we want to count
     *   }
     * })
    **/
    count<T extends StockPriceCountArgs>(
      args?: Subset<T, StockPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockPriceAggregateArgs>(args: Subset<T, StockPriceAggregateArgs>): Prisma.PrismaPromise<GetStockPriceAggregateType<T>>

    /**
     * Group by StockPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockPriceGroupByArgs['orderBy'] }
        : { orderBy?: StockPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockPrice model
   */
  readonly fields: StockPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockPrice model
   */
  interface StockPriceFieldRefs {
    readonly id: FieldRef<"StockPrice", 'String'>
    readonly stockId: FieldRef<"StockPrice", 'String'>
    readonly date: FieldRef<"StockPrice", 'DateTime'>
    readonly openPrice: FieldRef<"StockPrice", 'Float'>
    readonly highPrice: FieldRef<"StockPrice", 'Float'>
    readonly lowPrice: FieldRef<"StockPrice", 'Float'>
    readonly closePrice: FieldRef<"StockPrice", 'Float'>
    readonly volume: FieldRef<"StockPrice", 'Int'>
    readonly createdAt: FieldRef<"StockPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockPrice findUnique
   */
  export type StockPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice findUniqueOrThrow
   */
  export type StockPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice findFirst
   */
  export type StockPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockPrices.
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockPrices.
     */
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * StockPrice findFirstOrThrow
   */
  export type StockPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockPrices.
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockPrices.
     */
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * StockPrice findMany
   */
  export type StockPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrices to fetch.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockPrices.
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * StockPrice create
   */
  export type StockPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a StockPrice.
     */
    data: XOR<StockPriceCreateInput, StockPriceUncheckedCreateInput>
  }

  /**
   * StockPrice createMany
   */
  export type StockPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockPrices.
     */
    data: StockPriceCreateManyInput | StockPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockPrice createManyAndReturn
   */
  export type StockPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * The data used to create many StockPrices.
     */
    data: StockPriceCreateManyInput | StockPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockPrice update
   */
  export type StockPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a StockPrice.
     */
    data: XOR<StockPriceUpdateInput, StockPriceUncheckedUpdateInput>
    /**
     * Choose, which StockPrice to update.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice updateMany
   */
  export type StockPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockPrices.
     */
    data: XOR<StockPriceUpdateManyMutationInput, StockPriceUncheckedUpdateManyInput>
    /**
     * Filter which StockPrices to update
     */
    where?: StockPriceWhereInput
    /**
     * Limit how many StockPrices to update.
     */
    limit?: number
  }

  /**
   * StockPrice updateManyAndReturn
   */
  export type StockPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * The data used to update StockPrices.
     */
    data: XOR<StockPriceUpdateManyMutationInput, StockPriceUncheckedUpdateManyInput>
    /**
     * Filter which StockPrices to update
     */
    where?: StockPriceWhereInput
    /**
     * Limit how many StockPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockPrice upsert
   */
  export type StockPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the StockPrice to update in case it exists.
     */
    where: StockPriceWhereUniqueInput
    /**
     * In case the StockPrice found by the `where` argument doesn't exist, create a new StockPrice with this data.
     */
    create: XOR<StockPriceCreateInput, StockPriceUncheckedCreateInput>
    /**
     * In case the StockPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockPriceUpdateInput, StockPriceUncheckedUpdateInput>
  }

  /**
   * StockPrice delete
   */
  export type StockPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter which StockPrice to delete.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice deleteMany
   */
  export type StockPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockPrices to delete
     */
    where?: StockPriceWhereInput
    /**
     * Limit how many StockPrices to delete.
     */
    limit?: number
  }

  /**
   * StockPrice without action
   */
  export type StockPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
  }


  /**
   * Model StockImpact
   */

  export type AggregateStockImpact = {
    _count: StockImpactCountAggregateOutputType | null
    _avg: StockImpactAvgAggregateOutputType | null
    _sum: StockImpactSumAggregateOutputType | null
    _min: StockImpactMinAggregateOutputType | null
    _max: StockImpactMaxAggregateOutputType | null
  }

  export type StockImpactAvgAggregateOutputType = {
    priceChangePct: number | null
    volumeChangePct: number | null
    correlationScore: number | null
  }

  export type StockImpactSumAggregateOutputType = {
    priceChangePct: number | null
    volumeChangePct: number | null
    correlationScore: number | null
  }

  export type StockImpactMinAggregateOutputType = {
    id: string | null
    tariffEventId: string | null
    stockId: string | null
    marketId: string | null
    priceChangePct: number | null
    volumeChangePct: number | null
    correlationScore: number | null
    analysisText: string | null
    createdAt: Date | null
  }

  export type StockImpactMaxAggregateOutputType = {
    id: string | null
    tariffEventId: string | null
    stockId: string | null
    marketId: string | null
    priceChangePct: number | null
    volumeChangePct: number | null
    correlationScore: number | null
    analysisText: string | null
    createdAt: Date | null
  }

  export type StockImpactCountAggregateOutputType = {
    id: number
    tariffEventId: number
    stockId: number
    marketId: number
    priceChangePct: number
    volumeChangePct: number
    correlationScore: number
    analysisText: number
    createdAt: number
    _all: number
  }


  export type StockImpactAvgAggregateInputType = {
    priceChangePct?: true
    volumeChangePct?: true
    correlationScore?: true
  }

  export type StockImpactSumAggregateInputType = {
    priceChangePct?: true
    volumeChangePct?: true
    correlationScore?: true
  }

  export type StockImpactMinAggregateInputType = {
    id?: true
    tariffEventId?: true
    stockId?: true
    marketId?: true
    priceChangePct?: true
    volumeChangePct?: true
    correlationScore?: true
    analysisText?: true
    createdAt?: true
  }

  export type StockImpactMaxAggregateInputType = {
    id?: true
    tariffEventId?: true
    stockId?: true
    marketId?: true
    priceChangePct?: true
    volumeChangePct?: true
    correlationScore?: true
    analysisText?: true
    createdAt?: true
  }

  export type StockImpactCountAggregateInputType = {
    id?: true
    tariffEventId?: true
    stockId?: true
    marketId?: true
    priceChangePct?: true
    volumeChangePct?: true
    correlationScore?: true
    analysisText?: true
    createdAt?: true
    _all?: true
  }

  export type StockImpactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockImpact to aggregate.
     */
    where?: StockImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockImpacts to fetch.
     */
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockImpacts
    **/
    _count?: true | StockImpactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockImpactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockImpactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockImpactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockImpactMaxAggregateInputType
  }

  export type GetStockImpactAggregateType<T extends StockImpactAggregateArgs> = {
        [P in keyof T & keyof AggregateStockImpact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockImpact[P]>
      : GetScalarType<T[P], AggregateStockImpact[P]>
  }




  export type StockImpactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockImpactWhereInput
    orderBy?: StockImpactOrderByWithAggregationInput | StockImpactOrderByWithAggregationInput[]
    by: StockImpactScalarFieldEnum[] | StockImpactScalarFieldEnum
    having?: StockImpactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockImpactCountAggregateInputType | true
    _avg?: StockImpactAvgAggregateInputType
    _sum?: StockImpactSumAggregateInputType
    _min?: StockImpactMinAggregateInputType
    _max?: StockImpactMaxAggregateInputType
  }

  export type StockImpactGroupByOutputType = {
    id: string
    tariffEventId: string
    stockId: string
    marketId: string
    priceChangePct: number
    volumeChangePct: number | null
    correlationScore: number | null
    analysisText: string | null
    createdAt: Date
    _count: StockImpactCountAggregateOutputType | null
    _avg: StockImpactAvgAggregateOutputType | null
    _sum: StockImpactSumAggregateOutputType | null
    _min: StockImpactMinAggregateOutputType | null
    _max: StockImpactMaxAggregateOutputType | null
  }

  type GetStockImpactGroupByPayload<T extends StockImpactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockImpactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockImpactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockImpactGroupByOutputType[P]>
            : GetScalarType<T[P], StockImpactGroupByOutputType[P]>
        }
      >
    >


  export type StockImpactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tariffEventId?: boolean
    stockId?: boolean
    marketId?: boolean
    priceChangePct?: boolean
    volumeChangePct?: boolean
    correlationScore?: boolean
    analysisText?: boolean
    createdAt?: boolean
    tariffEvent?: boolean | TariffEventDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockImpact"]>

  export type StockImpactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tariffEventId?: boolean
    stockId?: boolean
    marketId?: boolean
    priceChangePct?: boolean
    volumeChangePct?: boolean
    correlationScore?: boolean
    analysisText?: boolean
    createdAt?: boolean
    tariffEvent?: boolean | TariffEventDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockImpact"]>

  export type StockImpactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tariffEventId?: boolean
    stockId?: boolean
    marketId?: boolean
    priceChangePct?: boolean
    volumeChangePct?: boolean
    correlationScore?: boolean
    analysisText?: boolean
    createdAt?: boolean
    tariffEvent?: boolean | TariffEventDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockImpact"]>

  export type StockImpactSelectScalar = {
    id?: boolean
    tariffEventId?: boolean
    stockId?: boolean
    marketId?: boolean
    priceChangePct?: boolean
    volumeChangePct?: boolean
    correlationScore?: boolean
    analysisText?: boolean
    createdAt?: boolean
  }

  export type StockImpactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tariffEventId" | "stockId" | "marketId" | "priceChangePct" | "volumeChangePct" | "correlationScore" | "analysisText" | "createdAt", ExtArgs["result"]["stockImpact"]>
  export type StockImpactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffEvent?: boolean | TariffEventDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }
  export type StockImpactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffEvent?: boolean | TariffEventDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }
  export type StockImpactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffEvent?: boolean | TariffEventDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    market?: boolean | StockMarketDefaultArgs<ExtArgs>
  }

  export type $StockImpactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockImpact"
    objects: {
      tariffEvent: Prisma.$TariffEventPayload<ExtArgs>
      stock: Prisma.$StockPayload<ExtArgs>
      market: Prisma.$StockMarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tariffEventId: string
      stockId: string
      marketId: string
      priceChangePct: number
      volumeChangePct: number | null
      correlationScore: number | null
      analysisText: string | null
      createdAt: Date
    }, ExtArgs["result"]["stockImpact"]>
    composites: {}
  }

  type StockImpactGetPayload<S extends boolean | null | undefined | StockImpactDefaultArgs> = $Result.GetResult<Prisma.$StockImpactPayload, S>

  type StockImpactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockImpactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockImpactCountAggregateInputType | true
    }

  export interface StockImpactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockImpact'], meta: { name: 'StockImpact' } }
    /**
     * Find zero or one StockImpact that matches the filter.
     * @param {StockImpactFindUniqueArgs} args - Arguments to find a StockImpact
     * @example
     * // Get one StockImpact
     * const stockImpact = await prisma.stockImpact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockImpactFindUniqueArgs>(args: SelectSubset<T, StockImpactFindUniqueArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockImpact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockImpactFindUniqueOrThrowArgs} args - Arguments to find a StockImpact
     * @example
     * // Get one StockImpact
     * const stockImpact = await prisma.stockImpact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockImpactFindUniqueOrThrowArgs>(args: SelectSubset<T, StockImpactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockImpact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactFindFirstArgs} args - Arguments to find a StockImpact
     * @example
     * // Get one StockImpact
     * const stockImpact = await prisma.stockImpact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockImpactFindFirstArgs>(args?: SelectSubset<T, StockImpactFindFirstArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockImpact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactFindFirstOrThrowArgs} args - Arguments to find a StockImpact
     * @example
     * // Get one StockImpact
     * const stockImpact = await prisma.stockImpact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockImpactFindFirstOrThrowArgs>(args?: SelectSubset<T, StockImpactFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockImpacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockImpacts
     * const stockImpacts = await prisma.stockImpact.findMany()
     * 
     * // Get first 10 StockImpacts
     * const stockImpacts = await prisma.stockImpact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockImpactWithIdOnly = await prisma.stockImpact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockImpactFindManyArgs>(args?: SelectSubset<T, StockImpactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockImpact.
     * @param {StockImpactCreateArgs} args - Arguments to create a StockImpact.
     * @example
     * // Create one StockImpact
     * const StockImpact = await prisma.stockImpact.create({
     *   data: {
     *     // ... data to create a StockImpact
     *   }
     * })
     * 
     */
    create<T extends StockImpactCreateArgs>(args: SelectSubset<T, StockImpactCreateArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockImpacts.
     * @param {StockImpactCreateManyArgs} args - Arguments to create many StockImpacts.
     * @example
     * // Create many StockImpacts
     * const stockImpact = await prisma.stockImpact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockImpactCreateManyArgs>(args?: SelectSubset<T, StockImpactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockImpacts and returns the data saved in the database.
     * @param {StockImpactCreateManyAndReturnArgs} args - Arguments to create many StockImpacts.
     * @example
     * // Create many StockImpacts
     * const stockImpact = await prisma.stockImpact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockImpacts and only return the `id`
     * const stockImpactWithIdOnly = await prisma.stockImpact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockImpactCreateManyAndReturnArgs>(args?: SelectSubset<T, StockImpactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockImpact.
     * @param {StockImpactDeleteArgs} args - Arguments to delete one StockImpact.
     * @example
     * // Delete one StockImpact
     * const StockImpact = await prisma.stockImpact.delete({
     *   where: {
     *     // ... filter to delete one StockImpact
     *   }
     * })
     * 
     */
    delete<T extends StockImpactDeleteArgs>(args: SelectSubset<T, StockImpactDeleteArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockImpact.
     * @param {StockImpactUpdateArgs} args - Arguments to update one StockImpact.
     * @example
     * // Update one StockImpact
     * const stockImpact = await prisma.stockImpact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockImpactUpdateArgs>(args: SelectSubset<T, StockImpactUpdateArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockImpacts.
     * @param {StockImpactDeleteManyArgs} args - Arguments to filter StockImpacts to delete.
     * @example
     * // Delete a few StockImpacts
     * const { count } = await prisma.stockImpact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockImpactDeleteManyArgs>(args?: SelectSubset<T, StockImpactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockImpacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockImpacts
     * const stockImpact = await prisma.stockImpact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockImpactUpdateManyArgs>(args: SelectSubset<T, StockImpactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockImpacts and returns the data updated in the database.
     * @param {StockImpactUpdateManyAndReturnArgs} args - Arguments to update many StockImpacts.
     * @example
     * // Update many StockImpacts
     * const stockImpact = await prisma.stockImpact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockImpacts and only return the `id`
     * const stockImpactWithIdOnly = await prisma.stockImpact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockImpactUpdateManyAndReturnArgs>(args: SelectSubset<T, StockImpactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockImpact.
     * @param {StockImpactUpsertArgs} args - Arguments to update or create a StockImpact.
     * @example
     * // Update or create a StockImpact
     * const stockImpact = await prisma.stockImpact.upsert({
     *   create: {
     *     // ... data to create a StockImpact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockImpact we want to update
     *   }
     * })
     */
    upsert<T extends StockImpactUpsertArgs>(args: SelectSubset<T, StockImpactUpsertArgs<ExtArgs>>): Prisma__StockImpactClient<$Result.GetResult<Prisma.$StockImpactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockImpacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactCountArgs} args - Arguments to filter StockImpacts to count.
     * @example
     * // Count the number of StockImpacts
     * const count = await prisma.stockImpact.count({
     *   where: {
     *     // ... the filter for the StockImpacts we want to count
     *   }
     * })
    **/
    count<T extends StockImpactCountArgs>(
      args?: Subset<T, StockImpactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockImpactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockImpact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockImpactAggregateArgs>(args: Subset<T, StockImpactAggregateArgs>): Prisma.PrismaPromise<GetStockImpactAggregateType<T>>

    /**
     * Group by StockImpact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockImpactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockImpactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockImpactGroupByArgs['orderBy'] }
        : { orderBy?: StockImpactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockImpactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockImpactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockImpact model
   */
  readonly fields: StockImpactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockImpact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockImpactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tariffEvent<T extends TariffEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TariffEventDefaultArgs<ExtArgs>>): Prisma__TariffEventClient<$Result.GetResult<Prisma.$TariffEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends StockMarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockMarketDefaultArgs<ExtArgs>>): Prisma__StockMarketClient<$Result.GetResult<Prisma.$StockMarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockImpact model
   */
  interface StockImpactFieldRefs {
    readonly id: FieldRef<"StockImpact", 'String'>
    readonly tariffEventId: FieldRef<"StockImpact", 'String'>
    readonly stockId: FieldRef<"StockImpact", 'String'>
    readonly marketId: FieldRef<"StockImpact", 'String'>
    readonly priceChangePct: FieldRef<"StockImpact", 'Float'>
    readonly volumeChangePct: FieldRef<"StockImpact", 'Float'>
    readonly correlationScore: FieldRef<"StockImpact", 'Float'>
    readonly analysisText: FieldRef<"StockImpact", 'String'>
    readonly createdAt: FieldRef<"StockImpact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockImpact findUnique
   */
  export type StockImpactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * Filter, which StockImpact to fetch.
     */
    where: StockImpactWhereUniqueInput
  }

  /**
   * StockImpact findUniqueOrThrow
   */
  export type StockImpactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * Filter, which StockImpact to fetch.
     */
    where: StockImpactWhereUniqueInput
  }

  /**
   * StockImpact findFirst
   */
  export type StockImpactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * Filter, which StockImpact to fetch.
     */
    where?: StockImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockImpacts to fetch.
     */
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockImpacts.
     */
    cursor?: StockImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockImpacts.
     */
    distinct?: StockImpactScalarFieldEnum | StockImpactScalarFieldEnum[]
  }

  /**
   * StockImpact findFirstOrThrow
   */
  export type StockImpactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * Filter, which StockImpact to fetch.
     */
    where?: StockImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockImpacts to fetch.
     */
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockImpacts.
     */
    cursor?: StockImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockImpacts.
     */
    distinct?: StockImpactScalarFieldEnum | StockImpactScalarFieldEnum[]
  }

  /**
   * StockImpact findMany
   */
  export type StockImpactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * Filter, which StockImpacts to fetch.
     */
    where?: StockImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockImpacts to fetch.
     */
    orderBy?: StockImpactOrderByWithRelationInput | StockImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockImpacts.
     */
    cursor?: StockImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockImpacts.
     */
    skip?: number
    distinct?: StockImpactScalarFieldEnum | StockImpactScalarFieldEnum[]
  }

  /**
   * StockImpact create
   */
  export type StockImpactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * The data needed to create a StockImpact.
     */
    data: XOR<StockImpactCreateInput, StockImpactUncheckedCreateInput>
  }

  /**
   * StockImpact createMany
   */
  export type StockImpactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockImpacts.
     */
    data: StockImpactCreateManyInput | StockImpactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockImpact createManyAndReturn
   */
  export type StockImpactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * The data used to create many StockImpacts.
     */
    data: StockImpactCreateManyInput | StockImpactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockImpact update
   */
  export type StockImpactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * The data needed to update a StockImpact.
     */
    data: XOR<StockImpactUpdateInput, StockImpactUncheckedUpdateInput>
    /**
     * Choose, which StockImpact to update.
     */
    where: StockImpactWhereUniqueInput
  }

  /**
   * StockImpact updateMany
   */
  export type StockImpactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockImpacts.
     */
    data: XOR<StockImpactUpdateManyMutationInput, StockImpactUncheckedUpdateManyInput>
    /**
     * Filter which StockImpacts to update
     */
    where?: StockImpactWhereInput
    /**
     * Limit how many StockImpacts to update.
     */
    limit?: number
  }

  /**
   * StockImpact updateManyAndReturn
   */
  export type StockImpactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * The data used to update StockImpacts.
     */
    data: XOR<StockImpactUpdateManyMutationInput, StockImpactUncheckedUpdateManyInput>
    /**
     * Filter which StockImpacts to update
     */
    where?: StockImpactWhereInput
    /**
     * Limit how many StockImpacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockImpact upsert
   */
  export type StockImpactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * The filter to search for the StockImpact to update in case it exists.
     */
    where: StockImpactWhereUniqueInput
    /**
     * In case the StockImpact found by the `where` argument doesn't exist, create a new StockImpact with this data.
     */
    create: XOR<StockImpactCreateInput, StockImpactUncheckedCreateInput>
    /**
     * In case the StockImpact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockImpactUpdateInput, StockImpactUncheckedUpdateInput>
  }

  /**
   * StockImpact delete
   */
  export type StockImpactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
    /**
     * Filter which StockImpact to delete.
     */
    where: StockImpactWhereUniqueInput
  }

  /**
   * StockImpact deleteMany
   */
  export type StockImpactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockImpacts to delete
     */
    where?: StockImpactWhereInput
    /**
     * Limit how many StockImpacts to delete.
     */
    limit?: number
  }

  /**
   * StockImpact without action
   */
  export type StockImpactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockImpact
     */
    select?: StockImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockImpact
     */
    omit?: StockImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockImpactInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    relevanceScore: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    relevanceScore: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    summary: string | null
    source: string | null
    author: string | null
    publishedDate: Date | null
    url: string | null
    imageUrl: string | null
    sentiment: string | null
    relevanceScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    summary: string | null
    source: string | null
    author: string | null
    publishedDate: Date | null
    url: string | null
    imageUrl: string | null
    sentiment: string | null
    relevanceScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    summary: number
    source: number
    author: number
    publishedDate: number
    url: number
    imageUrl: number
    sentiment: number
    relevanceScore: number
    keyPhrases: number
    countries: number
    sectors: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    relevanceScore?: true
  }

  export type NewsArticleSumAggregateInputType = {
    relevanceScore?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    source?: true
    author?: true
    publishedDate?: true
    url?: true
    imageUrl?: true
    sentiment?: true
    relevanceScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    source?: true
    author?: true
    publishedDate?: true
    url?: true
    imageUrl?: true
    sentiment?: true
    relevanceScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    source?: true
    author?: true
    publishedDate?: true
    url?: true
    imageUrl?: true
    sentiment?: true
    relevanceScore?: true
    keyPhrases?: true
    countries?: true
    sectors?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    title: string
    content: string
    summary: string | null
    source: string
    author: string | null
    publishedDate: Date
    url: string
    imageUrl: string | null
    sentiment: string | null
    relevanceScore: number | null
    keyPhrases: string[]
    countries: string[]
    sectors: string[]
    createdAt: Date
    updatedAt: Date
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    source?: boolean
    author?: boolean
    publishedDate?: boolean
    url?: boolean
    imageUrl?: boolean
    sentiment?: boolean
    relevanceScore?: boolean
    keyPhrases?: boolean
    countries?: boolean
    sectors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    source?: boolean
    author?: boolean
    publishedDate?: boolean
    url?: boolean
    imageUrl?: boolean
    sentiment?: boolean
    relevanceScore?: boolean
    keyPhrases?: boolean
    countries?: boolean
    sectors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    source?: boolean
    author?: boolean
    publishedDate?: boolean
    url?: boolean
    imageUrl?: boolean
    sentiment?: boolean
    relevanceScore?: boolean
    keyPhrases?: boolean
    countries?: boolean
    sectors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    source?: boolean
    author?: boolean
    publishedDate?: boolean
    url?: boolean
    imageUrl?: boolean
    sentiment?: boolean
    relevanceScore?: boolean
    keyPhrases?: boolean
    countries?: boolean
    sectors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "summary" | "source" | "author" | "publishedDate" | "url" | "imageUrl" | "sentiment" | "relevanceScore" | "keyPhrases" | "countries" | "sectors" | "createdAt" | "updatedAt", ExtArgs["result"]["newsArticle"]>

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      summary: string | null
      source: string
      author: string | null
      publishedDate: Date
      url: string
      imageUrl: string | null
      sentiment: string | null
      relevanceScore: number | null
      keyPhrases: string[]
      countries: string[]
      sectors: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly content: FieldRef<"NewsArticle", 'String'>
    readonly summary: FieldRef<"NewsArticle", 'String'>
    readonly source: FieldRef<"NewsArticle", 'String'>
    readonly author: FieldRef<"NewsArticle", 'String'>
    readonly publishedDate: FieldRef<"NewsArticle", 'DateTime'>
    readonly url: FieldRef<"NewsArticle", 'String'>
    readonly imageUrl: FieldRef<"NewsArticle", 'String'>
    readonly sentiment: FieldRef<"NewsArticle", 'String'>
    readonly relevanceScore: FieldRef<"NewsArticle", 'Float'>
    readonly keyPhrases: FieldRef<"NewsArticle", 'String[]'>
    readonly countries: FieldRef<"NewsArticle", 'String[]'>
    readonly sectors: FieldRef<"NewsArticle", 'String[]'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    minTariffRate: number | null
  }

  export type AlertSumAggregateOutputType = {
    minTariffRate: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    alertType: $Enums.AlertType | null
    minTariffRate: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    alertType: $Enums.AlertType | null
    minTariffRate: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    userId: number
    alertType: number
    countries: number
    sectors: number
    keywords: number
    minTariffRate: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    minTariffRate?: true
  }

  export type AlertSumAggregateInputType = {
    minTariffRate?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    minTariffRate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    minTariffRate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    countries?: true
    sectors?: true
    keywords?: true
    minTariffRate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    userId: string
    alertType: $Enums.AlertType
    countries: string[]
    sectors: string[]
    keywords: string[]
    minTariffRate: number | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    alertType?: boolean
    countries?: boolean
    sectors?: boolean
    keywords?: boolean
    minTariffRate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    alertType?: boolean
    countries?: boolean
    sectors?: boolean
    keywords?: boolean
    minTariffRate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    alertType?: boolean
    countries?: boolean
    sectors?: boolean
    keywords?: boolean
    minTariffRate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    userId?: boolean
    alertType?: boolean
    countries?: boolean
    sectors?: boolean
    keywords?: boolean
    minTariffRate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "alertType" | "countries" | "sectors" | "keywords" | "minTariffRate" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      alertType: $Enums.AlertType
      countries: string[]
      sectors: string[]
      keywords: string[]
      minTariffRate: number | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly userId: FieldRef<"Alert", 'String'>
    readonly alertType: FieldRef<"Alert", 'AlertType'>
    readonly countries: FieldRef<"Alert", 'String[]'>
    readonly sectors: FieldRef<"Alert", 'String[]'>
    readonly keywords: FieldRef<"Alert", 'String[]'>
    readonly minTariffRate: FieldRef<"Alert", 'Float'>
    readonly active: FieldRef<"Alert", 'Boolean'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model SavedSearch
   */

  export type AggregateSavedSearch = {
    _count: SavedSearchCountAggregateOutputType | null
    _min: SavedSearchMinAggregateOutputType | null
    _max: SavedSearchMaxAggregateOutputType | null
  }

  export type SavedSearchMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    dateRange: string | null
    createdAt: Date | null
  }

  export type SavedSearchMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    dateRange: string | null
    createdAt: Date | null
  }

  export type SavedSearchCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    countries: number
    sectors: number
    dateRange: number
    keywords: number
    createdAt: number
    _all: number
  }


  export type SavedSearchMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dateRange?: true
    createdAt?: true
  }

  export type SavedSearchMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dateRange?: true
    createdAt?: true
  }

  export type SavedSearchCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    countries?: true
    sectors?: true
    dateRange?: true
    keywords?: true
    createdAt?: true
    _all?: true
  }

  export type SavedSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedSearch to aggregate.
     */
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     */
    orderBy?: SavedSearchOrderByWithRelationInput | SavedSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedSearches
    **/
    _count?: true | SavedSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedSearchMaxAggregateInputType
  }

  export type GetSavedSearchAggregateType<T extends SavedSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedSearch[P]>
      : GetScalarType<T[P], AggregateSavedSearch[P]>
  }




  export type SavedSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedSearchWhereInput
    orderBy?: SavedSearchOrderByWithAggregationInput | SavedSearchOrderByWithAggregationInput[]
    by: SavedSearchScalarFieldEnum[] | SavedSearchScalarFieldEnum
    having?: SavedSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedSearchCountAggregateInputType | true
    _min?: SavedSearchMinAggregateInputType
    _max?: SavedSearchMaxAggregateInputType
  }

  export type SavedSearchGroupByOutputType = {
    id: string
    userId: string
    name: string
    countries: string[]
    sectors: string[]
    dateRange: string | null
    keywords: string[]
    createdAt: Date
    _count: SavedSearchCountAggregateOutputType | null
    _min: SavedSearchMinAggregateOutputType | null
    _max: SavedSearchMaxAggregateOutputType | null
  }

  type GetSavedSearchGroupByPayload<T extends SavedSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedSearchGroupByOutputType[P]>
            : GetScalarType<T[P], SavedSearchGroupByOutputType[P]>
        }
      >
    >


  export type SavedSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    countries?: boolean
    sectors?: boolean
    dateRange?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedSearch"]>

  export type SavedSearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    countries?: boolean
    sectors?: boolean
    dateRange?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedSearch"]>

  export type SavedSearchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    countries?: boolean
    sectors?: boolean
    dateRange?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedSearch"]>

  export type SavedSearchSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    countries?: boolean
    sectors?: boolean
    dateRange?: boolean
    keywords?: boolean
    createdAt?: boolean
  }

  export type SavedSearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "countries" | "sectors" | "dateRange" | "keywords" | "createdAt", ExtArgs["result"]["savedSearch"]>
  export type SavedSearchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedSearchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedSearchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedSearch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      countries: string[]
      sectors: string[]
      dateRange: string | null
      keywords: string[]
      createdAt: Date
    }, ExtArgs["result"]["savedSearch"]>
    composites: {}
  }

  type SavedSearchGetPayload<S extends boolean | null | undefined | SavedSearchDefaultArgs> = $Result.GetResult<Prisma.$SavedSearchPayload, S>

  type SavedSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedSearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedSearchCountAggregateInputType | true
    }

  export interface SavedSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedSearch'], meta: { name: 'SavedSearch' } }
    /**
     * Find zero or one SavedSearch that matches the filter.
     * @param {SavedSearchFindUniqueArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedSearchFindUniqueArgs>(args: SelectSubset<T, SavedSearchFindUniqueArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedSearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedSearchFindUniqueOrThrowArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedSearchFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchFindFirstArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedSearchFindFirstArgs>(args?: SelectSubset<T, SavedSearchFindFirstArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchFindFirstOrThrowArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedSearchFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedSearches
     * const savedSearches = await prisma.savedSearch.findMany()
     * 
     * // Get first 10 SavedSearches
     * const savedSearches = await prisma.savedSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedSearchWithIdOnly = await prisma.savedSearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedSearchFindManyArgs>(args?: SelectSubset<T, SavedSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedSearch.
     * @param {SavedSearchCreateArgs} args - Arguments to create a SavedSearch.
     * @example
     * // Create one SavedSearch
     * const SavedSearch = await prisma.savedSearch.create({
     *   data: {
     *     // ... data to create a SavedSearch
     *   }
     * })
     * 
     */
    create<T extends SavedSearchCreateArgs>(args: SelectSubset<T, SavedSearchCreateArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedSearches.
     * @param {SavedSearchCreateManyArgs} args - Arguments to create many SavedSearches.
     * @example
     * // Create many SavedSearches
     * const savedSearch = await prisma.savedSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedSearchCreateManyArgs>(args?: SelectSubset<T, SavedSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedSearches and returns the data saved in the database.
     * @param {SavedSearchCreateManyAndReturnArgs} args - Arguments to create many SavedSearches.
     * @example
     * // Create many SavedSearches
     * const savedSearch = await prisma.savedSearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedSearches and only return the `id`
     * const savedSearchWithIdOnly = await prisma.savedSearch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedSearchCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedSearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedSearch.
     * @param {SavedSearchDeleteArgs} args - Arguments to delete one SavedSearch.
     * @example
     * // Delete one SavedSearch
     * const SavedSearch = await prisma.savedSearch.delete({
     *   where: {
     *     // ... filter to delete one SavedSearch
     *   }
     * })
     * 
     */
    delete<T extends SavedSearchDeleteArgs>(args: SelectSubset<T, SavedSearchDeleteArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedSearch.
     * @param {SavedSearchUpdateArgs} args - Arguments to update one SavedSearch.
     * @example
     * // Update one SavedSearch
     * const savedSearch = await prisma.savedSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedSearchUpdateArgs>(args: SelectSubset<T, SavedSearchUpdateArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedSearches.
     * @param {SavedSearchDeleteManyArgs} args - Arguments to filter SavedSearches to delete.
     * @example
     * // Delete a few SavedSearches
     * const { count } = await prisma.savedSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedSearchDeleteManyArgs>(args?: SelectSubset<T, SavedSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedSearches
     * const savedSearch = await prisma.savedSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedSearchUpdateManyArgs>(args: SelectSubset<T, SavedSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedSearches and returns the data updated in the database.
     * @param {SavedSearchUpdateManyAndReturnArgs} args - Arguments to update many SavedSearches.
     * @example
     * // Update many SavedSearches
     * const savedSearch = await prisma.savedSearch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedSearches and only return the `id`
     * const savedSearchWithIdOnly = await prisma.savedSearch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedSearchUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedSearchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedSearch.
     * @param {SavedSearchUpsertArgs} args - Arguments to update or create a SavedSearch.
     * @example
     * // Update or create a SavedSearch
     * const savedSearch = await prisma.savedSearch.upsert({
     *   create: {
     *     // ... data to create a SavedSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedSearch we want to update
     *   }
     * })
     */
    upsert<T extends SavedSearchUpsertArgs>(args: SelectSubset<T, SavedSearchUpsertArgs<ExtArgs>>): Prisma__SavedSearchClient<$Result.GetResult<Prisma.$SavedSearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchCountArgs} args - Arguments to filter SavedSearches to count.
     * @example
     * // Count the number of SavedSearches
     * const count = await prisma.savedSearch.count({
     *   where: {
     *     // ... the filter for the SavedSearches we want to count
     *   }
     * })
    **/
    count<T extends SavedSearchCountArgs>(
      args?: Subset<T, SavedSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedSearchAggregateArgs>(args: Subset<T, SavedSearchAggregateArgs>): Prisma.PrismaPromise<GetSavedSearchAggregateType<T>>

    /**
     * Group by SavedSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedSearchGroupByArgs['orderBy'] }
        : { orderBy?: SavedSearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedSearch model
   */
  readonly fields: SavedSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedSearch model
   */
  interface SavedSearchFieldRefs {
    readonly id: FieldRef<"SavedSearch", 'String'>
    readonly userId: FieldRef<"SavedSearch", 'String'>
    readonly name: FieldRef<"SavedSearch", 'String'>
    readonly countries: FieldRef<"SavedSearch", 'String[]'>
    readonly sectors: FieldRef<"SavedSearch", 'String[]'>
    readonly dateRange: FieldRef<"SavedSearch", 'String'>
    readonly keywords: FieldRef<"SavedSearch", 'String[]'>
    readonly createdAt: FieldRef<"SavedSearch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedSearch findUnique
   */
  export type SavedSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * Filter, which SavedSearch to fetch.
     */
    where: SavedSearchWhereUniqueInput
  }

  /**
   * SavedSearch findUniqueOrThrow
   */
  export type SavedSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * Filter, which SavedSearch to fetch.
     */
    where: SavedSearchWhereUniqueInput
  }

  /**
   * SavedSearch findFirst
   */
  export type SavedSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * Filter, which SavedSearch to fetch.
     */
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     */
    orderBy?: SavedSearchOrderByWithRelationInput | SavedSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedSearches.
     */
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedSearches.
     */
    distinct?: SavedSearchScalarFieldEnum | SavedSearchScalarFieldEnum[]
  }

  /**
   * SavedSearch findFirstOrThrow
   */
  export type SavedSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * Filter, which SavedSearch to fetch.
     */
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     */
    orderBy?: SavedSearchOrderByWithRelationInput | SavedSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedSearches.
     */
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedSearches.
     */
    distinct?: SavedSearchScalarFieldEnum | SavedSearchScalarFieldEnum[]
  }

  /**
   * SavedSearch findMany
   */
  export type SavedSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * Filter, which SavedSearches to fetch.
     */
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     */
    orderBy?: SavedSearchOrderByWithRelationInput | SavedSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedSearches.
     */
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     */
    skip?: number
    distinct?: SavedSearchScalarFieldEnum | SavedSearchScalarFieldEnum[]
  }

  /**
   * SavedSearch create
   */
  export type SavedSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedSearch.
     */
    data: XOR<SavedSearchCreateInput, SavedSearchUncheckedCreateInput>
  }

  /**
   * SavedSearch createMany
   */
  export type SavedSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedSearches.
     */
    data: SavedSearchCreateManyInput | SavedSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedSearch createManyAndReturn
   */
  export type SavedSearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * The data used to create many SavedSearches.
     */
    data: SavedSearchCreateManyInput | SavedSearchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedSearch update
   */
  export type SavedSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedSearch.
     */
    data: XOR<SavedSearchUpdateInput, SavedSearchUncheckedUpdateInput>
    /**
     * Choose, which SavedSearch to update.
     */
    where: SavedSearchWhereUniqueInput
  }

  /**
   * SavedSearch updateMany
   */
  export type SavedSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedSearches.
     */
    data: XOR<SavedSearchUpdateManyMutationInput, SavedSearchUncheckedUpdateManyInput>
    /**
     * Filter which SavedSearches to update
     */
    where?: SavedSearchWhereInput
    /**
     * Limit how many SavedSearches to update.
     */
    limit?: number
  }

  /**
   * SavedSearch updateManyAndReturn
   */
  export type SavedSearchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * The data used to update SavedSearches.
     */
    data: XOR<SavedSearchUpdateManyMutationInput, SavedSearchUncheckedUpdateManyInput>
    /**
     * Filter which SavedSearches to update
     */
    where?: SavedSearchWhereInput
    /**
     * Limit how many SavedSearches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedSearch upsert
   */
  export type SavedSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedSearch to update in case it exists.
     */
    where: SavedSearchWhereUniqueInput
    /**
     * In case the SavedSearch found by the `where` argument doesn't exist, create a new SavedSearch with this data.
     */
    create: XOR<SavedSearchCreateInput, SavedSearchUncheckedCreateInput>
    /**
     * In case the SavedSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedSearchUpdateInput, SavedSearchUncheckedUpdateInput>
  }

  /**
   * SavedSearch delete
   */
  export type SavedSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
    /**
     * Filter which SavedSearch to delete.
     */
    where: SavedSearchWhereUniqueInput
  }

  /**
   * SavedSearch deleteMany
   */
  export type SavedSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedSearches to delete
     */
    where?: SavedSearchWhereInput
    /**
     * Limit how many SavedSearches to delete.
     */
    limit?: number
  }

  /**
   * SavedSearch without action
   */
  export type SavedSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedSearch
     */
    select?: SavedSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedSearch
     */
    omit?: SavedSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedSearchInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    type: $Enums.ReportType | null
    format: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    type: $Enums.ReportType | null
    format: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    type: number
    format: number
    url: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    format?: true
    url?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    format?: true
    url?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    format?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    format?: boolean
    url?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    format?: boolean
    url?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    format?: boolean
    url?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    format?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "type" | "format" | "url" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      type: $Enums.ReportType
      format: string
      url: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly title: FieldRef<"Report", 'String'>
    readonly description: FieldRef<"Report", 'String'>
    readonly type: FieldRef<"Report", 'ReportType'>
    readonly format: FieldRef<"Report", 'String'>
    readonly url: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    region: 'region',
    flagUrl: 'flagUrl',
    economicStatus: 'economicStatus'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const SectorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const TariffEventScalarFieldEnum: {
    id: 'id',
    sourceCountryId: 'sourceCountryId',
    targetCountryId: 'targetCountryId',
    sectorId: 'sectorId',
    tariffRate: 'tariffRate',
    previousRate: 'previousRate',
    announcementDate: 'announcementDate',
    effectiveDate: 'effectiveDate',
    expiryDate: 'expiryDate',
    description: 'description',
    impactScore: 'impactScore',
    sourceUrl: 'sourceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TariffEventScalarFieldEnum = (typeof TariffEventScalarFieldEnum)[keyof typeof TariffEventScalarFieldEnum]


  export const SectorDataScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    sectorId: 'sectorId',
    gdpValue: 'gdpValue',
    exportValue: 'exportValue',
    importValue: 'importValue',
    employment: 'employment',
    year: 'year',
    quarter: 'quarter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectorDataScalarFieldEnum = (typeof SectorDataScalarFieldEnum)[keyof typeof SectorDataScalarFieldEnum]


  export const StockMarketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    country: 'country'
  };

  export type StockMarketScalarFieldEnum = (typeof StockMarketScalarFieldEnum)[keyof typeof StockMarketScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    marketId: 'marketId',
    sector: 'sector',
    currentPrice: 'currentPrice'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const StockPriceScalarFieldEnum: {
    id: 'id',
    stockId: 'stockId',
    date: 'date',
    openPrice: 'openPrice',
    highPrice: 'highPrice',
    lowPrice: 'lowPrice',
    closePrice: 'closePrice',
    volume: 'volume',
    createdAt: 'createdAt'
  };

  export type StockPriceScalarFieldEnum = (typeof StockPriceScalarFieldEnum)[keyof typeof StockPriceScalarFieldEnum]


  export const StockImpactScalarFieldEnum: {
    id: 'id',
    tariffEventId: 'tariffEventId',
    stockId: 'stockId',
    marketId: 'marketId',
    priceChangePct: 'priceChangePct',
    volumeChangePct: 'volumeChangePct',
    correlationScore: 'correlationScore',
    analysisText: 'analysisText',
    createdAt: 'createdAt'
  };

  export type StockImpactScalarFieldEnum = (typeof StockImpactScalarFieldEnum)[keyof typeof StockImpactScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    summary: 'summary',
    source: 'source',
    author: 'author',
    publishedDate: 'publishedDate',
    url: 'url',
    imageUrl: 'imageUrl',
    sentiment: 'sentiment',
    relevanceScore: 'relevanceScore',
    keyPhrases: 'keyPhrases',
    countries: 'countries',
    sectors: 'sectors',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    alertType: 'alertType',
    countries: 'countries',
    sectors: 'sectors',
    keywords: 'keywords',
    minTariffRate: 'minTariffRate',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const SavedSearchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    countries: 'countries',
    sectors: 'sectors',
    dateRange: 'dateRange',
    keywords: 'keywords',
    createdAt: 'createdAt'
  };

  export type SavedSearchScalarFieldEnum = (typeof SavedSearchScalarFieldEnum)[keyof typeof SavedSearchScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    type: 'type',
    format: 'format',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    alerts?: AlertListRelationFilter
    savedSearches?: SavedSearchListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alerts?: AlertOrderByRelationAggregateInput
    savedSearches?: SavedSearchOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    alerts?: AlertListRelationFilter
    savedSearches?: SavedSearchListRelationFilter
    reports?: ReportListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    code?: StringFilter<"Country"> | string
    region?: StringFilter<"Country"> | string
    flagUrl?: StringNullableFilter<"Country"> | string | null
    economicStatus?: StringNullableFilter<"Country"> | string | null
    tariffFromSource?: TariffEventListRelationFilter
    tariffToTarget?: TariffEventListRelationFilter
    sectorData?: SectorDataListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    region?: SortOrder
    flagUrl?: SortOrderInput | SortOrder
    economicStatus?: SortOrderInput | SortOrder
    tariffFromSource?: TariffEventOrderByRelationAggregateInput
    tariffToTarget?: TariffEventOrderByRelationAggregateInput
    sectorData?: SectorDataOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    region?: StringFilter<"Country"> | string
    flagUrl?: StringNullableFilter<"Country"> | string | null
    economicStatus?: StringNullableFilter<"Country"> | string | null
    tariffFromSource?: TariffEventListRelationFilter
    tariffToTarget?: TariffEventListRelationFilter
    sectorData?: SectorDataListRelationFilter
  }, "id" | "name" | "code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    region?: SortOrder
    flagUrl?: SortOrderInput | SortOrder
    economicStatus?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    code?: StringWithAggregatesFilter<"Country"> | string
    region?: StringWithAggregatesFilter<"Country"> | string
    flagUrl?: StringNullableWithAggregatesFilter<"Country"> | string | null
    economicStatus?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type SectorWhereInput = {
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    id?: StringFilter<"Sector"> | string
    name?: StringFilter<"Sector"> | string
    description?: StringNullableFilter<"Sector"> | string | null
    tariffs?: TariffEventListRelationFilter
    sectorData?: SectorDataListRelationFilter
  }

  export type SectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tariffs?: TariffEventOrderByRelationAggregateInput
    sectorData?: SectorDataOrderByRelationAggregateInput
  }

  export type SectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    description?: StringNullableFilter<"Sector"> | string | null
    tariffs?: TariffEventListRelationFilter
    sectorData?: SectorDataListRelationFilter
  }, "id" | "name">

  export type SectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: SectorCountOrderByAggregateInput
    _max?: SectorMaxOrderByAggregateInput
    _min?: SectorMinOrderByAggregateInput
  }

  export type SectorScalarWhereWithAggregatesInput = {
    AND?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    OR?: SectorScalarWhereWithAggregatesInput[]
    NOT?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sector"> | string
    name?: StringWithAggregatesFilter<"Sector"> | string
    description?: StringNullableWithAggregatesFilter<"Sector"> | string | null
  }

  export type TariffEventWhereInput = {
    AND?: TariffEventWhereInput | TariffEventWhereInput[]
    OR?: TariffEventWhereInput[]
    NOT?: TariffEventWhereInput | TariffEventWhereInput[]
    id?: StringFilter<"TariffEvent"> | string
    sourceCountryId?: StringFilter<"TariffEvent"> | string
    targetCountryId?: StringFilter<"TariffEvent"> | string
    sectorId?: StringFilter<"TariffEvent"> | string
    tariffRate?: FloatFilter<"TariffEvent"> | number
    previousRate?: FloatNullableFilter<"TariffEvent"> | number | null
    announcementDate?: DateTimeFilter<"TariffEvent"> | Date | string
    effectiveDate?: DateTimeFilter<"TariffEvent"> | Date | string
    expiryDate?: DateTimeNullableFilter<"TariffEvent"> | Date | string | null
    description?: StringNullableFilter<"TariffEvent"> | string | null
    impactScore?: FloatNullableFilter<"TariffEvent"> | number | null
    sourceUrl?: StringNullableFilter<"TariffEvent"> | string | null
    createdAt?: DateTimeFilter<"TariffEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TariffEvent"> | Date | string
    sourceCountry?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    targetCountry?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
    stockImpacts?: StockImpactListRelationFilter
  }

  export type TariffEventOrderByWithRelationInput = {
    id?: SortOrder
    sourceCountryId?: SortOrder
    targetCountryId?: SortOrder
    sectorId?: SortOrder
    tariffRate?: SortOrder
    previousRate?: SortOrderInput | SortOrder
    announcementDate?: SortOrder
    effectiveDate?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    impactScore?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceCountry?: CountryOrderByWithRelationInput
    targetCountry?: CountryOrderByWithRelationInput
    sector?: SectorOrderByWithRelationInput
    stockImpacts?: StockImpactOrderByRelationAggregateInput
  }

  export type TariffEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TariffEventWhereInput | TariffEventWhereInput[]
    OR?: TariffEventWhereInput[]
    NOT?: TariffEventWhereInput | TariffEventWhereInput[]
    sourceCountryId?: StringFilter<"TariffEvent"> | string
    targetCountryId?: StringFilter<"TariffEvent"> | string
    sectorId?: StringFilter<"TariffEvent"> | string
    tariffRate?: FloatFilter<"TariffEvent"> | number
    previousRate?: FloatNullableFilter<"TariffEvent"> | number | null
    announcementDate?: DateTimeFilter<"TariffEvent"> | Date | string
    effectiveDate?: DateTimeFilter<"TariffEvent"> | Date | string
    expiryDate?: DateTimeNullableFilter<"TariffEvent"> | Date | string | null
    description?: StringNullableFilter<"TariffEvent"> | string | null
    impactScore?: FloatNullableFilter<"TariffEvent"> | number | null
    sourceUrl?: StringNullableFilter<"TariffEvent"> | string | null
    createdAt?: DateTimeFilter<"TariffEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TariffEvent"> | Date | string
    sourceCountry?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    targetCountry?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
    stockImpacts?: StockImpactListRelationFilter
  }, "id">

  export type TariffEventOrderByWithAggregationInput = {
    id?: SortOrder
    sourceCountryId?: SortOrder
    targetCountryId?: SortOrder
    sectorId?: SortOrder
    tariffRate?: SortOrder
    previousRate?: SortOrderInput | SortOrder
    announcementDate?: SortOrder
    effectiveDate?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    impactScore?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TariffEventCountOrderByAggregateInput
    _avg?: TariffEventAvgOrderByAggregateInput
    _max?: TariffEventMaxOrderByAggregateInput
    _min?: TariffEventMinOrderByAggregateInput
    _sum?: TariffEventSumOrderByAggregateInput
  }

  export type TariffEventScalarWhereWithAggregatesInput = {
    AND?: TariffEventScalarWhereWithAggregatesInput | TariffEventScalarWhereWithAggregatesInput[]
    OR?: TariffEventScalarWhereWithAggregatesInput[]
    NOT?: TariffEventScalarWhereWithAggregatesInput | TariffEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TariffEvent"> | string
    sourceCountryId?: StringWithAggregatesFilter<"TariffEvent"> | string
    targetCountryId?: StringWithAggregatesFilter<"TariffEvent"> | string
    sectorId?: StringWithAggregatesFilter<"TariffEvent"> | string
    tariffRate?: FloatWithAggregatesFilter<"TariffEvent"> | number
    previousRate?: FloatNullableWithAggregatesFilter<"TariffEvent"> | number | null
    announcementDate?: DateTimeWithAggregatesFilter<"TariffEvent"> | Date | string
    effectiveDate?: DateTimeWithAggregatesFilter<"TariffEvent"> | Date | string
    expiryDate?: DateTimeNullableWithAggregatesFilter<"TariffEvent"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"TariffEvent"> | string | null
    impactScore?: FloatNullableWithAggregatesFilter<"TariffEvent"> | number | null
    sourceUrl?: StringNullableWithAggregatesFilter<"TariffEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TariffEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TariffEvent"> | Date | string
  }

  export type SectorDataWhereInput = {
    AND?: SectorDataWhereInput | SectorDataWhereInput[]
    OR?: SectorDataWhereInput[]
    NOT?: SectorDataWhereInput | SectorDataWhereInput[]
    id?: StringFilter<"SectorData"> | string
    countryId?: StringFilter<"SectorData"> | string
    sectorId?: StringFilter<"SectorData"> | string
    gdpValue?: FloatFilter<"SectorData"> | number
    exportValue?: FloatFilter<"SectorData"> | number
    importValue?: FloatFilter<"SectorData"> | number
    employment?: IntNullableFilter<"SectorData"> | number | null
    year?: IntFilter<"SectorData"> | number
    quarter?: IntFilter<"SectorData"> | number
    createdAt?: DateTimeFilter<"SectorData"> | Date | string
    updatedAt?: DateTimeFilter<"SectorData"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
  }

  export type SectorDataOrderByWithRelationInput = {
    id?: SortOrder
    countryId?: SortOrder
    sectorId?: SortOrder
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrderInput | SortOrder
    year?: SortOrder
    quarter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    sector?: SectorOrderByWithRelationInput
  }

  export type SectorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    countryId_sectorId_year_quarter?: SectorDataCountryIdSectorIdYearQuarterCompoundUniqueInput
    AND?: SectorDataWhereInput | SectorDataWhereInput[]
    OR?: SectorDataWhereInput[]
    NOT?: SectorDataWhereInput | SectorDataWhereInput[]
    countryId?: StringFilter<"SectorData"> | string
    sectorId?: StringFilter<"SectorData"> | string
    gdpValue?: FloatFilter<"SectorData"> | number
    exportValue?: FloatFilter<"SectorData"> | number
    importValue?: FloatFilter<"SectorData"> | number
    employment?: IntNullableFilter<"SectorData"> | number | null
    year?: IntFilter<"SectorData"> | number
    quarter?: IntFilter<"SectorData"> | number
    createdAt?: DateTimeFilter<"SectorData"> | Date | string
    updatedAt?: DateTimeFilter<"SectorData"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
  }, "id" | "countryId_sectorId_year_quarter">

  export type SectorDataOrderByWithAggregationInput = {
    id?: SortOrder
    countryId?: SortOrder
    sectorId?: SortOrder
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrderInput | SortOrder
    year?: SortOrder
    quarter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectorDataCountOrderByAggregateInput
    _avg?: SectorDataAvgOrderByAggregateInput
    _max?: SectorDataMaxOrderByAggregateInput
    _min?: SectorDataMinOrderByAggregateInput
    _sum?: SectorDataSumOrderByAggregateInput
  }

  export type SectorDataScalarWhereWithAggregatesInput = {
    AND?: SectorDataScalarWhereWithAggregatesInput | SectorDataScalarWhereWithAggregatesInput[]
    OR?: SectorDataScalarWhereWithAggregatesInput[]
    NOT?: SectorDataScalarWhereWithAggregatesInput | SectorDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SectorData"> | string
    countryId?: StringWithAggregatesFilter<"SectorData"> | string
    sectorId?: StringWithAggregatesFilter<"SectorData"> | string
    gdpValue?: FloatWithAggregatesFilter<"SectorData"> | number
    exportValue?: FloatWithAggregatesFilter<"SectorData"> | number
    importValue?: FloatWithAggregatesFilter<"SectorData"> | number
    employment?: IntNullableWithAggregatesFilter<"SectorData"> | number | null
    year?: IntWithAggregatesFilter<"SectorData"> | number
    quarter?: IntWithAggregatesFilter<"SectorData"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SectorData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SectorData"> | Date | string
  }

  export type StockMarketWhereInput = {
    AND?: StockMarketWhereInput | StockMarketWhereInput[]
    OR?: StockMarketWhereInput[]
    NOT?: StockMarketWhereInput | StockMarketWhereInput[]
    id?: StringFilter<"StockMarket"> | string
    name?: StringFilter<"StockMarket"> | string
    code?: StringFilter<"StockMarket"> | string
    country?: StringFilter<"StockMarket"> | string
    stocks?: StockListRelationFilter
    impacts?: StockImpactListRelationFilter
  }

  export type StockMarketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    stocks?: StockOrderByRelationAggregateInput
    impacts?: StockImpactOrderByRelationAggregateInput
  }

  export type StockMarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: StockMarketWhereInput | StockMarketWhereInput[]
    OR?: StockMarketWhereInput[]
    NOT?: StockMarketWhereInput | StockMarketWhereInput[]
    country?: StringFilter<"StockMarket"> | string
    stocks?: StockListRelationFilter
    impacts?: StockImpactListRelationFilter
  }, "id" | "name" | "code">

  export type StockMarketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    _count?: StockMarketCountOrderByAggregateInput
    _max?: StockMarketMaxOrderByAggregateInput
    _min?: StockMarketMinOrderByAggregateInput
  }

  export type StockMarketScalarWhereWithAggregatesInput = {
    AND?: StockMarketScalarWhereWithAggregatesInput | StockMarketScalarWhereWithAggregatesInput[]
    OR?: StockMarketScalarWhereWithAggregatesInput[]
    NOT?: StockMarketScalarWhereWithAggregatesInput | StockMarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMarket"> | string
    name?: StringWithAggregatesFilter<"StockMarket"> | string
    code?: StringWithAggregatesFilter<"StockMarket"> | string
    country?: StringWithAggregatesFilter<"StockMarket"> | string
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: StringFilter<"Stock"> | string
    symbol?: StringFilter<"Stock"> | string
    name?: StringFilter<"Stock"> | string
    marketId?: StringFilter<"Stock"> | string
    sector?: StringFilter<"Stock"> | string
    currentPrice?: FloatFilter<"Stock"> | number
    market?: XOR<StockMarketScalarRelationFilter, StockMarketWhereInput>
    priceHistory?: StockPriceListRelationFilter
    impacts?: StockImpactListRelationFilter
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    marketId?: SortOrder
    sector?: SortOrder
    currentPrice?: SortOrder
    market?: StockMarketOrderByWithRelationInput
    priceHistory?: StockPriceOrderByRelationAggregateInput
    impacts?: StockImpactOrderByRelationAggregateInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    name?: StringFilter<"Stock"> | string
    marketId?: StringFilter<"Stock"> | string
    sector?: StringFilter<"Stock"> | string
    currentPrice?: FloatFilter<"Stock"> | number
    market?: XOR<StockMarketScalarRelationFilter, StockMarketWhereInput>
    priceHistory?: StockPriceListRelationFilter
    impacts?: StockImpactListRelationFilter
  }, "id" | "symbol">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    marketId?: SortOrder
    sector?: SortOrder
    currentPrice?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stock"> | string
    symbol?: StringWithAggregatesFilter<"Stock"> | string
    name?: StringWithAggregatesFilter<"Stock"> | string
    marketId?: StringWithAggregatesFilter<"Stock"> | string
    sector?: StringWithAggregatesFilter<"Stock"> | string
    currentPrice?: FloatWithAggregatesFilter<"Stock"> | number
  }

  export type StockPriceWhereInput = {
    AND?: StockPriceWhereInput | StockPriceWhereInput[]
    OR?: StockPriceWhereInput[]
    NOT?: StockPriceWhereInput | StockPriceWhereInput[]
    id?: StringFilter<"StockPrice"> | string
    stockId?: StringFilter<"StockPrice"> | string
    date?: DateTimeFilter<"StockPrice"> | Date | string
    openPrice?: FloatFilter<"StockPrice"> | number
    highPrice?: FloatFilter<"StockPrice"> | number
    lowPrice?: FloatFilter<"StockPrice"> | number
    closePrice?: FloatFilter<"StockPrice"> | number
    volume?: IntFilter<"StockPrice"> | number
    createdAt?: DateTimeFilter<"StockPrice"> | Date | string
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }

  export type StockPriceOrderByWithRelationInput = {
    id?: SortOrder
    stockId?: SortOrder
    date?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    stock?: StockOrderByWithRelationInput
  }

  export type StockPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stockId_date?: StockPriceStockIdDateCompoundUniqueInput
    AND?: StockPriceWhereInput | StockPriceWhereInput[]
    OR?: StockPriceWhereInput[]
    NOT?: StockPriceWhereInput | StockPriceWhereInput[]
    stockId?: StringFilter<"StockPrice"> | string
    date?: DateTimeFilter<"StockPrice"> | Date | string
    openPrice?: FloatFilter<"StockPrice"> | number
    highPrice?: FloatFilter<"StockPrice"> | number
    lowPrice?: FloatFilter<"StockPrice"> | number
    closePrice?: FloatFilter<"StockPrice"> | number
    volume?: IntFilter<"StockPrice"> | number
    createdAt?: DateTimeFilter<"StockPrice"> | Date | string
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }, "id" | "stockId_date">

  export type StockPriceOrderByWithAggregationInput = {
    id?: SortOrder
    stockId?: SortOrder
    date?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    _count?: StockPriceCountOrderByAggregateInput
    _avg?: StockPriceAvgOrderByAggregateInput
    _max?: StockPriceMaxOrderByAggregateInput
    _min?: StockPriceMinOrderByAggregateInput
    _sum?: StockPriceSumOrderByAggregateInput
  }

  export type StockPriceScalarWhereWithAggregatesInput = {
    AND?: StockPriceScalarWhereWithAggregatesInput | StockPriceScalarWhereWithAggregatesInput[]
    OR?: StockPriceScalarWhereWithAggregatesInput[]
    NOT?: StockPriceScalarWhereWithAggregatesInput | StockPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockPrice"> | string
    stockId?: StringWithAggregatesFilter<"StockPrice"> | string
    date?: DateTimeWithAggregatesFilter<"StockPrice"> | Date | string
    openPrice?: FloatWithAggregatesFilter<"StockPrice"> | number
    highPrice?: FloatWithAggregatesFilter<"StockPrice"> | number
    lowPrice?: FloatWithAggregatesFilter<"StockPrice"> | number
    closePrice?: FloatWithAggregatesFilter<"StockPrice"> | number
    volume?: IntWithAggregatesFilter<"StockPrice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StockPrice"> | Date | string
  }

  export type StockImpactWhereInput = {
    AND?: StockImpactWhereInput | StockImpactWhereInput[]
    OR?: StockImpactWhereInput[]
    NOT?: StockImpactWhereInput | StockImpactWhereInput[]
    id?: StringFilter<"StockImpact"> | string
    tariffEventId?: StringFilter<"StockImpact"> | string
    stockId?: StringFilter<"StockImpact"> | string
    marketId?: StringFilter<"StockImpact"> | string
    priceChangePct?: FloatFilter<"StockImpact"> | number
    volumeChangePct?: FloatNullableFilter<"StockImpact"> | number | null
    correlationScore?: FloatNullableFilter<"StockImpact"> | number | null
    analysisText?: StringNullableFilter<"StockImpact"> | string | null
    createdAt?: DateTimeFilter<"StockImpact"> | Date | string
    tariffEvent?: XOR<TariffEventScalarRelationFilter, TariffEventWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    market?: XOR<StockMarketScalarRelationFilter, StockMarketWhereInput>
  }

  export type StockImpactOrderByWithRelationInput = {
    id?: SortOrder
    tariffEventId?: SortOrder
    stockId?: SortOrder
    marketId?: SortOrder
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrderInput | SortOrder
    correlationScore?: SortOrderInput | SortOrder
    analysisText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tariffEvent?: TariffEventOrderByWithRelationInput
    stock?: StockOrderByWithRelationInput
    market?: StockMarketOrderByWithRelationInput
  }

  export type StockImpactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockImpactWhereInput | StockImpactWhereInput[]
    OR?: StockImpactWhereInput[]
    NOT?: StockImpactWhereInput | StockImpactWhereInput[]
    tariffEventId?: StringFilter<"StockImpact"> | string
    stockId?: StringFilter<"StockImpact"> | string
    marketId?: StringFilter<"StockImpact"> | string
    priceChangePct?: FloatFilter<"StockImpact"> | number
    volumeChangePct?: FloatNullableFilter<"StockImpact"> | number | null
    correlationScore?: FloatNullableFilter<"StockImpact"> | number | null
    analysisText?: StringNullableFilter<"StockImpact"> | string | null
    createdAt?: DateTimeFilter<"StockImpact"> | Date | string
    tariffEvent?: XOR<TariffEventScalarRelationFilter, TariffEventWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    market?: XOR<StockMarketScalarRelationFilter, StockMarketWhereInput>
  }, "id">

  export type StockImpactOrderByWithAggregationInput = {
    id?: SortOrder
    tariffEventId?: SortOrder
    stockId?: SortOrder
    marketId?: SortOrder
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrderInput | SortOrder
    correlationScore?: SortOrderInput | SortOrder
    analysisText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StockImpactCountOrderByAggregateInput
    _avg?: StockImpactAvgOrderByAggregateInput
    _max?: StockImpactMaxOrderByAggregateInput
    _min?: StockImpactMinOrderByAggregateInput
    _sum?: StockImpactSumOrderByAggregateInput
  }

  export type StockImpactScalarWhereWithAggregatesInput = {
    AND?: StockImpactScalarWhereWithAggregatesInput | StockImpactScalarWhereWithAggregatesInput[]
    OR?: StockImpactScalarWhereWithAggregatesInput[]
    NOT?: StockImpactScalarWhereWithAggregatesInput | StockImpactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockImpact"> | string
    tariffEventId?: StringWithAggregatesFilter<"StockImpact"> | string
    stockId?: StringWithAggregatesFilter<"StockImpact"> | string
    marketId?: StringWithAggregatesFilter<"StockImpact"> | string
    priceChangePct?: FloatWithAggregatesFilter<"StockImpact"> | number
    volumeChangePct?: FloatNullableWithAggregatesFilter<"StockImpact"> | number | null
    correlationScore?: FloatNullableWithAggregatesFilter<"StockImpact"> | number | null
    analysisText?: StringNullableWithAggregatesFilter<"StockImpact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockImpact"> | Date | string
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    source?: StringFilter<"NewsArticle"> | string
    author?: StringNullableFilter<"NewsArticle"> | string | null
    publishedDate?: DateTimeFilter<"NewsArticle"> | Date | string
    url?: StringFilter<"NewsArticle"> | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    sentiment?: StringNullableFilter<"NewsArticle"> | string | null
    relevanceScore?: FloatNullableFilter<"NewsArticle"> | number | null
    keyPhrases?: StringNullableListFilter<"NewsArticle">
    countries?: StringNullableListFilter<"NewsArticle">
    sectors?: StringNullableListFilter<"NewsArticle">
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    source?: SortOrder
    author?: SortOrderInput | SortOrder
    publishedDate?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    relevanceScore?: SortOrderInput | SortOrder
    keyPhrases?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    source?: StringFilter<"NewsArticle"> | string
    author?: StringNullableFilter<"NewsArticle"> | string | null
    publishedDate?: DateTimeFilter<"NewsArticle"> | Date | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    sentiment?: StringNullableFilter<"NewsArticle"> | string | null
    relevanceScore?: FloatNullableFilter<"NewsArticle"> | number | null
    keyPhrases?: StringNullableListFilter<"NewsArticle">
    countries?: StringNullableListFilter<"NewsArticle">
    sectors?: StringNullableListFilter<"NewsArticle">
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }, "id" | "url">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    source?: SortOrder
    author?: SortOrderInput | SortOrder
    publishedDate?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    relevanceScore?: SortOrderInput | SortOrder
    keyPhrases?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _avg?: NewsArticleAvgOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
    _sum?: NewsArticleSumOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticle"> | string
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    content?: StringWithAggregatesFilter<"NewsArticle"> | string
    summary?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    source?: StringWithAggregatesFilter<"NewsArticle"> | string
    author?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    publishedDate?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    url?: StringWithAggregatesFilter<"NewsArticle"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    sentiment?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    relevanceScore?: FloatNullableWithAggregatesFilter<"NewsArticle"> | number | null
    keyPhrases?: StringNullableListFilter<"NewsArticle">
    countries?: StringNullableListFilter<"NewsArticle">
    sectors?: StringNullableListFilter<"NewsArticle">
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    userId?: StringFilter<"Alert"> | string
    alertType?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    countries?: StringNullableListFilter<"Alert">
    sectors?: StringNullableListFilter<"Alert">
    keywords?: StringNullableListFilter<"Alert">
    minTariffRate?: FloatNullableFilter<"Alert"> | number | null
    active?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    keywords?: SortOrder
    minTariffRate?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    userId?: StringFilter<"Alert"> | string
    alertType?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    countries?: StringNullableListFilter<"Alert">
    sectors?: StringNullableListFilter<"Alert">
    keywords?: StringNullableListFilter<"Alert">
    minTariffRate?: FloatNullableFilter<"Alert"> | number | null
    active?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    keywords?: SortOrder
    minTariffRate?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    userId?: StringWithAggregatesFilter<"Alert"> | string
    alertType?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    countries?: StringNullableListFilter<"Alert">
    sectors?: StringNullableListFilter<"Alert">
    keywords?: StringNullableListFilter<"Alert">
    minTariffRate?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    active?: BoolWithAggregatesFilter<"Alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type SavedSearchWhereInput = {
    AND?: SavedSearchWhereInput | SavedSearchWhereInput[]
    OR?: SavedSearchWhereInput[]
    NOT?: SavedSearchWhereInput | SavedSearchWhereInput[]
    id?: StringFilter<"SavedSearch"> | string
    userId?: StringFilter<"SavedSearch"> | string
    name?: StringFilter<"SavedSearch"> | string
    countries?: StringNullableListFilter<"SavedSearch">
    sectors?: StringNullableListFilter<"SavedSearch">
    dateRange?: StringNullableFilter<"SavedSearch"> | string | null
    keywords?: StringNullableListFilter<"SavedSearch">
    createdAt?: DateTimeFilter<"SavedSearch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedSearchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    dateRange?: SortOrderInput | SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedSearchWhereInput | SavedSearchWhereInput[]
    OR?: SavedSearchWhereInput[]
    NOT?: SavedSearchWhereInput | SavedSearchWhereInput[]
    userId?: StringFilter<"SavedSearch"> | string
    name?: StringFilter<"SavedSearch"> | string
    countries?: StringNullableListFilter<"SavedSearch">
    sectors?: StringNullableListFilter<"SavedSearch">
    dateRange?: StringNullableFilter<"SavedSearch"> | string | null
    keywords?: StringNullableListFilter<"SavedSearch">
    createdAt?: DateTimeFilter<"SavedSearch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SavedSearchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    dateRange?: SortOrderInput | SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    _count?: SavedSearchCountOrderByAggregateInput
    _max?: SavedSearchMaxOrderByAggregateInput
    _min?: SavedSearchMinOrderByAggregateInput
  }

  export type SavedSearchScalarWhereWithAggregatesInput = {
    AND?: SavedSearchScalarWhereWithAggregatesInput | SavedSearchScalarWhereWithAggregatesInput[]
    OR?: SavedSearchScalarWhereWithAggregatesInput[]
    NOT?: SavedSearchScalarWhereWithAggregatesInput | SavedSearchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedSearch"> | string
    userId?: StringWithAggregatesFilter<"SavedSearch"> | string
    name?: StringWithAggregatesFilter<"SavedSearch"> | string
    countries?: StringNullableListFilter<"SavedSearch">
    sectors?: StringNullableListFilter<"SavedSearch">
    dateRange?: StringNullableWithAggregatesFilter<"SavedSearch"> | string | null
    keywords?: StringNullableListFilter<"SavedSearch">
    createdAt?: DateTimeWithAggregatesFilter<"SavedSearch"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    format?: StringFilter<"Report"> | string
    url?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    format?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    userId?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    format?: StringFilter<"Report"> | string
    url?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    format?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    userId?: StringWithAggregatesFilter<"Report"> | string
    title?: StringWithAggregatesFilter<"Report"> | string
    description?: StringNullableWithAggregatesFilter<"Report"> | string | null
    type?: EnumReportTypeWithAggregatesFilter<"Report"> | $Enums.ReportType
    format?: StringWithAggregatesFilter<"Report"> | string
    url?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutUserInput
    savedSearches?: SavedSearchCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: SavedSearchUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutUserNestedInput
    savedSearches?: SavedSearchUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: SavedSearchUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffFromSource?: TariffEventCreateNestedManyWithoutSourceCountryInput
    tariffToTarget?: TariffEventCreateNestedManyWithoutTargetCountryInput
    sectorData?: SectorDataCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffFromSource?: TariffEventUncheckedCreateNestedManyWithoutSourceCountryInput
    tariffToTarget?: TariffEventUncheckedCreateNestedManyWithoutTargetCountryInput
    sectorData?: SectorDataUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffFromSource?: TariffEventUpdateManyWithoutSourceCountryNestedInput
    tariffToTarget?: TariffEventUpdateManyWithoutTargetCountryNestedInput
    sectorData?: SectorDataUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffFromSource?: TariffEventUncheckedUpdateManyWithoutSourceCountryNestedInput
    tariffToTarget?: TariffEventUncheckedUpdateManyWithoutTargetCountryNestedInput
    sectorData?: SectorDataUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectorCreateInput = {
    id?: string
    name: string
    description?: string | null
    tariffs?: TariffEventCreateNestedManyWithoutSectorInput
    sectorData?: SectorDataCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    tariffs?: TariffEventUncheckedCreateNestedManyWithoutSectorInput
    sectorData?: SectorDataUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tariffs?: TariffEventUpdateManyWithoutSectorNestedInput
    sectorData?: SectorDataUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tariffs?: TariffEventUncheckedUpdateManyWithoutSectorNestedInput
    sectorData?: SectorDataUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type SectorCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type SectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TariffEventCreateInput = {
    id?: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceCountry: CountryCreateNestedOneWithoutTariffFromSourceInput
    targetCountry: CountryCreateNestedOneWithoutTariffToTargetInput
    sector: SectorCreateNestedOneWithoutTariffsInput
    stockImpacts?: StockImpactCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventUncheckedCreateInput = {
    id?: string
    sourceCountryId: string
    targetCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stockImpacts?: StockImpactUncheckedCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceCountry?: CountryUpdateOneRequiredWithoutTariffFromSourceNestedInput
    targetCountry?: CountryUpdateOneRequiredWithoutTariffToTargetNestedInput
    sector?: SectorUpdateOneRequiredWithoutTariffsNestedInput
    stockImpacts?: StockImpactUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockImpacts?: StockImpactUncheckedUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventCreateManyInput = {
    id?: string
    sourceCountryId: string
    targetCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataCreateInput = {
    id?: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutSectorDataInput
    sector: SectorCreateNestedOneWithoutSectorDataInput
  }

  export type SectorDataUncheckedCreateInput = {
    id?: string
    countryId: string
    sectorId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutSectorDataNestedInput
    sector?: SectorUpdateOneRequiredWithoutSectorDataNestedInput
  }

  export type SectorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataCreateManyInput = {
    id?: string
    countryId: string
    sectorId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMarketCreateInput = {
    id?: string
    name: string
    code: string
    country: string
    stocks?: StockCreateNestedManyWithoutMarketInput
    impacts?: StockImpactCreateNestedManyWithoutMarketInput
  }

  export type StockMarketUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    country: string
    stocks?: StockUncheckedCreateNestedManyWithoutMarketInput
    impacts?: StockImpactUncheckedCreateNestedManyWithoutMarketInput
  }

  export type StockMarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stocks?: StockUpdateManyWithoutMarketNestedInput
    impacts?: StockImpactUpdateManyWithoutMarketNestedInput
  }

  export type StockMarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stocks?: StockUncheckedUpdateManyWithoutMarketNestedInput
    impacts?: StockImpactUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type StockMarketCreateManyInput = {
    id?: string
    name: string
    code: string
    country: string
  }

  export type StockMarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type StockMarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type StockCreateInput = {
    id?: string
    symbol: string
    name: string
    sector: string
    currentPrice: number
    market: StockMarketCreateNestedOneWithoutStocksInput
    priceHistory?: StockPriceCreateNestedManyWithoutStockInput
    impacts?: StockImpactCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: string
    symbol: string
    name: string
    marketId: string
    sector: string
    currentPrice: number
    priceHistory?: StockPriceUncheckedCreateNestedManyWithoutStockInput
    impacts?: StockImpactUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    market?: StockMarketUpdateOneRequiredWithoutStocksNestedInput
    priceHistory?: StockPriceUpdateManyWithoutStockNestedInput
    impacts?: StockImpactUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    priceHistory?: StockPriceUncheckedUpdateManyWithoutStockNestedInput
    impacts?: StockImpactUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StockCreateManyInput = {
    id?: string
    symbol: string
    name: string
    marketId: string
    sector: string
    currentPrice: number
  }

  export type StockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type StockPriceCreateInput = {
    id?: string
    date: Date | string
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt?: Date | string
    stock: StockCreateNestedOneWithoutPriceHistoryInput
  }

  export type StockPriceUncheckedCreateInput = {
    id?: string
    stockId: string
    date: Date | string
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt?: Date | string
  }

  export type StockPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type StockPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPriceCreateManyInput = {
    id?: string
    stockId: string
    date: Date | string
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt?: Date | string
  }

  export type StockPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactCreateInput = {
    id?: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
    tariffEvent: TariffEventCreateNestedOneWithoutStockImpactsInput
    stock: StockCreateNestedOneWithoutImpactsInput
    market: StockMarketCreateNestedOneWithoutImpactsInput
  }

  export type StockImpactUncheckedCreateInput = {
    id?: string
    tariffEventId: string
    stockId: string
    marketId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockImpactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffEvent?: TariffEventUpdateOneRequiredWithoutStockImpactsNestedInput
    stock?: StockUpdateOneRequiredWithoutImpactsNestedInput
    market?: StockMarketUpdateOneRequiredWithoutImpactsNestedInput
  }

  export type StockImpactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffEventId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactCreateManyInput = {
    id?: string
    tariffEventId: string
    stockId: string
    marketId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockImpactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffEventId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    source: string
    author?: string | null
    publishedDate: Date | string
    url: string
    imageUrl?: string | null
    sentiment?: string | null
    relevanceScore?: number | null
    keyPhrases?: NewsArticleCreatekeyPhrasesInput | string[]
    countries?: NewsArticleCreatecountriesInput | string[]
    sectors?: NewsArticleCreatesectorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    source: string
    author?: string | null
    publishedDate: Date | string
    url: string
    imageUrl?: string | null
    sentiment?: string | null
    relevanceScore?: number | null
    keyPhrases?: NewsArticleCreatekeyPhrasesInput | string[]
    countries?: NewsArticleCreatecountriesInput | string[]
    sectors?: NewsArticleCreatesectorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    keyPhrases?: NewsArticleUpdatekeyPhrasesInput | string[]
    countries?: NewsArticleUpdatecountriesInput | string[]
    sectors?: NewsArticleUpdatesectorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    keyPhrases?: NewsArticleUpdatekeyPhrasesInput | string[]
    countries?: NewsArticleUpdatecountriesInput | string[]
    sectors?: NewsArticleUpdatesectorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    source: string
    author?: string | null
    publishedDate: Date | string
    url: string
    imageUrl?: string | null
    sentiment?: string | null
    relevanceScore?: number | null
    keyPhrases?: NewsArticleCreatekeyPhrasesInput | string[]
    countries?: NewsArticleCreatecountriesInput | string[]
    sectors?: NewsArticleCreatesectorsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    keyPhrases?: NewsArticleUpdatekeyPhrasesInput | string[]
    countries?: NewsArticleUpdatecountriesInput | string[]
    sectors?: NewsArticleUpdatesectorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    keyPhrases?: NewsArticleUpdatekeyPhrasesInput | string[]
    countries?: NewsArticleUpdatecountriesInput | string[]
    sectors?: NewsArticleUpdatesectorsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    alertType: $Enums.AlertType
    countries?: AlertCreatecountriesInput | string[]
    sectors?: AlertCreatesectorsInput | string[]
    keywords?: AlertCreatekeywordsInput | string[]
    minTariffRate?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    userId: string
    alertType: $Enums.AlertType
    countries?: AlertCreatecountriesInput | string[]
    sectors?: AlertCreatesectorsInput | string[]
    keywords?: AlertCreatekeywordsInput | string[]
    minTariffRate?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: string
    userId: string
    alertType: $Enums.AlertType
    countries?: AlertCreatecountriesInput | string[]
    sectors?: AlertCreatesectorsInput | string[]
    keywords?: AlertCreatekeywordsInput | string[]
    minTariffRate?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedSearchCreateInput = {
    id?: string
    name: string
    countries?: SavedSearchCreatecountriesInput | string[]
    sectors?: SavedSearchCreatesectorsInput | string[]
    dateRange?: string | null
    keywords?: SavedSearchCreatekeywordsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedSearchesInput
  }

  export type SavedSearchUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    countries?: SavedSearchCreatecountriesInput | string[]
    sectors?: SavedSearchCreatesectorsInput | string[]
    dateRange?: string | null
    keywords?: SavedSearchCreatekeywordsInput | string[]
    createdAt?: Date | string
  }

  export type SavedSearchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedSearchesNestedInput
  }

  export type SavedSearchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedSearchCreateManyInput = {
    id?: string
    userId: string
    name: string
    countries?: SavedSearchCreatecountriesInput | string[]
    sectors?: SavedSearchCreatesectorsInput | string[]
    dateRange?: string | null
    keywords?: SavedSearchCreatekeywordsInput | string[]
    createdAt?: Date | string
  }

  export type SavedSearchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedSearchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type SavedSearchListRelationFilter = {
    every?: SavedSearchWhereInput
    some?: SavedSearchWhereInput
    none?: SavedSearchWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedSearchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TariffEventListRelationFilter = {
    every?: TariffEventWhereInput
    some?: TariffEventWhereInput
    none?: TariffEventWhereInput
  }

  export type SectorDataListRelationFilter = {
    every?: SectorDataWhereInput
    some?: SectorDataWhereInput
    none?: SectorDataWhereInput
  }

  export type TariffEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectorDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    region?: SortOrder
    flagUrl?: SortOrder
    economicStatus?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    region?: SortOrder
    flagUrl?: SortOrder
    economicStatus?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    region?: SortOrder
    flagUrl?: SortOrder
    economicStatus?: SortOrder
  }

  export type SectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type SectorScalarRelationFilter = {
    is?: SectorWhereInput
    isNot?: SectorWhereInput
  }

  export type StockImpactListRelationFilter = {
    every?: StockImpactWhereInput
    some?: StockImpactWhereInput
    none?: StockImpactWhereInput
  }

  export type StockImpactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffEventCountOrderByAggregateInput = {
    id?: SortOrder
    sourceCountryId?: SortOrder
    targetCountryId?: SortOrder
    sectorId?: SortOrder
    tariffRate?: SortOrder
    previousRate?: SortOrder
    announcementDate?: SortOrder
    effectiveDate?: SortOrder
    expiryDate?: SortOrder
    description?: SortOrder
    impactScore?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffEventAvgOrderByAggregateInput = {
    tariffRate?: SortOrder
    previousRate?: SortOrder
    impactScore?: SortOrder
  }

  export type TariffEventMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceCountryId?: SortOrder
    targetCountryId?: SortOrder
    sectorId?: SortOrder
    tariffRate?: SortOrder
    previousRate?: SortOrder
    announcementDate?: SortOrder
    effectiveDate?: SortOrder
    expiryDate?: SortOrder
    description?: SortOrder
    impactScore?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffEventMinOrderByAggregateInput = {
    id?: SortOrder
    sourceCountryId?: SortOrder
    targetCountryId?: SortOrder
    sectorId?: SortOrder
    tariffRate?: SortOrder
    previousRate?: SortOrder
    announcementDate?: SortOrder
    effectiveDate?: SortOrder
    expiryDate?: SortOrder
    description?: SortOrder
    impactScore?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffEventSumOrderByAggregateInput = {
    tariffRate?: SortOrder
    previousRate?: SortOrder
    impactScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SectorDataCountryIdSectorIdYearQuarterCompoundUniqueInput = {
    countryId: string
    sectorId: string
    year: number
    quarter: number
  }

  export type SectorDataCountOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    sectorId?: SortOrder
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorDataAvgOrderByAggregateInput = {
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
  }

  export type SectorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    sectorId?: SortOrder
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorDataMinOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    sectorId?: SortOrder
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorDataSumOrderByAggregateInput = {
    gdpValue?: SortOrder
    exportValue?: SortOrder
    importValue?: SortOrder
    employment?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StockListRelationFilter = {
    every?: StockWhereInput
    some?: StockWhereInput
    none?: StockWhereInput
  }

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockMarketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
  }

  export type StockMarketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
  }

  export type StockMarketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
  }

  export type StockMarketScalarRelationFilter = {
    is?: StockMarketWhereInput
    isNot?: StockMarketWhereInput
  }

  export type StockPriceListRelationFilter = {
    every?: StockPriceWhereInput
    some?: StockPriceWhereInput
    none?: StockPriceWhereInput
  }

  export type StockPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    marketId?: SortOrder
    sector?: SortOrder
    currentPrice?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    currentPrice?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    marketId?: SortOrder
    sector?: SortOrder
    currentPrice?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    marketId?: SortOrder
    sector?: SortOrder
    currentPrice?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    currentPrice?: SortOrder
  }

  export type StockScalarRelationFilter = {
    is?: StockWhereInput
    isNot?: StockWhereInput
  }

  export type StockPriceStockIdDateCompoundUniqueInput = {
    stockId: string
    date: Date | string
  }

  export type StockPriceCountOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    date?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
  }

  export type StockPriceAvgOrderByAggregateInput = {
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
  }

  export type StockPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    date?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
  }

  export type StockPriceMinOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    date?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
  }

  export type StockPriceSumOrderByAggregateInput = {
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    volume?: SortOrder
  }

  export type TariffEventScalarRelationFilter = {
    is?: TariffEventWhereInput
    isNot?: TariffEventWhereInput
  }

  export type StockImpactCountOrderByAggregateInput = {
    id?: SortOrder
    tariffEventId?: SortOrder
    stockId?: SortOrder
    marketId?: SortOrder
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrder
    correlationScore?: SortOrder
    analysisText?: SortOrder
    createdAt?: SortOrder
  }

  export type StockImpactAvgOrderByAggregateInput = {
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrder
    correlationScore?: SortOrder
  }

  export type StockImpactMaxOrderByAggregateInput = {
    id?: SortOrder
    tariffEventId?: SortOrder
    stockId?: SortOrder
    marketId?: SortOrder
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrder
    correlationScore?: SortOrder
    analysisText?: SortOrder
    createdAt?: SortOrder
  }

  export type StockImpactMinOrderByAggregateInput = {
    id?: SortOrder
    tariffEventId?: SortOrder
    stockId?: SortOrder
    marketId?: SortOrder
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrder
    correlationScore?: SortOrder
    analysisText?: SortOrder
    createdAt?: SortOrder
  }

  export type StockImpactSumOrderByAggregateInput = {
    priceChangePct?: SortOrder
    volumeChangePct?: SortOrder
    correlationScore?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    author?: SortOrder
    publishedDate?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    sentiment?: SortOrder
    relevanceScore?: SortOrder
    keyPhrases?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleAvgOrderByAggregateInput = {
    relevanceScore?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    author?: SortOrder
    publishedDate?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    sentiment?: SortOrder
    relevanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    author?: SortOrder
    publishedDate?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    sentiment?: SortOrder
    relevanceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleSumOrderByAggregateInput = {
    relevanceScore?: SortOrder
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    keywords?: SortOrder
    minTariffRate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    minTariffRate?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    minTariffRate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    minTariffRate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    minTariffRate?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SavedSearchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    countries?: SortOrder
    sectors?: SortOrder
    dateRange?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dateRange?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedSearchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dateRange?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    format?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    format?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    format?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type AlertCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type SavedSearchCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput> | SavedSearchCreateWithoutUserInput[] | SavedSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedSearchCreateOrConnectWithoutUserInput | SavedSearchCreateOrConnectWithoutUserInput[]
    createMany?: SavedSearchCreateManyUserInputEnvelope
    connect?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type SavedSearchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput> | SavedSearchCreateWithoutUserInput[] | SavedSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedSearchCreateOrConnectWithoutUserInput | SavedSearchCreateOrConnectWithoutUserInput[]
    createMany?: SavedSearchCreateManyUserInputEnvelope
    connect?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type SavedSearchUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput> | SavedSearchCreateWithoutUserInput[] | SavedSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedSearchCreateOrConnectWithoutUserInput | SavedSearchCreateOrConnectWithoutUserInput[]
    upsert?: SavedSearchUpsertWithWhereUniqueWithoutUserInput | SavedSearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedSearchCreateManyUserInputEnvelope
    set?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    disconnect?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    delete?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    connect?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    update?: SavedSearchUpdateWithWhereUniqueWithoutUserInput | SavedSearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedSearchUpdateManyWithWhereWithoutUserInput | SavedSearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedSearchScalarWhereInput | SavedSearchScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type SavedSearchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput> | SavedSearchCreateWithoutUserInput[] | SavedSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedSearchCreateOrConnectWithoutUserInput | SavedSearchCreateOrConnectWithoutUserInput[]
    upsert?: SavedSearchUpsertWithWhereUniqueWithoutUserInput | SavedSearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedSearchCreateManyUserInputEnvelope
    set?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    disconnect?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    delete?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    connect?: SavedSearchWhereUniqueInput | SavedSearchWhereUniqueInput[]
    update?: SavedSearchUpdateWithWhereUniqueWithoutUserInput | SavedSearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedSearchUpdateManyWithWhereWithoutUserInput | SavedSearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedSearchScalarWhereInput | SavedSearchScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TariffEventCreateNestedManyWithoutSourceCountryInput = {
    create?: XOR<TariffEventCreateWithoutSourceCountryInput, TariffEventUncheckedCreateWithoutSourceCountryInput> | TariffEventCreateWithoutSourceCountryInput[] | TariffEventUncheckedCreateWithoutSourceCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSourceCountryInput | TariffEventCreateOrConnectWithoutSourceCountryInput[]
    createMany?: TariffEventCreateManySourceCountryInputEnvelope
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
  }

  export type TariffEventCreateNestedManyWithoutTargetCountryInput = {
    create?: XOR<TariffEventCreateWithoutTargetCountryInput, TariffEventUncheckedCreateWithoutTargetCountryInput> | TariffEventCreateWithoutTargetCountryInput[] | TariffEventUncheckedCreateWithoutTargetCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutTargetCountryInput | TariffEventCreateOrConnectWithoutTargetCountryInput[]
    createMany?: TariffEventCreateManyTargetCountryInputEnvelope
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
  }

  export type SectorDataCreateNestedManyWithoutCountryInput = {
    create?: XOR<SectorDataCreateWithoutCountryInput, SectorDataUncheckedCreateWithoutCountryInput> | SectorDataCreateWithoutCountryInput[] | SectorDataUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutCountryInput | SectorDataCreateOrConnectWithoutCountryInput[]
    createMany?: SectorDataCreateManyCountryInputEnvelope
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
  }

  export type TariffEventUncheckedCreateNestedManyWithoutSourceCountryInput = {
    create?: XOR<TariffEventCreateWithoutSourceCountryInput, TariffEventUncheckedCreateWithoutSourceCountryInput> | TariffEventCreateWithoutSourceCountryInput[] | TariffEventUncheckedCreateWithoutSourceCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSourceCountryInput | TariffEventCreateOrConnectWithoutSourceCountryInput[]
    createMany?: TariffEventCreateManySourceCountryInputEnvelope
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
  }

  export type TariffEventUncheckedCreateNestedManyWithoutTargetCountryInput = {
    create?: XOR<TariffEventCreateWithoutTargetCountryInput, TariffEventUncheckedCreateWithoutTargetCountryInput> | TariffEventCreateWithoutTargetCountryInput[] | TariffEventUncheckedCreateWithoutTargetCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutTargetCountryInput | TariffEventCreateOrConnectWithoutTargetCountryInput[]
    createMany?: TariffEventCreateManyTargetCountryInputEnvelope
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
  }

  export type SectorDataUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<SectorDataCreateWithoutCountryInput, SectorDataUncheckedCreateWithoutCountryInput> | SectorDataCreateWithoutCountryInput[] | SectorDataUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutCountryInput | SectorDataCreateOrConnectWithoutCountryInput[]
    createMany?: SectorDataCreateManyCountryInputEnvelope
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
  }

  export type TariffEventUpdateManyWithoutSourceCountryNestedInput = {
    create?: XOR<TariffEventCreateWithoutSourceCountryInput, TariffEventUncheckedCreateWithoutSourceCountryInput> | TariffEventCreateWithoutSourceCountryInput[] | TariffEventUncheckedCreateWithoutSourceCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSourceCountryInput | TariffEventCreateOrConnectWithoutSourceCountryInput[]
    upsert?: TariffEventUpsertWithWhereUniqueWithoutSourceCountryInput | TariffEventUpsertWithWhereUniqueWithoutSourceCountryInput[]
    createMany?: TariffEventCreateManySourceCountryInputEnvelope
    set?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    disconnect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    delete?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    update?: TariffEventUpdateWithWhereUniqueWithoutSourceCountryInput | TariffEventUpdateWithWhereUniqueWithoutSourceCountryInput[]
    updateMany?: TariffEventUpdateManyWithWhereWithoutSourceCountryInput | TariffEventUpdateManyWithWhereWithoutSourceCountryInput[]
    deleteMany?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
  }

  export type TariffEventUpdateManyWithoutTargetCountryNestedInput = {
    create?: XOR<TariffEventCreateWithoutTargetCountryInput, TariffEventUncheckedCreateWithoutTargetCountryInput> | TariffEventCreateWithoutTargetCountryInput[] | TariffEventUncheckedCreateWithoutTargetCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutTargetCountryInput | TariffEventCreateOrConnectWithoutTargetCountryInput[]
    upsert?: TariffEventUpsertWithWhereUniqueWithoutTargetCountryInput | TariffEventUpsertWithWhereUniqueWithoutTargetCountryInput[]
    createMany?: TariffEventCreateManyTargetCountryInputEnvelope
    set?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    disconnect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    delete?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    update?: TariffEventUpdateWithWhereUniqueWithoutTargetCountryInput | TariffEventUpdateWithWhereUniqueWithoutTargetCountryInput[]
    updateMany?: TariffEventUpdateManyWithWhereWithoutTargetCountryInput | TariffEventUpdateManyWithWhereWithoutTargetCountryInput[]
    deleteMany?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
  }

  export type SectorDataUpdateManyWithoutCountryNestedInput = {
    create?: XOR<SectorDataCreateWithoutCountryInput, SectorDataUncheckedCreateWithoutCountryInput> | SectorDataCreateWithoutCountryInput[] | SectorDataUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutCountryInput | SectorDataCreateOrConnectWithoutCountryInput[]
    upsert?: SectorDataUpsertWithWhereUniqueWithoutCountryInput | SectorDataUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: SectorDataCreateManyCountryInputEnvelope
    set?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    disconnect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    delete?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    update?: SectorDataUpdateWithWhereUniqueWithoutCountryInput | SectorDataUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: SectorDataUpdateManyWithWhereWithoutCountryInput | SectorDataUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: SectorDataScalarWhereInput | SectorDataScalarWhereInput[]
  }

  export type TariffEventUncheckedUpdateManyWithoutSourceCountryNestedInput = {
    create?: XOR<TariffEventCreateWithoutSourceCountryInput, TariffEventUncheckedCreateWithoutSourceCountryInput> | TariffEventCreateWithoutSourceCountryInput[] | TariffEventUncheckedCreateWithoutSourceCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSourceCountryInput | TariffEventCreateOrConnectWithoutSourceCountryInput[]
    upsert?: TariffEventUpsertWithWhereUniqueWithoutSourceCountryInput | TariffEventUpsertWithWhereUniqueWithoutSourceCountryInput[]
    createMany?: TariffEventCreateManySourceCountryInputEnvelope
    set?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    disconnect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    delete?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    update?: TariffEventUpdateWithWhereUniqueWithoutSourceCountryInput | TariffEventUpdateWithWhereUniqueWithoutSourceCountryInput[]
    updateMany?: TariffEventUpdateManyWithWhereWithoutSourceCountryInput | TariffEventUpdateManyWithWhereWithoutSourceCountryInput[]
    deleteMany?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
  }

  export type TariffEventUncheckedUpdateManyWithoutTargetCountryNestedInput = {
    create?: XOR<TariffEventCreateWithoutTargetCountryInput, TariffEventUncheckedCreateWithoutTargetCountryInput> | TariffEventCreateWithoutTargetCountryInput[] | TariffEventUncheckedCreateWithoutTargetCountryInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutTargetCountryInput | TariffEventCreateOrConnectWithoutTargetCountryInput[]
    upsert?: TariffEventUpsertWithWhereUniqueWithoutTargetCountryInput | TariffEventUpsertWithWhereUniqueWithoutTargetCountryInput[]
    createMany?: TariffEventCreateManyTargetCountryInputEnvelope
    set?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    disconnect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    delete?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    update?: TariffEventUpdateWithWhereUniqueWithoutTargetCountryInput | TariffEventUpdateWithWhereUniqueWithoutTargetCountryInput[]
    updateMany?: TariffEventUpdateManyWithWhereWithoutTargetCountryInput | TariffEventUpdateManyWithWhereWithoutTargetCountryInput[]
    deleteMany?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
  }

  export type SectorDataUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<SectorDataCreateWithoutCountryInput, SectorDataUncheckedCreateWithoutCountryInput> | SectorDataCreateWithoutCountryInput[] | SectorDataUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutCountryInput | SectorDataCreateOrConnectWithoutCountryInput[]
    upsert?: SectorDataUpsertWithWhereUniqueWithoutCountryInput | SectorDataUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: SectorDataCreateManyCountryInputEnvelope
    set?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    disconnect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    delete?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    update?: SectorDataUpdateWithWhereUniqueWithoutCountryInput | SectorDataUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: SectorDataUpdateManyWithWhereWithoutCountryInput | SectorDataUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: SectorDataScalarWhereInput | SectorDataScalarWhereInput[]
  }

  export type TariffEventCreateNestedManyWithoutSectorInput = {
    create?: XOR<TariffEventCreateWithoutSectorInput, TariffEventUncheckedCreateWithoutSectorInput> | TariffEventCreateWithoutSectorInput[] | TariffEventUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSectorInput | TariffEventCreateOrConnectWithoutSectorInput[]
    createMany?: TariffEventCreateManySectorInputEnvelope
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
  }

  export type SectorDataCreateNestedManyWithoutSectorInput = {
    create?: XOR<SectorDataCreateWithoutSectorInput, SectorDataUncheckedCreateWithoutSectorInput> | SectorDataCreateWithoutSectorInput[] | SectorDataUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutSectorInput | SectorDataCreateOrConnectWithoutSectorInput[]
    createMany?: SectorDataCreateManySectorInputEnvelope
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
  }

  export type TariffEventUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<TariffEventCreateWithoutSectorInput, TariffEventUncheckedCreateWithoutSectorInput> | TariffEventCreateWithoutSectorInput[] | TariffEventUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSectorInput | TariffEventCreateOrConnectWithoutSectorInput[]
    createMany?: TariffEventCreateManySectorInputEnvelope
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
  }

  export type SectorDataUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<SectorDataCreateWithoutSectorInput, SectorDataUncheckedCreateWithoutSectorInput> | SectorDataCreateWithoutSectorInput[] | SectorDataUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutSectorInput | SectorDataCreateOrConnectWithoutSectorInput[]
    createMany?: SectorDataCreateManySectorInputEnvelope
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
  }

  export type TariffEventUpdateManyWithoutSectorNestedInput = {
    create?: XOR<TariffEventCreateWithoutSectorInput, TariffEventUncheckedCreateWithoutSectorInput> | TariffEventCreateWithoutSectorInput[] | TariffEventUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSectorInput | TariffEventCreateOrConnectWithoutSectorInput[]
    upsert?: TariffEventUpsertWithWhereUniqueWithoutSectorInput | TariffEventUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: TariffEventCreateManySectorInputEnvelope
    set?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    disconnect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    delete?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    update?: TariffEventUpdateWithWhereUniqueWithoutSectorInput | TariffEventUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: TariffEventUpdateManyWithWhereWithoutSectorInput | TariffEventUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
  }

  export type SectorDataUpdateManyWithoutSectorNestedInput = {
    create?: XOR<SectorDataCreateWithoutSectorInput, SectorDataUncheckedCreateWithoutSectorInput> | SectorDataCreateWithoutSectorInput[] | SectorDataUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutSectorInput | SectorDataCreateOrConnectWithoutSectorInput[]
    upsert?: SectorDataUpsertWithWhereUniqueWithoutSectorInput | SectorDataUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: SectorDataCreateManySectorInputEnvelope
    set?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    disconnect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    delete?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    update?: SectorDataUpdateWithWhereUniqueWithoutSectorInput | SectorDataUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: SectorDataUpdateManyWithWhereWithoutSectorInput | SectorDataUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: SectorDataScalarWhereInput | SectorDataScalarWhereInput[]
  }

  export type TariffEventUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<TariffEventCreateWithoutSectorInput, TariffEventUncheckedCreateWithoutSectorInput> | TariffEventCreateWithoutSectorInput[] | TariffEventUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TariffEventCreateOrConnectWithoutSectorInput | TariffEventCreateOrConnectWithoutSectorInput[]
    upsert?: TariffEventUpsertWithWhereUniqueWithoutSectorInput | TariffEventUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: TariffEventCreateManySectorInputEnvelope
    set?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    disconnect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    delete?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    connect?: TariffEventWhereUniqueInput | TariffEventWhereUniqueInput[]
    update?: TariffEventUpdateWithWhereUniqueWithoutSectorInput | TariffEventUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: TariffEventUpdateManyWithWhereWithoutSectorInput | TariffEventUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
  }

  export type SectorDataUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<SectorDataCreateWithoutSectorInput, SectorDataUncheckedCreateWithoutSectorInput> | SectorDataCreateWithoutSectorInput[] | SectorDataUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SectorDataCreateOrConnectWithoutSectorInput | SectorDataCreateOrConnectWithoutSectorInput[]
    upsert?: SectorDataUpsertWithWhereUniqueWithoutSectorInput | SectorDataUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: SectorDataCreateManySectorInputEnvelope
    set?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    disconnect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    delete?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    connect?: SectorDataWhereUniqueInput | SectorDataWhereUniqueInput[]
    update?: SectorDataUpdateWithWhereUniqueWithoutSectorInput | SectorDataUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: SectorDataUpdateManyWithWhereWithoutSectorInput | SectorDataUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: SectorDataScalarWhereInput | SectorDataScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutTariffFromSourceInput = {
    create?: XOR<CountryCreateWithoutTariffFromSourceInput, CountryUncheckedCreateWithoutTariffFromSourceInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTariffFromSourceInput
    connect?: CountryWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutTariffToTargetInput = {
    create?: XOR<CountryCreateWithoutTariffToTargetInput, CountryUncheckedCreateWithoutTariffToTargetInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTariffToTargetInput
    connect?: CountryWhereUniqueInput
  }

  export type SectorCreateNestedOneWithoutTariffsInput = {
    create?: XOR<SectorCreateWithoutTariffsInput, SectorUncheckedCreateWithoutTariffsInput>
    connectOrCreate?: SectorCreateOrConnectWithoutTariffsInput
    connect?: SectorWhereUniqueInput
  }

  export type StockImpactCreateNestedManyWithoutTariffEventInput = {
    create?: XOR<StockImpactCreateWithoutTariffEventInput, StockImpactUncheckedCreateWithoutTariffEventInput> | StockImpactCreateWithoutTariffEventInput[] | StockImpactUncheckedCreateWithoutTariffEventInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutTariffEventInput | StockImpactCreateOrConnectWithoutTariffEventInput[]
    createMany?: StockImpactCreateManyTariffEventInputEnvelope
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
  }

  export type StockImpactUncheckedCreateNestedManyWithoutTariffEventInput = {
    create?: XOR<StockImpactCreateWithoutTariffEventInput, StockImpactUncheckedCreateWithoutTariffEventInput> | StockImpactCreateWithoutTariffEventInput[] | StockImpactUncheckedCreateWithoutTariffEventInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutTariffEventInput | StockImpactCreateOrConnectWithoutTariffEventInput[]
    createMany?: StockImpactCreateManyTariffEventInputEnvelope
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CountryUpdateOneRequiredWithoutTariffFromSourceNestedInput = {
    create?: XOR<CountryCreateWithoutTariffFromSourceInput, CountryUncheckedCreateWithoutTariffFromSourceInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTariffFromSourceInput
    upsert?: CountryUpsertWithoutTariffFromSourceInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutTariffFromSourceInput, CountryUpdateWithoutTariffFromSourceInput>, CountryUncheckedUpdateWithoutTariffFromSourceInput>
  }

  export type CountryUpdateOneRequiredWithoutTariffToTargetNestedInput = {
    create?: XOR<CountryCreateWithoutTariffToTargetInput, CountryUncheckedCreateWithoutTariffToTargetInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTariffToTargetInput
    upsert?: CountryUpsertWithoutTariffToTargetInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutTariffToTargetInput, CountryUpdateWithoutTariffToTargetInput>, CountryUncheckedUpdateWithoutTariffToTargetInput>
  }

  export type SectorUpdateOneRequiredWithoutTariffsNestedInput = {
    create?: XOR<SectorCreateWithoutTariffsInput, SectorUncheckedCreateWithoutTariffsInput>
    connectOrCreate?: SectorCreateOrConnectWithoutTariffsInput
    upsert?: SectorUpsertWithoutTariffsInput
    connect?: SectorWhereUniqueInput
    update?: XOR<XOR<SectorUpdateToOneWithWhereWithoutTariffsInput, SectorUpdateWithoutTariffsInput>, SectorUncheckedUpdateWithoutTariffsInput>
  }

  export type StockImpactUpdateManyWithoutTariffEventNestedInput = {
    create?: XOR<StockImpactCreateWithoutTariffEventInput, StockImpactUncheckedCreateWithoutTariffEventInput> | StockImpactCreateWithoutTariffEventInput[] | StockImpactUncheckedCreateWithoutTariffEventInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutTariffEventInput | StockImpactCreateOrConnectWithoutTariffEventInput[]
    upsert?: StockImpactUpsertWithWhereUniqueWithoutTariffEventInput | StockImpactUpsertWithWhereUniqueWithoutTariffEventInput[]
    createMany?: StockImpactCreateManyTariffEventInputEnvelope
    set?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    disconnect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    delete?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    update?: StockImpactUpdateWithWhereUniqueWithoutTariffEventInput | StockImpactUpdateWithWhereUniqueWithoutTariffEventInput[]
    updateMany?: StockImpactUpdateManyWithWhereWithoutTariffEventInput | StockImpactUpdateManyWithWhereWithoutTariffEventInput[]
    deleteMany?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
  }

  export type StockImpactUncheckedUpdateManyWithoutTariffEventNestedInput = {
    create?: XOR<StockImpactCreateWithoutTariffEventInput, StockImpactUncheckedCreateWithoutTariffEventInput> | StockImpactCreateWithoutTariffEventInput[] | StockImpactUncheckedCreateWithoutTariffEventInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutTariffEventInput | StockImpactCreateOrConnectWithoutTariffEventInput[]
    upsert?: StockImpactUpsertWithWhereUniqueWithoutTariffEventInput | StockImpactUpsertWithWhereUniqueWithoutTariffEventInput[]
    createMany?: StockImpactCreateManyTariffEventInputEnvelope
    set?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    disconnect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    delete?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    update?: StockImpactUpdateWithWhereUniqueWithoutTariffEventInput | StockImpactUpdateWithWhereUniqueWithoutTariffEventInput[]
    updateMany?: StockImpactUpdateManyWithWhereWithoutTariffEventInput | StockImpactUpdateManyWithWhereWithoutTariffEventInput[]
    deleteMany?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutSectorDataInput = {
    create?: XOR<CountryCreateWithoutSectorDataInput, CountryUncheckedCreateWithoutSectorDataInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSectorDataInput
    connect?: CountryWhereUniqueInput
  }

  export type SectorCreateNestedOneWithoutSectorDataInput = {
    create?: XOR<SectorCreateWithoutSectorDataInput, SectorUncheckedCreateWithoutSectorDataInput>
    connectOrCreate?: SectorCreateOrConnectWithoutSectorDataInput
    connect?: SectorWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryUpdateOneRequiredWithoutSectorDataNestedInput = {
    create?: XOR<CountryCreateWithoutSectorDataInput, CountryUncheckedCreateWithoutSectorDataInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSectorDataInput
    upsert?: CountryUpsertWithoutSectorDataInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutSectorDataInput, CountryUpdateWithoutSectorDataInput>, CountryUncheckedUpdateWithoutSectorDataInput>
  }

  export type SectorUpdateOneRequiredWithoutSectorDataNestedInput = {
    create?: XOR<SectorCreateWithoutSectorDataInput, SectorUncheckedCreateWithoutSectorDataInput>
    connectOrCreate?: SectorCreateOrConnectWithoutSectorDataInput
    upsert?: SectorUpsertWithoutSectorDataInput
    connect?: SectorWhereUniqueInput
    update?: XOR<XOR<SectorUpdateToOneWithWhereWithoutSectorDataInput, SectorUpdateWithoutSectorDataInput>, SectorUncheckedUpdateWithoutSectorDataInput>
  }

  export type StockCreateNestedManyWithoutMarketInput = {
    create?: XOR<StockCreateWithoutMarketInput, StockUncheckedCreateWithoutMarketInput> | StockCreateWithoutMarketInput[] | StockUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMarketInput | StockCreateOrConnectWithoutMarketInput[]
    createMany?: StockCreateManyMarketInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type StockImpactCreateNestedManyWithoutMarketInput = {
    create?: XOR<StockImpactCreateWithoutMarketInput, StockImpactUncheckedCreateWithoutMarketInput> | StockImpactCreateWithoutMarketInput[] | StockImpactUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutMarketInput | StockImpactCreateOrConnectWithoutMarketInput[]
    createMany?: StockImpactCreateManyMarketInputEnvelope
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<StockCreateWithoutMarketInput, StockUncheckedCreateWithoutMarketInput> | StockCreateWithoutMarketInput[] | StockUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMarketInput | StockCreateOrConnectWithoutMarketInput[]
    createMany?: StockCreateManyMarketInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type StockImpactUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<StockImpactCreateWithoutMarketInput, StockImpactUncheckedCreateWithoutMarketInput> | StockImpactCreateWithoutMarketInput[] | StockImpactUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutMarketInput | StockImpactCreateOrConnectWithoutMarketInput[]
    createMany?: StockImpactCreateManyMarketInputEnvelope
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
  }

  export type StockUpdateManyWithoutMarketNestedInput = {
    create?: XOR<StockCreateWithoutMarketInput, StockUncheckedCreateWithoutMarketInput> | StockCreateWithoutMarketInput[] | StockUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMarketInput | StockCreateOrConnectWithoutMarketInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutMarketInput | StockUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: StockCreateManyMarketInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutMarketInput | StockUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: StockUpdateManyWithWhereWithoutMarketInput | StockUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type StockImpactUpdateManyWithoutMarketNestedInput = {
    create?: XOR<StockImpactCreateWithoutMarketInput, StockImpactUncheckedCreateWithoutMarketInput> | StockImpactCreateWithoutMarketInput[] | StockImpactUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutMarketInput | StockImpactCreateOrConnectWithoutMarketInput[]
    upsert?: StockImpactUpsertWithWhereUniqueWithoutMarketInput | StockImpactUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: StockImpactCreateManyMarketInputEnvelope
    set?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    disconnect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    delete?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    update?: StockImpactUpdateWithWhereUniqueWithoutMarketInput | StockImpactUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: StockImpactUpdateManyWithWhereWithoutMarketInput | StockImpactUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<StockCreateWithoutMarketInput, StockUncheckedCreateWithoutMarketInput> | StockCreateWithoutMarketInput[] | StockUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMarketInput | StockCreateOrConnectWithoutMarketInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutMarketInput | StockUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: StockCreateManyMarketInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutMarketInput | StockUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: StockUpdateManyWithWhereWithoutMarketInput | StockUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type StockImpactUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<StockImpactCreateWithoutMarketInput, StockImpactUncheckedCreateWithoutMarketInput> | StockImpactCreateWithoutMarketInput[] | StockImpactUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutMarketInput | StockImpactCreateOrConnectWithoutMarketInput[]
    upsert?: StockImpactUpsertWithWhereUniqueWithoutMarketInput | StockImpactUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: StockImpactCreateManyMarketInputEnvelope
    set?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    disconnect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    delete?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    update?: StockImpactUpdateWithWhereUniqueWithoutMarketInput | StockImpactUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: StockImpactUpdateManyWithWhereWithoutMarketInput | StockImpactUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
  }

  export type StockMarketCreateNestedOneWithoutStocksInput = {
    create?: XOR<StockMarketCreateWithoutStocksInput, StockMarketUncheckedCreateWithoutStocksInput>
    connectOrCreate?: StockMarketCreateOrConnectWithoutStocksInput
    connect?: StockMarketWhereUniqueInput
  }

  export type StockPriceCreateNestedManyWithoutStockInput = {
    create?: XOR<StockPriceCreateWithoutStockInput, StockPriceUncheckedCreateWithoutStockInput> | StockPriceCreateWithoutStockInput[] | StockPriceUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutStockInput | StockPriceCreateOrConnectWithoutStockInput[]
    createMany?: StockPriceCreateManyStockInputEnvelope
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
  }

  export type StockImpactCreateNestedManyWithoutStockInput = {
    create?: XOR<StockImpactCreateWithoutStockInput, StockImpactUncheckedCreateWithoutStockInput> | StockImpactCreateWithoutStockInput[] | StockImpactUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutStockInput | StockImpactCreateOrConnectWithoutStockInput[]
    createMany?: StockImpactCreateManyStockInputEnvelope
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
  }

  export type StockPriceUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<StockPriceCreateWithoutStockInput, StockPriceUncheckedCreateWithoutStockInput> | StockPriceCreateWithoutStockInput[] | StockPriceUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutStockInput | StockPriceCreateOrConnectWithoutStockInput[]
    createMany?: StockPriceCreateManyStockInputEnvelope
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
  }

  export type StockImpactUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<StockImpactCreateWithoutStockInput, StockImpactUncheckedCreateWithoutStockInput> | StockImpactCreateWithoutStockInput[] | StockImpactUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutStockInput | StockImpactCreateOrConnectWithoutStockInput[]
    createMany?: StockImpactCreateManyStockInputEnvelope
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
  }

  export type StockMarketUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<StockMarketCreateWithoutStocksInput, StockMarketUncheckedCreateWithoutStocksInput>
    connectOrCreate?: StockMarketCreateOrConnectWithoutStocksInput
    upsert?: StockMarketUpsertWithoutStocksInput
    connect?: StockMarketWhereUniqueInput
    update?: XOR<XOR<StockMarketUpdateToOneWithWhereWithoutStocksInput, StockMarketUpdateWithoutStocksInput>, StockMarketUncheckedUpdateWithoutStocksInput>
  }

  export type StockPriceUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockPriceCreateWithoutStockInput, StockPriceUncheckedCreateWithoutStockInput> | StockPriceCreateWithoutStockInput[] | StockPriceUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutStockInput | StockPriceCreateOrConnectWithoutStockInput[]
    upsert?: StockPriceUpsertWithWhereUniqueWithoutStockInput | StockPriceUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockPriceCreateManyStockInputEnvelope
    set?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    disconnect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    delete?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    update?: StockPriceUpdateWithWhereUniqueWithoutStockInput | StockPriceUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockPriceUpdateManyWithWhereWithoutStockInput | StockPriceUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
  }

  export type StockImpactUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockImpactCreateWithoutStockInput, StockImpactUncheckedCreateWithoutStockInput> | StockImpactCreateWithoutStockInput[] | StockImpactUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutStockInput | StockImpactCreateOrConnectWithoutStockInput[]
    upsert?: StockImpactUpsertWithWhereUniqueWithoutStockInput | StockImpactUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockImpactCreateManyStockInputEnvelope
    set?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    disconnect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    delete?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    update?: StockImpactUpdateWithWhereUniqueWithoutStockInput | StockImpactUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockImpactUpdateManyWithWhereWithoutStockInput | StockImpactUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
  }

  export type StockPriceUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockPriceCreateWithoutStockInput, StockPriceUncheckedCreateWithoutStockInput> | StockPriceCreateWithoutStockInput[] | StockPriceUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutStockInput | StockPriceCreateOrConnectWithoutStockInput[]
    upsert?: StockPriceUpsertWithWhereUniqueWithoutStockInput | StockPriceUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockPriceCreateManyStockInputEnvelope
    set?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    disconnect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    delete?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    update?: StockPriceUpdateWithWhereUniqueWithoutStockInput | StockPriceUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockPriceUpdateManyWithWhereWithoutStockInput | StockPriceUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
  }

  export type StockImpactUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockImpactCreateWithoutStockInput, StockImpactUncheckedCreateWithoutStockInput> | StockImpactCreateWithoutStockInput[] | StockImpactUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockImpactCreateOrConnectWithoutStockInput | StockImpactCreateOrConnectWithoutStockInput[]
    upsert?: StockImpactUpsertWithWhereUniqueWithoutStockInput | StockImpactUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockImpactCreateManyStockInputEnvelope
    set?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    disconnect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    delete?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    connect?: StockImpactWhereUniqueInput | StockImpactWhereUniqueInput[]
    update?: StockImpactUpdateWithWhereUniqueWithoutStockInput | StockImpactUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockImpactUpdateManyWithWhereWithoutStockInput | StockImpactUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
  }

  export type StockCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<StockCreateWithoutPriceHistoryInput, StockUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: StockCreateOrConnectWithoutPriceHistoryInput
    connect?: StockWhereUniqueInput
  }

  export type StockUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<StockCreateWithoutPriceHistoryInput, StockUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: StockCreateOrConnectWithoutPriceHistoryInput
    upsert?: StockUpsertWithoutPriceHistoryInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutPriceHistoryInput, StockUpdateWithoutPriceHistoryInput>, StockUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type TariffEventCreateNestedOneWithoutStockImpactsInput = {
    create?: XOR<TariffEventCreateWithoutStockImpactsInput, TariffEventUncheckedCreateWithoutStockImpactsInput>
    connectOrCreate?: TariffEventCreateOrConnectWithoutStockImpactsInput
    connect?: TariffEventWhereUniqueInput
  }

  export type StockCreateNestedOneWithoutImpactsInput = {
    create?: XOR<StockCreateWithoutImpactsInput, StockUncheckedCreateWithoutImpactsInput>
    connectOrCreate?: StockCreateOrConnectWithoutImpactsInput
    connect?: StockWhereUniqueInput
  }

  export type StockMarketCreateNestedOneWithoutImpactsInput = {
    create?: XOR<StockMarketCreateWithoutImpactsInput, StockMarketUncheckedCreateWithoutImpactsInput>
    connectOrCreate?: StockMarketCreateOrConnectWithoutImpactsInput
    connect?: StockMarketWhereUniqueInput
  }

  export type TariffEventUpdateOneRequiredWithoutStockImpactsNestedInput = {
    create?: XOR<TariffEventCreateWithoutStockImpactsInput, TariffEventUncheckedCreateWithoutStockImpactsInput>
    connectOrCreate?: TariffEventCreateOrConnectWithoutStockImpactsInput
    upsert?: TariffEventUpsertWithoutStockImpactsInput
    connect?: TariffEventWhereUniqueInput
    update?: XOR<XOR<TariffEventUpdateToOneWithWhereWithoutStockImpactsInput, TariffEventUpdateWithoutStockImpactsInput>, TariffEventUncheckedUpdateWithoutStockImpactsInput>
  }

  export type StockUpdateOneRequiredWithoutImpactsNestedInput = {
    create?: XOR<StockCreateWithoutImpactsInput, StockUncheckedCreateWithoutImpactsInput>
    connectOrCreate?: StockCreateOrConnectWithoutImpactsInput
    upsert?: StockUpsertWithoutImpactsInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutImpactsInput, StockUpdateWithoutImpactsInput>, StockUncheckedUpdateWithoutImpactsInput>
  }

  export type StockMarketUpdateOneRequiredWithoutImpactsNestedInput = {
    create?: XOR<StockMarketCreateWithoutImpactsInput, StockMarketUncheckedCreateWithoutImpactsInput>
    connectOrCreate?: StockMarketCreateOrConnectWithoutImpactsInput
    upsert?: StockMarketUpsertWithoutImpactsInput
    connect?: StockMarketWhereUniqueInput
    update?: XOR<XOR<StockMarketUpdateToOneWithWhereWithoutImpactsInput, StockMarketUpdateWithoutImpactsInput>, StockMarketUncheckedUpdateWithoutImpactsInput>
  }

  export type NewsArticleCreatekeyPhrasesInput = {
    set: string[]
  }

  export type NewsArticleCreatecountriesInput = {
    set: string[]
  }

  export type NewsArticleCreatesectorsInput = {
    set: string[]
  }

  export type NewsArticleUpdatekeyPhrasesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NewsArticleUpdatecountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NewsArticleUpdatesectorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlertCreatecountriesInput = {
    set: string[]
  }

  export type AlertCreatesectorsInput = {
    set: string[]
  }

  export type AlertCreatekeywordsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAlertsInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type AlertUpdatecountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlertUpdatesectorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlertUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    upsert?: UserUpsertWithoutAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertsInput, UserUpdateWithoutAlertsInput>, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type SavedSearchCreatecountriesInput = {
    set: string[]
  }

  export type SavedSearchCreatesectorsInput = {
    set: string[]
  }

  export type SavedSearchCreatekeywordsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSavedSearchesInput = {
    create?: XOR<UserCreateWithoutSavedSearchesInput, UserUncheckedCreateWithoutSavedSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedSearchesInput
    connect?: UserWhereUniqueInput
  }

  export type SavedSearchUpdatecountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SavedSearchUpdatesectorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SavedSearchUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSavedSearchesNestedInput = {
    create?: XOR<UserCreateWithoutSavedSearchesInput, UserUncheckedCreateWithoutSavedSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedSearchesInput
    upsert?: UserUpsertWithoutSavedSearchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedSearchesInput, UserUpdateWithoutSavedSearchesInput>, UserUncheckedUpdateWithoutSavedSearchesInput>
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type AlertCreateWithoutUserInput = {
    id?: string
    alertType: $Enums.AlertType
    countries?: AlertCreatecountriesInput | string[]
    sectors?: AlertCreatesectorsInput | string[]
    keywords?: AlertCreatekeywordsInput | string[]
    minTariffRate?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUncheckedCreateWithoutUserInput = {
    id?: string
    alertType: $Enums.AlertType
    countries?: AlertCreatecountriesInput | string[]
    sectors?: AlertCreatesectorsInput | string[]
    keywords?: AlertCreatekeywordsInput | string[]
    minTariffRate?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertCreateManyUserInputEnvelope = {
    data: AlertCreateManyUserInput | AlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedSearchCreateWithoutUserInput = {
    id?: string
    name: string
    countries?: SavedSearchCreatecountriesInput | string[]
    sectors?: SavedSearchCreatesectorsInput | string[]
    dateRange?: string | null
    keywords?: SavedSearchCreatekeywordsInput | string[]
    createdAt?: Date | string
  }

  export type SavedSearchUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    countries?: SavedSearchCreatecountriesInput | string[]
    sectors?: SavedSearchCreatesectorsInput | string[]
    dateRange?: string | null
    keywords?: SavedSearchCreatekeywordsInput | string[]
    createdAt?: Date | string
  }

  export type SavedSearchCreateOrConnectWithoutUserInput = {
    where: SavedSearchWhereUniqueInput
    create: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput>
  }

  export type SavedSearchCreateManyUserInputEnvelope = {
    data: SavedSearchCreateManyUserInput | SavedSearchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlertUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    userId?: StringFilter<"Alert"> | string
    alertType?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    countries?: StringNullableListFilter<"Alert">
    sectors?: StringNullableListFilter<"Alert">
    keywords?: StringNullableListFilter<"Alert">
    minTariffRate?: FloatNullableFilter<"Alert"> | number | null
    active?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type SavedSearchUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedSearchWhereUniqueInput
    update: XOR<SavedSearchUpdateWithoutUserInput, SavedSearchUncheckedUpdateWithoutUserInput>
    create: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput>
  }

  export type SavedSearchUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedSearchWhereUniqueInput
    data: XOR<SavedSearchUpdateWithoutUserInput, SavedSearchUncheckedUpdateWithoutUserInput>
  }

  export type SavedSearchUpdateManyWithWhereWithoutUserInput = {
    where: SavedSearchScalarWhereInput
    data: XOR<SavedSearchUpdateManyMutationInput, SavedSearchUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedSearchScalarWhereInput = {
    AND?: SavedSearchScalarWhereInput | SavedSearchScalarWhereInput[]
    OR?: SavedSearchScalarWhereInput[]
    NOT?: SavedSearchScalarWhereInput | SavedSearchScalarWhereInput[]
    id?: StringFilter<"SavedSearch"> | string
    userId?: StringFilter<"SavedSearch"> | string
    name?: StringFilter<"SavedSearch"> | string
    countries?: StringNullableListFilter<"SavedSearch">
    sectors?: StringNullableListFilter<"SavedSearch">
    dateRange?: StringNullableFilter<"SavedSearch"> | string | null
    keywords?: StringNullableListFilter<"SavedSearch">
    createdAt?: DateTimeFilter<"SavedSearch"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    format?: StringFilter<"Report"> | string
    url?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type TariffEventCreateWithoutSourceCountryInput = {
    id?: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetCountry: CountryCreateNestedOneWithoutTariffToTargetInput
    sector: SectorCreateNestedOneWithoutTariffsInput
    stockImpacts?: StockImpactCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventUncheckedCreateWithoutSourceCountryInput = {
    id?: string
    targetCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stockImpacts?: StockImpactUncheckedCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventCreateOrConnectWithoutSourceCountryInput = {
    where: TariffEventWhereUniqueInput
    create: XOR<TariffEventCreateWithoutSourceCountryInput, TariffEventUncheckedCreateWithoutSourceCountryInput>
  }

  export type TariffEventCreateManySourceCountryInputEnvelope = {
    data: TariffEventCreateManySourceCountryInput | TariffEventCreateManySourceCountryInput[]
    skipDuplicates?: boolean
  }

  export type TariffEventCreateWithoutTargetCountryInput = {
    id?: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceCountry: CountryCreateNestedOneWithoutTariffFromSourceInput
    sector: SectorCreateNestedOneWithoutTariffsInput
    stockImpacts?: StockImpactCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventUncheckedCreateWithoutTargetCountryInput = {
    id?: string
    sourceCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stockImpacts?: StockImpactUncheckedCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventCreateOrConnectWithoutTargetCountryInput = {
    where: TariffEventWhereUniqueInput
    create: XOR<TariffEventCreateWithoutTargetCountryInput, TariffEventUncheckedCreateWithoutTargetCountryInput>
  }

  export type TariffEventCreateManyTargetCountryInputEnvelope = {
    data: TariffEventCreateManyTargetCountryInput | TariffEventCreateManyTargetCountryInput[]
    skipDuplicates?: boolean
  }

  export type SectorDataCreateWithoutCountryInput = {
    id?: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sector: SectorCreateNestedOneWithoutSectorDataInput
  }

  export type SectorDataUncheckedCreateWithoutCountryInput = {
    id?: string
    sectorId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorDataCreateOrConnectWithoutCountryInput = {
    where: SectorDataWhereUniqueInput
    create: XOR<SectorDataCreateWithoutCountryInput, SectorDataUncheckedCreateWithoutCountryInput>
  }

  export type SectorDataCreateManyCountryInputEnvelope = {
    data: SectorDataCreateManyCountryInput | SectorDataCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type TariffEventUpsertWithWhereUniqueWithoutSourceCountryInput = {
    where: TariffEventWhereUniqueInput
    update: XOR<TariffEventUpdateWithoutSourceCountryInput, TariffEventUncheckedUpdateWithoutSourceCountryInput>
    create: XOR<TariffEventCreateWithoutSourceCountryInput, TariffEventUncheckedCreateWithoutSourceCountryInput>
  }

  export type TariffEventUpdateWithWhereUniqueWithoutSourceCountryInput = {
    where: TariffEventWhereUniqueInput
    data: XOR<TariffEventUpdateWithoutSourceCountryInput, TariffEventUncheckedUpdateWithoutSourceCountryInput>
  }

  export type TariffEventUpdateManyWithWhereWithoutSourceCountryInput = {
    where: TariffEventScalarWhereInput
    data: XOR<TariffEventUpdateManyMutationInput, TariffEventUncheckedUpdateManyWithoutSourceCountryInput>
  }

  export type TariffEventScalarWhereInput = {
    AND?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
    OR?: TariffEventScalarWhereInput[]
    NOT?: TariffEventScalarWhereInput | TariffEventScalarWhereInput[]
    id?: StringFilter<"TariffEvent"> | string
    sourceCountryId?: StringFilter<"TariffEvent"> | string
    targetCountryId?: StringFilter<"TariffEvent"> | string
    sectorId?: StringFilter<"TariffEvent"> | string
    tariffRate?: FloatFilter<"TariffEvent"> | number
    previousRate?: FloatNullableFilter<"TariffEvent"> | number | null
    announcementDate?: DateTimeFilter<"TariffEvent"> | Date | string
    effectiveDate?: DateTimeFilter<"TariffEvent"> | Date | string
    expiryDate?: DateTimeNullableFilter<"TariffEvent"> | Date | string | null
    description?: StringNullableFilter<"TariffEvent"> | string | null
    impactScore?: FloatNullableFilter<"TariffEvent"> | number | null
    sourceUrl?: StringNullableFilter<"TariffEvent"> | string | null
    createdAt?: DateTimeFilter<"TariffEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TariffEvent"> | Date | string
  }

  export type TariffEventUpsertWithWhereUniqueWithoutTargetCountryInput = {
    where: TariffEventWhereUniqueInput
    update: XOR<TariffEventUpdateWithoutTargetCountryInput, TariffEventUncheckedUpdateWithoutTargetCountryInput>
    create: XOR<TariffEventCreateWithoutTargetCountryInput, TariffEventUncheckedCreateWithoutTargetCountryInput>
  }

  export type TariffEventUpdateWithWhereUniqueWithoutTargetCountryInput = {
    where: TariffEventWhereUniqueInput
    data: XOR<TariffEventUpdateWithoutTargetCountryInput, TariffEventUncheckedUpdateWithoutTargetCountryInput>
  }

  export type TariffEventUpdateManyWithWhereWithoutTargetCountryInput = {
    where: TariffEventScalarWhereInput
    data: XOR<TariffEventUpdateManyMutationInput, TariffEventUncheckedUpdateManyWithoutTargetCountryInput>
  }

  export type SectorDataUpsertWithWhereUniqueWithoutCountryInput = {
    where: SectorDataWhereUniqueInput
    update: XOR<SectorDataUpdateWithoutCountryInput, SectorDataUncheckedUpdateWithoutCountryInput>
    create: XOR<SectorDataCreateWithoutCountryInput, SectorDataUncheckedCreateWithoutCountryInput>
  }

  export type SectorDataUpdateWithWhereUniqueWithoutCountryInput = {
    where: SectorDataWhereUniqueInput
    data: XOR<SectorDataUpdateWithoutCountryInput, SectorDataUncheckedUpdateWithoutCountryInput>
  }

  export type SectorDataUpdateManyWithWhereWithoutCountryInput = {
    where: SectorDataScalarWhereInput
    data: XOR<SectorDataUpdateManyMutationInput, SectorDataUncheckedUpdateManyWithoutCountryInput>
  }

  export type SectorDataScalarWhereInput = {
    AND?: SectorDataScalarWhereInput | SectorDataScalarWhereInput[]
    OR?: SectorDataScalarWhereInput[]
    NOT?: SectorDataScalarWhereInput | SectorDataScalarWhereInput[]
    id?: StringFilter<"SectorData"> | string
    countryId?: StringFilter<"SectorData"> | string
    sectorId?: StringFilter<"SectorData"> | string
    gdpValue?: FloatFilter<"SectorData"> | number
    exportValue?: FloatFilter<"SectorData"> | number
    importValue?: FloatFilter<"SectorData"> | number
    employment?: IntNullableFilter<"SectorData"> | number | null
    year?: IntFilter<"SectorData"> | number
    quarter?: IntFilter<"SectorData"> | number
    createdAt?: DateTimeFilter<"SectorData"> | Date | string
    updatedAt?: DateTimeFilter<"SectorData"> | Date | string
  }

  export type TariffEventCreateWithoutSectorInput = {
    id?: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceCountry: CountryCreateNestedOneWithoutTariffFromSourceInput
    targetCountry: CountryCreateNestedOneWithoutTariffToTargetInput
    stockImpacts?: StockImpactCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventUncheckedCreateWithoutSectorInput = {
    id?: string
    sourceCountryId: string
    targetCountryId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stockImpacts?: StockImpactUncheckedCreateNestedManyWithoutTariffEventInput
  }

  export type TariffEventCreateOrConnectWithoutSectorInput = {
    where: TariffEventWhereUniqueInput
    create: XOR<TariffEventCreateWithoutSectorInput, TariffEventUncheckedCreateWithoutSectorInput>
  }

  export type TariffEventCreateManySectorInputEnvelope = {
    data: TariffEventCreateManySectorInput | TariffEventCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type SectorDataCreateWithoutSectorInput = {
    id?: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutSectorDataInput
  }

  export type SectorDataUncheckedCreateWithoutSectorInput = {
    id?: string
    countryId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorDataCreateOrConnectWithoutSectorInput = {
    where: SectorDataWhereUniqueInput
    create: XOR<SectorDataCreateWithoutSectorInput, SectorDataUncheckedCreateWithoutSectorInput>
  }

  export type SectorDataCreateManySectorInputEnvelope = {
    data: SectorDataCreateManySectorInput | SectorDataCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type TariffEventUpsertWithWhereUniqueWithoutSectorInput = {
    where: TariffEventWhereUniqueInput
    update: XOR<TariffEventUpdateWithoutSectorInput, TariffEventUncheckedUpdateWithoutSectorInput>
    create: XOR<TariffEventCreateWithoutSectorInput, TariffEventUncheckedCreateWithoutSectorInput>
  }

  export type TariffEventUpdateWithWhereUniqueWithoutSectorInput = {
    where: TariffEventWhereUniqueInput
    data: XOR<TariffEventUpdateWithoutSectorInput, TariffEventUncheckedUpdateWithoutSectorInput>
  }

  export type TariffEventUpdateManyWithWhereWithoutSectorInput = {
    where: TariffEventScalarWhereInput
    data: XOR<TariffEventUpdateManyMutationInput, TariffEventUncheckedUpdateManyWithoutSectorInput>
  }

  export type SectorDataUpsertWithWhereUniqueWithoutSectorInput = {
    where: SectorDataWhereUniqueInput
    update: XOR<SectorDataUpdateWithoutSectorInput, SectorDataUncheckedUpdateWithoutSectorInput>
    create: XOR<SectorDataCreateWithoutSectorInput, SectorDataUncheckedCreateWithoutSectorInput>
  }

  export type SectorDataUpdateWithWhereUniqueWithoutSectorInput = {
    where: SectorDataWhereUniqueInput
    data: XOR<SectorDataUpdateWithoutSectorInput, SectorDataUncheckedUpdateWithoutSectorInput>
  }

  export type SectorDataUpdateManyWithWhereWithoutSectorInput = {
    where: SectorDataScalarWhereInput
    data: XOR<SectorDataUpdateManyMutationInput, SectorDataUncheckedUpdateManyWithoutSectorInput>
  }

  export type CountryCreateWithoutTariffFromSourceInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffToTarget?: TariffEventCreateNestedManyWithoutTargetCountryInput
    sectorData?: SectorDataCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutTariffFromSourceInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffToTarget?: TariffEventUncheckedCreateNestedManyWithoutTargetCountryInput
    sectorData?: SectorDataUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutTariffFromSourceInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutTariffFromSourceInput, CountryUncheckedCreateWithoutTariffFromSourceInput>
  }

  export type CountryCreateWithoutTariffToTargetInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffFromSource?: TariffEventCreateNestedManyWithoutSourceCountryInput
    sectorData?: SectorDataCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutTariffToTargetInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffFromSource?: TariffEventUncheckedCreateNestedManyWithoutSourceCountryInput
    sectorData?: SectorDataUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutTariffToTargetInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutTariffToTargetInput, CountryUncheckedCreateWithoutTariffToTargetInput>
  }

  export type SectorCreateWithoutTariffsInput = {
    id?: string
    name: string
    description?: string | null
    sectorData?: SectorDataCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateWithoutTariffsInput = {
    id?: string
    name: string
    description?: string | null
    sectorData?: SectorDataUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorCreateOrConnectWithoutTariffsInput = {
    where: SectorWhereUniqueInput
    create: XOR<SectorCreateWithoutTariffsInput, SectorUncheckedCreateWithoutTariffsInput>
  }

  export type StockImpactCreateWithoutTariffEventInput = {
    id?: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
    stock: StockCreateNestedOneWithoutImpactsInput
    market: StockMarketCreateNestedOneWithoutImpactsInput
  }

  export type StockImpactUncheckedCreateWithoutTariffEventInput = {
    id?: string
    stockId: string
    marketId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockImpactCreateOrConnectWithoutTariffEventInput = {
    where: StockImpactWhereUniqueInput
    create: XOR<StockImpactCreateWithoutTariffEventInput, StockImpactUncheckedCreateWithoutTariffEventInput>
  }

  export type StockImpactCreateManyTariffEventInputEnvelope = {
    data: StockImpactCreateManyTariffEventInput | StockImpactCreateManyTariffEventInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutTariffFromSourceInput = {
    update: XOR<CountryUpdateWithoutTariffFromSourceInput, CountryUncheckedUpdateWithoutTariffFromSourceInput>
    create: XOR<CountryCreateWithoutTariffFromSourceInput, CountryUncheckedCreateWithoutTariffFromSourceInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutTariffFromSourceInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutTariffFromSourceInput, CountryUncheckedUpdateWithoutTariffFromSourceInput>
  }

  export type CountryUpdateWithoutTariffFromSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffToTarget?: TariffEventUpdateManyWithoutTargetCountryNestedInput
    sectorData?: SectorDataUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutTariffFromSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffToTarget?: TariffEventUncheckedUpdateManyWithoutTargetCountryNestedInput
    sectorData?: SectorDataUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryUpsertWithoutTariffToTargetInput = {
    update: XOR<CountryUpdateWithoutTariffToTargetInput, CountryUncheckedUpdateWithoutTariffToTargetInput>
    create: XOR<CountryCreateWithoutTariffToTargetInput, CountryUncheckedCreateWithoutTariffToTargetInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutTariffToTargetInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutTariffToTargetInput, CountryUncheckedUpdateWithoutTariffToTargetInput>
  }

  export type CountryUpdateWithoutTariffToTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffFromSource?: TariffEventUpdateManyWithoutSourceCountryNestedInput
    sectorData?: SectorDataUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutTariffToTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffFromSource?: TariffEventUncheckedUpdateManyWithoutSourceCountryNestedInput
    sectorData?: SectorDataUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type SectorUpsertWithoutTariffsInput = {
    update: XOR<SectorUpdateWithoutTariffsInput, SectorUncheckedUpdateWithoutTariffsInput>
    create: XOR<SectorCreateWithoutTariffsInput, SectorUncheckedCreateWithoutTariffsInput>
    where?: SectorWhereInput
  }

  export type SectorUpdateToOneWithWhereWithoutTariffsInput = {
    where?: SectorWhereInput
    data: XOR<SectorUpdateWithoutTariffsInput, SectorUncheckedUpdateWithoutTariffsInput>
  }

  export type SectorUpdateWithoutTariffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectorData?: SectorDataUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateWithoutTariffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectorData?: SectorDataUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type StockImpactUpsertWithWhereUniqueWithoutTariffEventInput = {
    where: StockImpactWhereUniqueInput
    update: XOR<StockImpactUpdateWithoutTariffEventInput, StockImpactUncheckedUpdateWithoutTariffEventInput>
    create: XOR<StockImpactCreateWithoutTariffEventInput, StockImpactUncheckedCreateWithoutTariffEventInput>
  }

  export type StockImpactUpdateWithWhereUniqueWithoutTariffEventInput = {
    where: StockImpactWhereUniqueInput
    data: XOR<StockImpactUpdateWithoutTariffEventInput, StockImpactUncheckedUpdateWithoutTariffEventInput>
  }

  export type StockImpactUpdateManyWithWhereWithoutTariffEventInput = {
    where: StockImpactScalarWhereInput
    data: XOR<StockImpactUpdateManyMutationInput, StockImpactUncheckedUpdateManyWithoutTariffEventInput>
  }

  export type StockImpactScalarWhereInput = {
    AND?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
    OR?: StockImpactScalarWhereInput[]
    NOT?: StockImpactScalarWhereInput | StockImpactScalarWhereInput[]
    id?: StringFilter<"StockImpact"> | string
    tariffEventId?: StringFilter<"StockImpact"> | string
    stockId?: StringFilter<"StockImpact"> | string
    marketId?: StringFilter<"StockImpact"> | string
    priceChangePct?: FloatFilter<"StockImpact"> | number
    volumeChangePct?: FloatNullableFilter<"StockImpact"> | number | null
    correlationScore?: FloatNullableFilter<"StockImpact"> | number | null
    analysisText?: StringNullableFilter<"StockImpact"> | string | null
    createdAt?: DateTimeFilter<"StockImpact"> | Date | string
  }

  export type CountryCreateWithoutSectorDataInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffFromSource?: TariffEventCreateNestedManyWithoutSourceCountryInput
    tariffToTarget?: TariffEventCreateNestedManyWithoutTargetCountryInput
  }

  export type CountryUncheckedCreateWithoutSectorDataInput = {
    id?: string
    name: string
    code: string
    region: string
    flagUrl?: string | null
    economicStatus?: string | null
    tariffFromSource?: TariffEventUncheckedCreateNestedManyWithoutSourceCountryInput
    tariffToTarget?: TariffEventUncheckedCreateNestedManyWithoutTargetCountryInput
  }

  export type CountryCreateOrConnectWithoutSectorDataInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutSectorDataInput, CountryUncheckedCreateWithoutSectorDataInput>
  }

  export type SectorCreateWithoutSectorDataInput = {
    id?: string
    name: string
    description?: string | null
    tariffs?: TariffEventCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateWithoutSectorDataInput = {
    id?: string
    name: string
    description?: string | null
    tariffs?: TariffEventUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorCreateOrConnectWithoutSectorDataInput = {
    where: SectorWhereUniqueInput
    create: XOR<SectorCreateWithoutSectorDataInput, SectorUncheckedCreateWithoutSectorDataInput>
  }

  export type CountryUpsertWithoutSectorDataInput = {
    update: XOR<CountryUpdateWithoutSectorDataInput, CountryUncheckedUpdateWithoutSectorDataInput>
    create: XOR<CountryCreateWithoutSectorDataInput, CountryUncheckedCreateWithoutSectorDataInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutSectorDataInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutSectorDataInput, CountryUncheckedUpdateWithoutSectorDataInput>
  }

  export type CountryUpdateWithoutSectorDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffFromSource?: TariffEventUpdateManyWithoutSourceCountryNestedInput
    tariffToTarget?: TariffEventUpdateManyWithoutTargetCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutSectorDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    flagUrl?: NullableStringFieldUpdateOperationsInput | string | null
    economicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tariffFromSource?: TariffEventUncheckedUpdateManyWithoutSourceCountryNestedInput
    tariffToTarget?: TariffEventUncheckedUpdateManyWithoutTargetCountryNestedInput
  }

  export type SectorUpsertWithoutSectorDataInput = {
    update: XOR<SectorUpdateWithoutSectorDataInput, SectorUncheckedUpdateWithoutSectorDataInput>
    create: XOR<SectorCreateWithoutSectorDataInput, SectorUncheckedCreateWithoutSectorDataInput>
    where?: SectorWhereInput
  }

  export type SectorUpdateToOneWithWhereWithoutSectorDataInput = {
    where?: SectorWhereInput
    data: XOR<SectorUpdateWithoutSectorDataInput, SectorUncheckedUpdateWithoutSectorDataInput>
  }

  export type SectorUpdateWithoutSectorDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tariffs?: TariffEventUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateWithoutSectorDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tariffs?: TariffEventUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type StockCreateWithoutMarketInput = {
    id?: string
    symbol: string
    name: string
    sector: string
    currentPrice: number
    priceHistory?: StockPriceCreateNestedManyWithoutStockInput
    impacts?: StockImpactCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutMarketInput = {
    id?: string
    symbol: string
    name: string
    sector: string
    currentPrice: number
    priceHistory?: StockPriceUncheckedCreateNestedManyWithoutStockInput
    impacts?: StockImpactUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutMarketInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutMarketInput, StockUncheckedCreateWithoutMarketInput>
  }

  export type StockCreateManyMarketInputEnvelope = {
    data: StockCreateManyMarketInput | StockCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type StockImpactCreateWithoutMarketInput = {
    id?: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
    tariffEvent: TariffEventCreateNestedOneWithoutStockImpactsInput
    stock: StockCreateNestedOneWithoutImpactsInput
  }

  export type StockImpactUncheckedCreateWithoutMarketInput = {
    id?: string
    tariffEventId: string
    stockId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockImpactCreateOrConnectWithoutMarketInput = {
    where: StockImpactWhereUniqueInput
    create: XOR<StockImpactCreateWithoutMarketInput, StockImpactUncheckedCreateWithoutMarketInput>
  }

  export type StockImpactCreateManyMarketInputEnvelope = {
    data: StockImpactCreateManyMarketInput | StockImpactCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type StockUpsertWithWhereUniqueWithoutMarketInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutMarketInput, StockUncheckedUpdateWithoutMarketInput>
    create: XOR<StockCreateWithoutMarketInput, StockUncheckedCreateWithoutMarketInput>
  }

  export type StockUpdateWithWhereUniqueWithoutMarketInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutMarketInput, StockUncheckedUpdateWithoutMarketInput>
  }

  export type StockUpdateManyWithWhereWithoutMarketInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutMarketInput>
  }

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[]
    OR?: StockScalarWhereInput[]
    NOT?: StockScalarWhereInput | StockScalarWhereInput[]
    id?: StringFilter<"Stock"> | string
    symbol?: StringFilter<"Stock"> | string
    name?: StringFilter<"Stock"> | string
    marketId?: StringFilter<"Stock"> | string
    sector?: StringFilter<"Stock"> | string
    currentPrice?: FloatFilter<"Stock"> | number
  }

  export type StockImpactUpsertWithWhereUniqueWithoutMarketInput = {
    where: StockImpactWhereUniqueInput
    update: XOR<StockImpactUpdateWithoutMarketInput, StockImpactUncheckedUpdateWithoutMarketInput>
    create: XOR<StockImpactCreateWithoutMarketInput, StockImpactUncheckedCreateWithoutMarketInput>
  }

  export type StockImpactUpdateWithWhereUniqueWithoutMarketInput = {
    where: StockImpactWhereUniqueInput
    data: XOR<StockImpactUpdateWithoutMarketInput, StockImpactUncheckedUpdateWithoutMarketInput>
  }

  export type StockImpactUpdateManyWithWhereWithoutMarketInput = {
    where: StockImpactScalarWhereInput
    data: XOR<StockImpactUpdateManyMutationInput, StockImpactUncheckedUpdateManyWithoutMarketInput>
  }

  export type StockMarketCreateWithoutStocksInput = {
    id?: string
    name: string
    code: string
    country: string
    impacts?: StockImpactCreateNestedManyWithoutMarketInput
  }

  export type StockMarketUncheckedCreateWithoutStocksInput = {
    id?: string
    name: string
    code: string
    country: string
    impacts?: StockImpactUncheckedCreateNestedManyWithoutMarketInput
  }

  export type StockMarketCreateOrConnectWithoutStocksInput = {
    where: StockMarketWhereUniqueInput
    create: XOR<StockMarketCreateWithoutStocksInput, StockMarketUncheckedCreateWithoutStocksInput>
  }

  export type StockPriceCreateWithoutStockInput = {
    id?: string
    date: Date | string
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt?: Date | string
  }

  export type StockPriceUncheckedCreateWithoutStockInput = {
    id?: string
    date: Date | string
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt?: Date | string
  }

  export type StockPriceCreateOrConnectWithoutStockInput = {
    where: StockPriceWhereUniqueInput
    create: XOR<StockPriceCreateWithoutStockInput, StockPriceUncheckedCreateWithoutStockInput>
  }

  export type StockPriceCreateManyStockInputEnvelope = {
    data: StockPriceCreateManyStockInput | StockPriceCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type StockImpactCreateWithoutStockInput = {
    id?: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
    tariffEvent: TariffEventCreateNestedOneWithoutStockImpactsInput
    market: StockMarketCreateNestedOneWithoutImpactsInput
  }

  export type StockImpactUncheckedCreateWithoutStockInput = {
    id?: string
    tariffEventId: string
    marketId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockImpactCreateOrConnectWithoutStockInput = {
    where: StockImpactWhereUniqueInput
    create: XOR<StockImpactCreateWithoutStockInput, StockImpactUncheckedCreateWithoutStockInput>
  }

  export type StockImpactCreateManyStockInputEnvelope = {
    data: StockImpactCreateManyStockInput | StockImpactCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type StockMarketUpsertWithoutStocksInput = {
    update: XOR<StockMarketUpdateWithoutStocksInput, StockMarketUncheckedUpdateWithoutStocksInput>
    create: XOR<StockMarketCreateWithoutStocksInput, StockMarketUncheckedCreateWithoutStocksInput>
    where?: StockMarketWhereInput
  }

  export type StockMarketUpdateToOneWithWhereWithoutStocksInput = {
    where?: StockMarketWhereInput
    data: XOR<StockMarketUpdateWithoutStocksInput, StockMarketUncheckedUpdateWithoutStocksInput>
  }

  export type StockMarketUpdateWithoutStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    impacts?: StockImpactUpdateManyWithoutMarketNestedInput
  }

  export type StockMarketUncheckedUpdateWithoutStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    impacts?: StockImpactUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type StockPriceUpsertWithWhereUniqueWithoutStockInput = {
    where: StockPriceWhereUniqueInput
    update: XOR<StockPriceUpdateWithoutStockInput, StockPriceUncheckedUpdateWithoutStockInput>
    create: XOR<StockPriceCreateWithoutStockInput, StockPriceUncheckedCreateWithoutStockInput>
  }

  export type StockPriceUpdateWithWhereUniqueWithoutStockInput = {
    where: StockPriceWhereUniqueInput
    data: XOR<StockPriceUpdateWithoutStockInput, StockPriceUncheckedUpdateWithoutStockInput>
  }

  export type StockPriceUpdateManyWithWhereWithoutStockInput = {
    where: StockPriceScalarWhereInput
    data: XOR<StockPriceUpdateManyMutationInput, StockPriceUncheckedUpdateManyWithoutStockInput>
  }

  export type StockPriceScalarWhereInput = {
    AND?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
    OR?: StockPriceScalarWhereInput[]
    NOT?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
    id?: StringFilter<"StockPrice"> | string
    stockId?: StringFilter<"StockPrice"> | string
    date?: DateTimeFilter<"StockPrice"> | Date | string
    openPrice?: FloatFilter<"StockPrice"> | number
    highPrice?: FloatFilter<"StockPrice"> | number
    lowPrice?: FloatFilter<"StockPrice"> | number
    closePrice?: FloatFilter<"StockPrice"> | number
    volume?: IntFilter<"StockPrice"> | number
    createdAt?: DateTimeFilter<"StockPrice"> | Date | string
  }

  export type StockImpactUpsertWithWhereUniqueWithoutStockInput = {
    where: StockImpactWhereUniqueInput
    update: XOR<StockImpactUpdateWithoutStockInput, StockImpactUncheckedUpdateWithoutStockInput>
    create: XOR<StockImpactCreateWithoutStockInput, StockImpactUncheckedCreateWithoutStockInput>
  }

  export type StockImpactUpdateWithWhereUniqueWithoutStockInput = {
    where: StockImpactWhereUniqueInput
    data: XOR<StockImpactUpdateWithoutStockInput, StockImpactUncheckedUpdateWithoutStockInput>
  }

  export type StockImpactUpdateManyWithWhereWithoutStockInput = {
    where: StockImpactScalarWhereInput
    data: XOR<StockImpactUpdateManyMutationInput, StockImpactUncheckedUpdateManyWithoutStockInput>
  }

  export type StockCreateWithoutPriceHistoryInput = {
    id?: string
    symbol: string
    name: string
    sector: string
    currentPrice: number
    market: StockMarketCreateNestedOneWithoutStocksInput
    impacts?: StockImpactCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutPriceHistoryInput = {
    id?: string
    symbol: string
    name: string
    marketId: string
    sector: string
    currentPrice: number
    impacts?: StockImpactUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutPriceHistoryInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutPriceHistoryInput, StockUncheckedCreateWithoutPriceHistoryInput>
  }

  export type StockUpsertWithoutPriceHistoryInput = {
    update: XOR<StockUpdateWithoutPriceHistoryInput, StockUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<StockCreateWithoutPriceHistoryInput, StockUncheckedCreateWithoutPriceHistoryInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutPriceHistoryInput, StockUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type StockUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    market?: StockMarketUpdateOneRequiredWithoutStocksNestedInput
    impacts?: StockImpactUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    impacts?: StockImpactUncheckedUpdateManyWithoutStockNestedInput
  }

  export type TariffEventCreateWithoutStockImpactsInput = {
    id?: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceCountry: CountryCreateNestedOneWithoutTariffFromSourceInput
    targetCountry: CountryCreateNestedOneWithoutTariffToTargetInput
    sector: SectorCreateNestedOneWithoutTariffsInput
  }

  export type TariffEventUncheckedCreateWithoutStockImpactsInput = {
    id?: string
    sourceCountryId: string
    targetCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffEventCreateOrConnectWithoutStockImpactsInput = {
    where: TariffEventWhereUniqueInput
    create: XOR<TariffEventCreateWithoutStockImpactsInput, TariffEventUncheckedCreateWithoutStockImpactsInput>
  }

  export type StockCreateWithoutImpactsInput = {
    id?: string
    symbol: string
    name: string
    sector: string
    currentPrice: number
    market: StockMarketCreateNestedOneWithoutStocksInput
    priceHistory?: StockPriceCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutImpactsInput = {
    id?: string
    symbol: string
    name: string
    marketId: string
    sector: string
    currentPrice: number
    priceHistory?: StockPriceUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutImpactsInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutImpactsInput, StockUncheckedCreateWithoutImpactsInput>
  }

  export type StockMarketCreateWithoutImpactsInput = {
    id?: string
    name: string
    code: string
    country: string
    stocks?: StockCreateNestedManyWithoutMarketInput
  }

  export type StockMarketUncheckedCreateWithoutImpactsInput = {
    id?: string
    name: string
    code: string
    country: string
    stocks?: StockUncheckedCreateNestedManyWithoutMarketInput
  }

  export type StockMarketCreateOrConnectWithoutImpactsInput = {
    where: StockMarketWhereUniqueInput
    create: XOR<StockMarketCreateWithoutImpactsInput, StockMarketUncheckedCreateWithoutImpactsInput>
  }

  export type TariffEventUpsertWithoutStockImpactsInput = {
    update: XOR<TariffEventUpdateWithoutStockImpactsInput, TariffEventUncheckedUpdateWithoutStockImpactsInput>
    create: XOR<TariffEventCreateWithoutStockImpactsInput, TariffEventUncheckedCreateWithoutStockImpactsInput>
    where?: TariffEventWhereInput
  }

  export type TariffEventUpdateToOneWithWhereWithoutStockImpactsInput = {
    where?: TariffEventWhereInput
    data: XOR<TariffEventUpdateWithoutStockImpactsInput, TariffEventUncheckedUpdateWithoutStockImpactsInput>
  }

  export type TariffEventUpdateWithoutStockImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceCountry?: CountryUpdateOneRequiredWithoutTariffFromSourceNestedInput
    targetCountry?: CountryUpdateOneRequiredWithoutTariffToTargetNestedInput
    sector?: SectorUpdateOneRequiredWithoutTariffsNestedInput
  }

  export type TariffEventUncheckedUpdateWithoutStockImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUpsertWithoutImpactsInput = {
    update: XOR<StockUpdateWithoutImpactsInput, StockUncheckedUpdateWithoutImpactsInput>
    create: XOR<StockCreateWithoutImpactsInput, StockUncheckedCreateWithoutImpactsInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutImpactsInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutImpactsInput, StockUncheckedUpdateWithoutImpactsInput>
  }

  export type StockUpdateWithoutImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    market?: StockMarketUpdateOneRequiredWithoutStocksNestedInput
    priceHistory?: StockPriceUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    priceHistory?: StockPriceUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StockMarketUpsertWithoutImpactsInput = {
    update: XOR<StockMarketUpdateWithoutImpactsInput, StockMarketUncheckedUpdateWithoutImpactsInput>
    create: XOR<StockMarketCreateWithoutImpactsInput, StockMarketUncheckedCreateWithoutImpactsInput>
    where?: StockMarketWhereInput
  }

  export type StockMarketUpdateToOneWithWhereWithoutImpactsInput = {
    where?: StockMarketWhereInput
    data: XOR<StockMarketUpdateWithoutImpactsInput, StockMarketUncheckedUpdateWithoutImpactsInput>
  }

  export type StockMarketUpdateWithoutImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stocks?: StockUpdateManyWithoutMarketNestedInput
  }

  export type StockMarketUncheckedUpdateWithoutImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stocks?: StockUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type UserCreateWithoutAlertsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    savedSearches?: SavedSearchCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlertsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    savedSearches?: SavedSearchUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
  }

  export type UserUpsertWithoutAlertsInput = {
    update: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedSearches?: SavedSearchUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedSearches?: SavedSearchUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSavedSearchesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedSearchesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedSearchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedSearchesInput, UserUncheckedCreateWithoutSavedSearchesInput>
  }

  export type UserUpsertWithoutSavedSearchesInput = {
    update: XOR<UserUpdateWithoutSavedSearchesInput, UserUncheckedUpdateWithoutSavedSearchesInput>
    create: XOR<UserCreateWithoutSavedSearchesInput, UserUncheckedCreateWithoutSavedSearchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedSearchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedSearchesInput, UserUncheckedUpdateWithoutSavedSearchesInput>
  }

  export type UserUpdateWithoutSavedSearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedSearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutUserInput
    savedSearches?: SavedSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
    savedSearches?: SavedSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutUserNestedInput
    savedSearches?: SavedSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
    savedSearches?: SavedSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlertCreateManyUserInput = {
    id?: string
    alertType: $Enums.AlertType
    countries?: AlertCreatecountriesInput | string[]
    sectors?: AlertCreatesectorsInput | string[]
    keywords?: AlertCreatekeywordsInput | string[]
    minTariffRate?: number | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedSearchCreateManyUserInput = {
    id?: string
    name: string
    countries?: SavedSearchCreatecountriesInput | string[]
    sectors?: SavedSearchCreatesectorsInput | string[]
    dateRange?: string | null
    keywords?: SavedSearchCreatekeywordsInput | string[]
    createdAt?: Date | string
  }

  export type ReportCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.ReportType
    format: string
    url: string
    createdAt?: Date | string
  }

  export type AlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    countries?: AlertUpdatecountriesInput | string[]
    sectors?: AlertUpdatesectorsInput | string[]
    keywords?: AlertUpdatekeywordsInput | string[]
    minTariffRate?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedSearchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedSearchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedSearchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: SavedSearchUpdatecountriesInput | string[]
    sectors?: SavedSearchUpdatesectorsInput | string[]
    dateRange?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: SavedSearchUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    format?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffEventCreateManySourceCountryInput = {
    id?: string
    targetCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffEventCreateManyTargetCountryInput = {
    id?: string
    sourceCountryId: string
    sectorId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorDataCreateManyCountryInput = {
    id?: string
    sectorId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffEventUpdateWithoutSourceCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetCountry?: CountryUpdateOneRequiredWithoutTariffToTargetNestedInput
    sector?: SectorUpdateOneRequiredWithoutTariffsNestedInput
    stockImpacts?: StockImpactUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateWithoutSourceCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockImpacts?: StockImpactUncheckedUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateManyWithoutSourceCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffEventUpdateWithoutTargetCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceCountry?: CountryUpdateOneRequiredWithoutTariffFromSourceNestedInput
    sector?: SectorUpdateOneRequiredWithoutTariffsNestedInput
    stockImpacts?: StockImpactUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateWithoutTargetCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockImpacts?: StockImpactUncheckedUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateManyWithoutTargetCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sector?: SectorUpdateOneRequiredWithoutSectorDataNestedInput
  }

  export type SectorDataUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorId?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffEventCreateManySectorInput = {
    id?: string
    sourceCountryId: string
    targetCountryId: string
    tariffRate: number
    previousRate?: number | null
    announcementDate: Date | string
    effectiveDate: Date | string
    expiryDate?: Date | string | null
    description?: string | null
    impactScore?: number | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorDataCreateManySectorInput = {
    id?: string
    countryId: string
    gdpValue: number
    exportValue: number
    importValue: number
    employment?: number | null
    year: number
    quarter: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffEventUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceCountry?: CountryUpdateOneRequiredWithoutTariffFromSourceNestedInput
    targetCountry?: CountryUpdateOneRequiredWithoutTariffToTargetNestedInput
    stockImpacts?: StockImpactUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockImpacts?: StockImpactUncheckedUpdateManyWithoutTariffEventNestedInput
  }

  export type TariffEventUncheckedUpdateManyWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCountryId?: StringFieldUpdateOperationsInput | string
    targetCountryId?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    previousRate?: NullableFloatFieldUpdateOperationsInput | number | null
    announcementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impactScore?: NullableFloatFieldUpdateOperationsInput | number | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutSectorDataNestedInput
  }

  export type SectorDataUncheckedUpdateWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorDataUncheckedUpdateManyWithoutSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    gdpValue?: FloatFieldUpdateOperationsInput | number
    exportValue?: FloatFieldUpdateOperationsInput | number
    importValue?: FloatFieldUpdateOperationsInput | number
    employment?: NullableIntFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactCreateManyTariffEventInput = {
    id?: string
    stockId: string
    marketId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockImpactUpdateWithoutTariffEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutImpactsNestedInput
    market?: StockMarketUpdateOneRequiredWithoutImpactsNestedInput
  }

  export type StockImpactUncheckedUpdateWithoutTariffEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactUncheckedUpdateManyWithoutTariffEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateManyMarketInput = {
    id?: string
    symbol: string
    name: string
    sector: string
    currentPrice: number
  }

  export type StockImpactCreateManyMarketInput = {
    id?: string
    tariffEventId: string
    stockId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    priceHistory?: StockPriceUpdateManyWithoutStockNestedInput
    impacts?: StockImpactUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
    priceHistory?: StockPriceUncheckedUpdateManyWithoutStockNestedInput
    impacts?: StockImpactUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type StockImpactUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffEvent?: TariffEventUpdateOneRequiredWithoutStockImpactsNestedInput
    stock?: StockUpdateOneRequiredWithoutImpactsNestedInput
  }

  export type StockImpactUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffEventId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffEventId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPriceCreateManyStockInput = {
    id?: string
    date: Date | string
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    volume: number
    createdAt?: Date | string
  }

  export type StockImpactCreateManyStockInput = {
    id?: string
    tariffEventId: string
    marketId: string
    priceChangePct: number
    volumeChangePct?: number | null
    correlationScore?: number | null
    analysisText?: string | null
    createdAt?: Date | string
  }

  export type StockPriceUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPriceUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPriceUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openPrice?: FloatFieldUpdateOperationsInput | number
    highPrice?: FloatFieldUpdateOperationsInput | number
    lowPrice?: FloatFieldUpdateOperationsInput | number
    closePrice?: FloatFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffEvent?: TariffEventUpdateOneRequiredWithoutStockImpactsNestedInput
    market?: StockMarketUpdateOneRequiredWithoutImpactsNestedInput
  }

  export type StockImpactUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffEventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockImpactUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffEventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceChangePct?: FloatFieldUpdateOperationsInput | number
    volumeChangePct?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}