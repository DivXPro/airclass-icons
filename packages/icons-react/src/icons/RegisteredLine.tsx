// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RegisteredLineSvg from '@airclass/icons-svg/lib/asn/RegisteredLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RegisteredLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RegisteredLineSvg} />;

RegisteredLine.displayName = 'RegisteredLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RegisteredLine);