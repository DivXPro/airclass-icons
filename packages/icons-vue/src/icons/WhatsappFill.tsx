// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WhatsappFillSvg from '@airclass/icons-svg/lib/asn/WhatsappFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WhatsappFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WhatsappFillSvg}></AntdIcon>;
};

WhatsappFill.displayName = 'WhatsappFill';
WhatsappFill.inheritAttrs = false;
export default WhatsappFill;