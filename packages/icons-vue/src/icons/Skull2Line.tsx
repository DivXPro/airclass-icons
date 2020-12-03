// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Skull2LineSvg from '@airclass/icons-svg/lib/asn/Skull2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Skull2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Skull2LineSvg}></AntdIcon>;
};

Skull2Line.displayName = 'Skull2Line';
Skull2Line.inheritAttrs = false;
export default Skull2Line;