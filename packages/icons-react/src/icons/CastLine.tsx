// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CastLineSvg from '@airclass/icons-svg/lib/asn/CastLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CastLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CastLineSvg} />;

CastLine.displayName = 'CastLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CastLine);