// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MicLineSvg from '@airclass/icons-svg/lib/asn/MicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MicLineSvg} />;

MicLine.displayName = 'MicLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MicLine);