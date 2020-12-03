// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VipLineSvg from '@airclass/icons-svg/lib/asn/VipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VipLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VipLineSvg} />;

VipLine.displayName = 'VipLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VipLine);