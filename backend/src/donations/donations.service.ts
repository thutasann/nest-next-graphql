import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DonationCreateInput } from 'src/@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { OrderByParams } from 'src/graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Donation Create
   */
  create(createDonationInput: DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  /**
   * Donation Retrieve
   */
  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: {
        [field]: direction,
      },
    });
  }

  /**
   * Donation Find Unique
   */
  findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }
}
