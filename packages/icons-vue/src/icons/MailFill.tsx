// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailFillSvg from '@airclass/icons-svg/lib/asn/MailFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailFillSvg}></AntdIcon>;
};

MailFill.displayName = 'MailFill';
MailFill.inheritAttrs = false;
export default MailFill;