// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TvLineSvg from '@airclass/icons-svg/lib/asn/TvLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TvLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TvLineSvg} />;

TvLine.displayName = 'TvLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TvLine);