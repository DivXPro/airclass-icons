// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsBookLineSvg from '@airclass/icons-svg/lib/asn/ContactsBookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsBookLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsBookLineSvg}></AntdIcon>;
};

ContactsBookLine.displayName = 'ContactsBookLine';
ContactsBookLine.inheritAttrs = false;
export default ContactsBookLine;