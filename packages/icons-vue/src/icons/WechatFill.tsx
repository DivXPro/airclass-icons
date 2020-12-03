// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WechatFillSvg from '@airclass/icons-svg/lib/asn/WechatFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatFillSvg}></AntdIcon>;
};

WechatFill.displayName = 'WechatFill';
WechatFill.inheritAttrs = false;
export default WechatFill;