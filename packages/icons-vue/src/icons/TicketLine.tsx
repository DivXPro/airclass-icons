// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TicketLineSvg from '@airclass/icons-svg/lib/asn/TicketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketLineSvg}></AntdIcon>;
};

TicketLine.displayName = 'TicketLine';
TicketLine.inheritAttrs = false;
export default TicketLine;