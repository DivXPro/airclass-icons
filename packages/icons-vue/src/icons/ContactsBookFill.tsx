// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsBookFillSvg from '@airclass/icons-svg/lib/asn/ContactsBookFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsBookFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsBookFillSvg}></AntdIcon>;
};

ContactsBookFill.displayName = 'ContactsBookFill';
ContactsBookFill.inheritAttrs = false;
export default ContactsBookFill;