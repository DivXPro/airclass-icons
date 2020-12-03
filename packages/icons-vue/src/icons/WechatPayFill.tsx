// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WechatPayFillSvg from '@airclass/icons-svg/lib/asn/WechatPayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatPayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatPayFillSvg}></AntdIcon>;
};

WechatPayFill.displayName = 'WechatPayFill';
WechatPayFill.inheritAttrs = false;
export default WechatPayFill;