// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WindyLineSvg from '@airclass/icons-svg/lib/asn/WindyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WindyLineSvg} />;

WindyLine.displayName = 'WindyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WindyLine);