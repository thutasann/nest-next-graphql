import { IDoantion } from '@/types';
import { formatDate } from '@/utils';
import { Avatar, Badge } from '@chakra-ui/react';
import React from 'react';

interface IBoardItem {
  donation: IDoantion;
}

function BoardItem({ donation }: IBoardItem) {
  return (
    <div
      className="shadow-md w-full flex items-center 
    justify-between
    p-3 bg-grey backdrop-blur-md rounded-lg transition-all duration-200 ease-in-out"
    >
      <div className="flex items-center gap-3">
        <Avatar size="md" />
        <div className="flex flex-col text-left ">
          <p className="font-bold text-sm text-primary uppercase">
            #{donation.team || 'team'}
          </p>
          <h3 className="font-semibold">{donation.displayName}</h3>
          <p className="text-light/80 text-sm">{donation.message}</p>
        </div>
      </div>

      <div className="flex flex-col justify-around gap-2 items-end">
        <Badge
          background="#16181D"
          color="#0cdfff"
          py={1}
          px={2}
          rounded="full"
          className="w-fit"
        >
          {donation.count} £
        </Badge>
        <p className="text-xs">{formatDate(donation.createdAt)}</p>
      </div>
    </div>
  );
}

export default BoardItem;
