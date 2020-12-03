// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatLineSvg from '@airclass/icons-svg/lib/asn/WechatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatLineSvg} />;

WechatLine.displayName = 'WechatLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatLine);