// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsLineSvg from '@airclass/icons-svg/lib/asn/ContactsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsLineSvg}></AntdIcon>;
};

ContactsLine.displayName = 'ContactsLine';
ContactsLine.inheritAttrs = false;
export default ContactsLine;