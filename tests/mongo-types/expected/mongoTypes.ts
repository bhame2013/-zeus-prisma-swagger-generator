// This file was auto-generated by prisma-generator-typescript-interfaces

export type Gender = "Male" | "Female" | "Other";

export type PhotoType = "Selfie" | "Profile" | "Tagged";

export interface Person {
  id: number;
  name: string;
  gender: Gender;
  addressId: number;
  address?: Address;
  photos: Photo[];
  tags: Tag | null;
}

export interface Address {
  id: number;
  addressText: string;
  people?: Person[];
}

export interface Photo {
  height: number;
  Width: number;
  url: string;
  type: PhotoType;
}

export interface Tag {
  id: number;
  name: string;
}
