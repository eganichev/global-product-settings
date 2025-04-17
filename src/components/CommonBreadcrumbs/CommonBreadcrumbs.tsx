import { FC, MouseEvent } from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { ICommonBreadcrumbsProps } from './types';

const CommonBreadcrumbs: FC<ICommonBreadcrumbsProps> = ({ items }) => {
  // ! variables
  const lastIndex = items.length - 1;

  // ! helpers
  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  // ! render
  return (
    <Breadcrumbs separator='/' aria-label='breadcrumb'>
      {items.map((item, index) => {
        const isLast = index === lastIndex;

        if (isLast) {
          return (
            <Typography key={index} color='primary.main' fontWeight={600}>
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={index}
            underline='hover'
            color='secondary'
            href={item.href}
            fontWeight={600}
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CommonBreadcrumbs;
