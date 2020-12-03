// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Compasses2LineSvg from '@airclass/icons-svg/lib/asn/Compasses2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Compasses2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Compasses2LineSvg}></AntdIcon>;
};

Compasses2Line.displayName = 'Compasses2Line';
Compasses2Line.inheritAttrs = false;
export default Compasses2Line;