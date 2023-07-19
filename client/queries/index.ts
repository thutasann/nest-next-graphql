export const TotalDonationsQuery = `
    query Query{
        totalDonations
    }
`;

export const TotalUpdatedQuery = `
    subscription Subscription{
        totalUpdated{
            total
        }
    }
`;

export const DonationsQuery = `
    query Query($orderBy: OrderByParams){
        donations(orderBy: $orderBy){
            count
            id
            displayName
            createdAt
            message
            team
        }
    }
`;

export const CreateDonation = `
    mutation Mutation($createDonationInput : CreateDonationInput!){
        createDonation(createDonationInput: $createDonationInput){
            count 
            createdAt
            id
        }
    }
`;
