// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatPayLineSvg from '@airclass/icons-svg/lib/asn/WechatPayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatPayLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatPayLineSvg} />;

WechatPayLine.displayName = 'WechatPayLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatPayLine);