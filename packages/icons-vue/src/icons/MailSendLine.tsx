// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailSendLineSvg from '@airclass/icons-svg/lib/asn/MailSendLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailSendLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailSendLineSvg}></AntdIcon>;
};

MailSendLine.displayName = 'MailSendLine';
MailSendLine.inheritAttrs = false;
export default MailSendLine;