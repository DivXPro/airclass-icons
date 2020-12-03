// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Brush4LineSvg from '@airclass/icons-svg/lib/asn/Brush4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Brush4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush4LineSvg}></AntdIcon>;
};

Brush4Line.displayName = 'Brush4Line';
Brush4Line.inheritAttrs = false;
export default Brush4Line;