// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailCloseFillSvg from '@airclass/icons-svg/lib/asn/MailCloseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailCloseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailCloseFillSvg}></AntdIcon>;
};

MailCloseFill.displayName = 'MailCloseFill';
MailCloseFill.inheritAttrs = false;
export default MailCloseFill;