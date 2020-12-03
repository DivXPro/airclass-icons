// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SnowyLineSvg from '@airclass/icons-svg/lib/asn/SnowyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnowyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnowyLineSvg} />;

SnowyLine.displayName = 'SnowyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SnowyLine);