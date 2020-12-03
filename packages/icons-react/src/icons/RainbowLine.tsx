// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RainbowLineSvg from '@airclass/icons-svg/lib/asn/RainbowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RainbowLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RainbowLineSvg} />;

RainbowLine.displayName = 'RainbowLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RainbowLine);