// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailUnreadFillSvg from '@airclass/icons-svg/lib/asn/MailUnreadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailUnreadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailUnreadFillSvg}></AntdIcon>;
};

MailUnreadFill.displayName = 'MailUnreadFill';
MailUnreadFill.inheritAttrs = false;
export default MailUnreadFill;