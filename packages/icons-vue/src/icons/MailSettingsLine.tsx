// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailSettingsLineSvg from '@airclass/icons-svg/lib/asn/MailSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailSettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailSettingsLineSvg}></AntdIcon>;
};

MailSettingsLine.displayName = 'MailSettingsLine';
MailSettingsLine.inheritAttrs = false;
export default MailSettingsLine;