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
