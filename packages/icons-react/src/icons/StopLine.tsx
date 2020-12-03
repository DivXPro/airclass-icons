// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StopLineSvg from '@airclass/icons-svg/lib/asn/StopLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StopLineSvg} />;

StopLine.displayName = 'StopLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StopLine);