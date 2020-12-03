// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailSendFillSvg from '@airclass/icons-svg/lib/asn/MailSendFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailSendFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailSendFillSvg}></AntdIcon>;
};

MailSendFill.displayName = 'MailSendFill';
MailSendFill.inheritAttrs = false;
export default MailSendFill;