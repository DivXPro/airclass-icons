// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WechatPayLineSvg from '@airclass/icons-svg/lib/asn/WechatPayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatPayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WechatPayLineSvg}></AntdIcon>;
};

WechatPayLine.displayName = 'WechatPayLine';
WechatPayLine.inheritAttrs = false;
export default WechatPayLine;