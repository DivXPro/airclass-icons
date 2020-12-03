// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShutDownLineSvg from '@airclass/icons-svg/lib/asn/ShutDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShutDownLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShutDownLineSvg} />;

ShutDownLine.displayName = 'ShutDownLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShutDownLine);