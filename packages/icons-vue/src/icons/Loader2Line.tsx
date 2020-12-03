// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Loader2LineSvg from '@airclass/icons-svg/lib/asn/Loader2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Loader2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Loader2LineSvg}></AntdIcon>;
};

Loader2Line.displayName = 'Loader2Line';
Loader2Line.inheritAttrs = false;
export default Loader2Line;