// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PulseFillSvg from '@airclass/icons-svg/lib/asn/PulseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PulseFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PulseFillSvg} />;

PulseFill.displayName = 'PulseFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PulseFill);