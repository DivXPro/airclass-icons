// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Compass4LineSvg from '@airclass/icons-svg/lib/asn/Compass4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Compass4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Compass4LineSvg}></AntdIcon>;
};

Compass4Line.displayName = 'Compass4Line';
Compass4Line.inheritAttrs = false;
export default Compass4Line;