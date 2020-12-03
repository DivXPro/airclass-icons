// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Scan2LineSvg from '@airclass/icons-svg/lib/asn/Scan2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Scan2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scan2LineSvg}></AntdIcon>;
};

Scan2Line.displayName = 'Scan2Line';
Scan2Line.inheritAttrs = false;
export default Scan2Line;