// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoogleLineSvg from '@airclass/icons-svg/lib/asn/GoogleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleLineSvg} />;

GoogleLine.displayName = 'GoogleLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleLine);