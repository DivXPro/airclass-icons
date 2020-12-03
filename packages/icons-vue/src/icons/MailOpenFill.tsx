// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailOpenFillSvg from '@airclass/icons-svg/lib/asn/MailOpenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailOpenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailOpenFillSvg}></AntdIcon>;
};

MailOpenFill.displayName = 'MailOpenFill';
MailOpenFill.inheritAttrs = false;
export default MailOpenFill;