// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsFillSvg from '@airclass/icons-svg/lib/asn/ContactsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsFillSvg}></AntdIcon>;
};

ContactsFill.displayName = 'ContactsFill';
ContactsFill.inheritAttrs = false;
export default ContactsFill;