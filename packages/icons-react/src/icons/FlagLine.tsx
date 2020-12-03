// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagLineSvg from '@airclass/icons-svg/lib/asn/FlagLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagLineSvg} />;

FlagLine.displayName = 'FlagLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagLine);