// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckLineSvg from '@airclass/icons-svg/lib/asn/CheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckLineSvg} />;

CheckLine.displayName = 'CheckLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckLine);