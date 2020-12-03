// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TicketLineSvg from '@airclass/icons-svg/lib/asn/TicketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TicketLineSvg} />;

TicketLine.displayName = 'TicketLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TicketLine);