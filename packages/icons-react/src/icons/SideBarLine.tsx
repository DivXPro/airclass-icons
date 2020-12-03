// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SideBarLineSvg from '@airclass/icons-svg/lib/asn/SideBarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SideBarLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SideBarLineSvg} />;

SideBarLine.displayName = 'SideBarLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SideBarLine);