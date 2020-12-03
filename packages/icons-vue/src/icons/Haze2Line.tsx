// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Haze2LineSvg from '@airclass/icons-svg/lib/asn/Haze2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Haze2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Haze2LineSvg}></AntdIcon>;
};

Haze2Line.displayName = 'Haze2Line';
Haze2Line.inheritAttrs = false;
export default Haze2Line;