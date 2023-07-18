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
