// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Vidicon2LineSvg from '@airclass/icons-svg/lib/asn/Vidicon2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Vidicon2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Vidicon2LineSvg}></AntdIcon>;
};

Vidicon2Line.displayName = 'Vidicon2Line';
Vidicon2Line.inheritAttrs = false;
export default Vidicon2Line;