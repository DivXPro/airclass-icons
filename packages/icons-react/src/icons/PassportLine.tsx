// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PassportLineSvg from '@airclass/icons-svg/lib/asn/PassportLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PassportLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PassportLineSvg} />;

PassportLine.displayName = 'PassportLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PassportLine);