// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlaneFillSvg from '@airclass/icons-svg/lib/asn/PlaneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaneFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlaneFillSvg} />;

PlaneFill.displayName = 'PlaneFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlaneFill);