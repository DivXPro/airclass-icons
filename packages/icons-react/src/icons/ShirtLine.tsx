// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShirtLineSvg from '@airclass/icons-svg/lib/asn/ShirtLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShirtLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShirtLineSvg} />;

ShirtLine.displayName = 'ShirtLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShirtLine);