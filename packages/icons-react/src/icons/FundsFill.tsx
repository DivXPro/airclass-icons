// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundsFillSvg from '@airclass/icons-svg/lib/asn/FundsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundsFill = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundsFillSvg} />;

FundsFill.displayName = 'FundsFill';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FundsFill);