// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VisaLineSvg from '@airclass/icons-svg/lib/asn/VisaLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VisaLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VisaLineSvg} />;

VisaLine.displayName = 'VisaLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VisaLine);