// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContactsBookUploadLineSvg from '@airclass/icons-svg/lib/asn/ContactsBookUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContactsBookUploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContactsBookUploadLineSvg}></AntdIcon>;
};

ContactsBookUploadLine.displayName = 'ContactsBookUploadLine';
ContactsBookUploadLine.inheritAttrs = false;
export default ContactsBookUploadLine;