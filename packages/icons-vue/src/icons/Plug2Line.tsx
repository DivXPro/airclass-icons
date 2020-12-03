// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Plug2LineSvg from '@airclass/icons-svg/lib/asn/Plug2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Plug2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Plug2LineSvg}></AntdIcon>;
};

Plug2Line.displayName = 'Plug2Line';
Plug2Line.inheritAttrs = false;
export default Plug2Line;