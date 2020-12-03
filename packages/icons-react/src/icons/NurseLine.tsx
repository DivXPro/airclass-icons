// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NurseLineSvg from '@airclass/icons-svg/lib/asn/NurseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NurseLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NurseLineSvg} />;

NurseLine.displayName = 'NurseLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NurseLine);