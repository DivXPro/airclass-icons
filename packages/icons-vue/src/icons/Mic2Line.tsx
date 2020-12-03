// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Mic2LineSvg from '@airclass/icons-svg/lib/asn/Mic2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Mic2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mic2LineSvg}></AntdIcon>;
};

Mic2Line.displayName = 'Mic2Line';
Mic2Line.inheritAttrs = false;
export default Mic2Line;