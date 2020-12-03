// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Wechat2LineSvg from '@airclass/icons-svg/lib/asn/Wechat2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Wechat2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wechat2LineSvg}></AntdIcon>;
};

Wechat2Line.displayName = 'Wechat2Line';
Wechat2Line.inheritAttrs = false;
export default Wechat2Line;