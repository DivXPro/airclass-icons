// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Ticket2LineSvg from '@airclass/icons-svg/lib/asn/Ticket2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Ticket2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2LineSvg}></AntdIcon>;
};

Ticket2Line.displayName = 'Ticket2Line';
Ticket2Line.inheritAttrs = false;
export default Ticket2Line;