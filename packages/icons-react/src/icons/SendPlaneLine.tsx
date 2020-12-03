// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SendPlaneLineSvg from '@airclass/icons-svg/lib/asn/SendPlaneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendPlaneLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SendPlaneLineSvg} />;

SendPlaneLine.displayName = 'SendPlaneLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SendPlaneLine);