// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Tv2LineSvg from '@airclass/icons-svg/lib/asn/Tv2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Tv2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Tv2LineSvg}></AntdIcon>;
};

Tv2Line.displayName = 'Tv2Line';
Tv2Line.inheritAttrs = false;
export default Tv2Line;