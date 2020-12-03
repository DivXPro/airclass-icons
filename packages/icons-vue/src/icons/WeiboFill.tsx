// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WeiboFillSvg from '@airclass/icons-svg/lib/asn/WeiboFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeiboFillSvg}></AntdIcon>;
};

WeiboFill.displayName = 'WeiboFill';
WeiboFill.inheritAttrs = false;
export default WeiboFill;