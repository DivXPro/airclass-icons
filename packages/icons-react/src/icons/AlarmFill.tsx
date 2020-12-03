// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlarmFillSvg from '@airclass/icons-svg/lib/asn/AlarmFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlarmFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlarmFillSvg} />;

AlarmFill.displayName = 'AlarmFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlarmFill);