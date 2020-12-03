// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarLineSvg from '@airclass/icons-svg/lib/asn/CarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarLineSvg} />;

CarLine.displayName = 'CarLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarLine);