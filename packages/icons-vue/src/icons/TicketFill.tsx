// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TicketFillSvg from '@airclass/icons-svg/lib/asn/TicketFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketFillSvg}></AntdIcon>;
};

TicketFill.displayName = 'TicketFill';
TicketFill.inheritAttrs = false;
export default TicketFill;