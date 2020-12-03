// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertLineSvg from '@airclass/icons-svg/lib/asn/AlertLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertLineSvg} />;

AlertLine.displayName = 'AlertLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertLine);