// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MeteorLineSvg from '@airclass/icons-svg/lib/asn/MeteorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MeteorLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MeteorLineSvg} />;

MeteorLine.displayName = 'MeteorLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MeteorLine);