// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CpuLineSvg from '@airclass/icons-svg/lib/asn/CpuLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CpuLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CpuLineSvg} />;

CpuLine.displayName = 'CpuLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CpuLine);