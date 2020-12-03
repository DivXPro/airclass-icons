// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailLockFillSvg from '@airclass/icons-svg/lib/asn/MailLockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailLockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailLockFillSvg}></AntdIcon>;
};

MailLockFill.displayName = 'MailLockFill';
MailLockFill.inheritAttrs = false;
export default MailLockFill;