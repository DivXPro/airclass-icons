// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MickeyLineSvg from '@airclass/icons-svg/lib/asn/MickeyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MickeyLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MickeyLineSvg} />;

MickeyLine.displayName = 'MickeyLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MickeyLine);