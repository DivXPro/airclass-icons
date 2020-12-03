// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MvLineSvg from '@airclass/icons-svg/lib/asn/MvLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MvLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MvLineSvg} />;

MvLine.displayName = 'MvLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MvLine);