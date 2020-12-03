// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailVolumeFillSvg from '@airclass/icons-svg/lib/asn/MailVolumeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailVolumeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailVolumeFillSvg}></AntdIcon>;
};

MailVolumeFill.displayName = 'MailVolumeFill';
MailVolumeFill.inheritAttrs = false;
export default MailVolumeFill;