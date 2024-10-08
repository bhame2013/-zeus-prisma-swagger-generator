// This is a custom header

export type Gender = "Male" | "Female" | "Other";

export type DataTest = "Apple" | "Banana" | "Orange" | "Pear";

export interface Person {
  id: number;
  name: string;
  age: number;
  email: string | null;
  gender: Gender;
  addressId: number;
  address?: Address;
  friends?: Person[];
  friendsOf?: Person[];
  data?: Data | null;
}

export interface Address {
  id: number;
  streetNumber: number;
  streetName: string;
  city: string;
  isBilling: boolean;
  people?: Person[];
}

export interface Data {
  id: string;
  stringField: string;
  booleanField: boolean;
  intField: number;
  bigIntField: bigint;
  floatField: number;
  decimalField: Decimal;
  dateField: Date;
  jsonField: JsonValue;
  bytesField: Buffer;
  enumField: DataTest;
  optionalStringField: string | null;
  optionalBooleanField: boolean | null;
  optionalIntField: number | null;
  optionalBigIntField: bigint | null;
  optionalFloatField: number | null;
  optionalDecimalField: Decimal | null;
  optionalDateField: Date | null;
  optionalJsonField: JsonValue | null;
  optionalBytesField: Buffer | null;
  optionalEnumField: DataTest | null;
  stringArrayField: string[];
  booleanArrayField: boolean[];
  intArrayField: number[];
  bigIntArrayField: bigint[];
  floatArrayField: number[];
  decimalArrayField: Decimal[];
  dateArrayField: Date[];
  jsonArrayField: JsonValue[];
  bytesArrayField: Buffer[];
  enumArrayField: DataTest[];
  personId: number;
  person?: Person;
}

type Decimal = { valueOf(): string };

type JsonValue = string | number | boolean | { [key in string]?: JsonValue } | Array<JsonValue> | null;
