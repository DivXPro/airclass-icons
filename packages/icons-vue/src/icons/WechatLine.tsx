// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WechatLineSvg from '@airclass/icons-svg/lib/asn/WechatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatLineSvg}></AntdIcon>;
};

WechatLine.displayName = 'WechatLine';
WechatLine.inheritAttrs = false;
export default WechatLine;