// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SimCard2LineSvg from '@airclass/icons-svg/lib/asn/SimCard2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SimCard2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimCard2LineSvg}></AntdIcon>;
};

SimCard2Line.displayName = 'SimCard2Line';
SimCard2Line.inheritAttrs = false;
export default SimCard2Line;