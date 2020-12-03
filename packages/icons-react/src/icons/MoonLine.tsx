// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoonLineSvg from '@airclass/icons-svg/lib/asn/MoonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoonLineSvg} />;

MoonLine.displayName = 'MoonLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoonLine);