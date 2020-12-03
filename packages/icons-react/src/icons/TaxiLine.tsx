// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaxiLineSvg from '@airclass/icons-svg/lib/asn/TaxiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaxiLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaxiLineSvg} />;

TaxiLine.displayName = 'TaxiLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaxiLine);