// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MedalFillSvg from '@airclass/icons-svg/lib/asn/MedalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedalFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MedalFillSvg} />;

MedalFill.displayName = 'MedalFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MedalFill);