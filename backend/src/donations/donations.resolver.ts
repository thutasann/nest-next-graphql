import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DonationsService } from './donations.service';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(
    @Args('createDonationInput')
    createDonationInput: Prisma.DonationCreateInput,
  ) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll() {
    return this.donationsService.findAll();
  }

  @Query('donation')
  findOne(@Args('id') id: string) {
    return this.donationsService.findOne({ id });
  }
}
