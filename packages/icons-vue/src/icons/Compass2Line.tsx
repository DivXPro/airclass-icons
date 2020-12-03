// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Compass2LineSvg from '@airclass/icons-svg/lib/asn/Compass2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Compass2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Compass2LineSvg}></AntdIcon>;
};

Compass2Line.displayName = 'Compass2Line';
Compass2Line.inheritAttrs = false;
export default Compass2Line;