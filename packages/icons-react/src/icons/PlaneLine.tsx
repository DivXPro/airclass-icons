// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlaneLineSvg from '@airclass/icons-svg/lib/asn/PlaneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaneLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlaneLineSvg} />;

PlaneLine.displayName = 'PlaneLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlaneLine);