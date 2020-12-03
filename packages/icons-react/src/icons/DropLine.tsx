// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DropLineSvg from '@airclass/icons-svg/lib/asn/DropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DropLineSvg} />;

DropLine.displayName = 'DropLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DropLine);