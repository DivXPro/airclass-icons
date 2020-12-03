// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RulerLineSvg from '@airclass/icons-svg/lib/asn/RulerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RulerLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RulerLineSvg} />;

RulerLine.displayName = 'RulerLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RulerLine);