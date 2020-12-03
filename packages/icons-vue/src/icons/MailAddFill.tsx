// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailAddFillSvg from '@airclass/icons-svg/lib/asn/MailAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailAddFillSvg}></AntdIcon>;
};

MailAddFill.displayName = 'MailAddFill';
MailAddFill.inheritAttrs = false;
export default MailAddFill;