// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitterLineSvg from '@airclass/icons-svg/lib/asn/TwitterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitterLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitterLineSvg} />;

TwitterLine.displayName = 'TwitterLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitterLine);