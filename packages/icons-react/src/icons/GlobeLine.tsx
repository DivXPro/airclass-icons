// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GlobeLineSvg from '@airclass/icons-svg/lib/asn/GlobeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobeLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobeLineSvg} />;

GlobeLine.displayName = 'GlobeLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobeLine);