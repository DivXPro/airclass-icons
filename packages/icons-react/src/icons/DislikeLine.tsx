// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DislikeLineSvg from '@airclass/icons-svg/lib/asn/DislikeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DislikeLineSvg} />;

DislikeLine.displayName = 'DislikeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DislikeLine);