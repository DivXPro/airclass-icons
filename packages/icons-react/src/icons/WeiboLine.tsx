// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboLineSvg from '@airclass/icons-svg/lib/asn/WeiboLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboLineSvg} />;

WeiboLine.displayName = 'WeiboLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboLine);