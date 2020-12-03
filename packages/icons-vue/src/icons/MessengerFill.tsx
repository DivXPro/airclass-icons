// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessengerFillSvg from '@airclass/icons-svg/lib/asn/MessengerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessengerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessengerFillSvg}></AntdIcon>;
};

MessengerFill.displayName = 'MessengerFill';
MessengerFill.inheritAttrs = false;
export default MessengerFill;