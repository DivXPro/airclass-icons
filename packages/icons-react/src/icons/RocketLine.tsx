// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RocketLineSvg from '@airclass/icons-svg/lib/asn/RocketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RocketLineSvg} />;

RocketLine.displayName = 'RocketLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RocketLine);