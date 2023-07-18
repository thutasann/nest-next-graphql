/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
  id: string;
  count: number;
  displayName: string;
  email: string;
  mobile: string;
  team?: Nullable<string>;
  message?: Nullable<string>;
  createdAt?: Nullable<DateTime>;
}

export class UpdateDonationInput {
  id: string;
}

export class Donation {
  id: string;
  count: number;
  displayName: string;
  email: string;
  mobile: string;
  team?: Nullable<string>;
  message?: Nullable<string>;
  createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
  abstract donations(): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

  abstract donation(
    id: string,
  ): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export abstract class IMutation {
  abstract createDonation(
    createDonationInput: CreateDonationInput,
  ): Donation | Promise<Donation>;

  abstract updateDonation(
    updateDonationInput: UpdateDonationInput,
  ): Donation | Promise<Donation>;

  abstract removeDonation(
    id: string,
  ): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
