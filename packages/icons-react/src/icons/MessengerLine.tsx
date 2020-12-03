// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MessengerLineSvg from '@airclass/icons-svg/lib/asn/MessengerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessengerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MessengerLineSvg} />;

MessengerLine.displayName = 'MessengerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessengerLine);