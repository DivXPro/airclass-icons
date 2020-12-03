// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpaceShipLineSvg from '@airclass/icons-svg/lib/asn/SpaceShipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpaceShipLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpaceShipLineSvg} />;

SpaceShipLine.displayName = 'SpaceShipLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpaceShipLine);