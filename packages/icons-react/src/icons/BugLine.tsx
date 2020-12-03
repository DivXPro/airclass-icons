// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugLineSvg from '@airclass/icons-svg/lib/asn/BugLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugLineSvg} />;

BugLine.displayName = 'BugLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugLine);