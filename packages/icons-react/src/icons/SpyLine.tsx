// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpyLineSvg from '@airclass/icons-svg/lib/asn/SpyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpyLineSvg} />;

SpyLine.displayName = 'SpyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SpyLine);