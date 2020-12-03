// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CupLineSvg from '@airclass/icons-svg/lib/asn/CupLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CupLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CupLineSvg} />;

CupLine.displayName = 'CupLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CupLine);