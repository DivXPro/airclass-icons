// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EdgeLineSvg from '@airclass/icons-svg/lib/asn/EdgeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EdgeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EdgeLineSvg} />;

EdgeLine.displayName = 'EdgeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EdgeLine);