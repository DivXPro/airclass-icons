// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Loader4LineSvg from '@airclass/icons-svg/lib/asn/Loader4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Loader4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Loader4LineSvg}></AntdIcon>;
};

Loader4Line.displayName = 'Loader4Line';
Loader4Line.inheritAttrs = false;
export default Loader4Line;