// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailSettingsFillSvg from '@airclass/icons-svg/lib/asn/MailSettingsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailSettingsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailSettingsFillSvg}></AntdIcon>;
};

MailSettingsFill.displayName = 'MailSettingsFill';
MailSettingsFill.inheritAttrs = false;
export default MailSettingsFill;