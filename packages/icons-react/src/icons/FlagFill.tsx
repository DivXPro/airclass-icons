// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagFillSvg from '@airclass/icons-svg/lib/asn/FlagFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagFillSvg} />;

FlagFill.displayName = 'FlagFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagFill);