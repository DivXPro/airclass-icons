// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsBook2LineSvg from '@airclass/icons-svg/lib/asn/ContactsBook2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsBook2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsBook2LineSvg}></AntdIcon>;
};

ContactsBook2Line.displayName = 'ContactsBook2Line';
ContactsBook2Line.inheritAttrs = false;
export default ContactsBook2Line;