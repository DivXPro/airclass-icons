// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HealthBookLineSvg from '@airclass/icons-svg/lib/asn/HealthBookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HealthBookLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HealthBookLineSvg} />;

HealthBookLine.displayName = 'HealthBookLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HealthBookLine);