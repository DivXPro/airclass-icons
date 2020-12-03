// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SimCardLineSvg from '@airclass/icons-svg/lib/asn/SimCardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SimCardLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SimCardLineSvg} />;

SimCardLine.displayName = 'SimCardLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SimCardLine);