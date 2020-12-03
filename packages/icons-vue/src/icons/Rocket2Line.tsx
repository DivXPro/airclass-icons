// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Rocket2LineSvg from '@airclass/icons-svg/lib/asn/Rocket2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Rocket2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rocket2LineSvg}></AntdIcon>;
};

Rocket2Line.displayName = 'Rocket2Line';
Rocket2Line.inheritAttrs = false;
export default Rocket2Line;