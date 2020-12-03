// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SipLineSvg from '@airclass/icons-svg/lib/asn/SipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SipLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SipLineSvg} />;

SipLine.displayName = 'SipLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SipLine);