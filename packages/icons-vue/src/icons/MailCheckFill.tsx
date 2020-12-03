// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailCheckFillSvg from '@airclass/icons-svg/lib/asn/MailCheckFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailCheckFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailCheckFillSvg}></AntdIcon>;
};

MailCheckFill.displayName = 'MailCheckFill';
MailCheckFill.inheritAttrs = false;
export default MailCheckFill;