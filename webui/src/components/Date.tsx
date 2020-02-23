import moment from 'moment';
import React from 'react';
import Moment from 'react-moment';

import Tooltip from '@material-ui/core/Tooltip/Tooltip';

const HOUR = 1000 * 3600;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

type Props = { date: string };
const Date = ({ date }: Props) => (
  <Tooltip title={moment(date).format('LLLL')}>
    <span>
      on <Moment date={date} format="ll" fromNowDuring={WEEK} />
    </span>
  </Tooltip>
);

export default Date;
