import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ArgsType()
export class AggregateDonationRawArgs {

    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;

    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}
