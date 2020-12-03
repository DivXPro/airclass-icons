// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShipLineSvg from '@airclass/icons-svg/lib/asn/ShipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShipLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShipLineSvg} />;

ShipLine.displayName = 'ShipLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShipLine);