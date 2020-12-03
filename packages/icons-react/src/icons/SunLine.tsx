// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SunLineSvg from '@airclass/icons-svg/lib/asn/SunLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SunLineSvg} />;

SunLine.displayName = 'SunLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SunLine);