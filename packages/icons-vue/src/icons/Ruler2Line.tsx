// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Ruler2LineSvg from '@airclass/icons-svg/lib/asn/Ruler2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Ruler2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ruler2LineSvg}></AntdIcon>;
};

Ruler2Line.displayName = 'Ruler2Line';
Ruler2Line.inheritAttrs = false;
export default Ruler2Line;