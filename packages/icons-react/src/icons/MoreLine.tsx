// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoreLineSvg from '@airclass/icons-svg/lib/asn/MoreLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoreLineSvg} />;

MoreLine.displayName = 'MoreLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoreLine);