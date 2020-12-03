// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalculatorLineSvg from '@airclass/icons-svg/lib/asn/CalculatorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalculatorLineSvg} />;

CalculatorLine.displayName = 'CalculatorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalculatorLine);