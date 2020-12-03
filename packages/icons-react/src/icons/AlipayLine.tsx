// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipayLineSvg from '@airclass/icons-svg/lib/asn/AlipayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlipayLineSvg} />;

AlipayLine.displayName = 'AlipayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlipayLine);