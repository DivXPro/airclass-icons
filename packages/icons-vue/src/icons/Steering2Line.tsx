// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Steering2LineSvg from '@airclass/icons-svg/lib/asn/Steering2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Steering2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Steering2LineSvg}></AntdIcon>;
};

Steering2Line.displayName = 'Steering2Line';
Steering2Line.inheritAttrs = false;
export default Steering2Line;