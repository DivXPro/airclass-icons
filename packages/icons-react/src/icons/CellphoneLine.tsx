// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CellphoneLineSvg from '@airclass/icons-svg/lib/asn/CellphoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CellphoneLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CellphoneLineSvg} />;

CellphoneLine.displayName = 'CellphoneLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CellphoneLine);