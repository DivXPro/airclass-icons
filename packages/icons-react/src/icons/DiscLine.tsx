// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiscLineSvg from '@airclass/icons-svg/lib/asn/DiscLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiscLineSvg} />;

DiscLine.displayName = 'DiscLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiscLine);