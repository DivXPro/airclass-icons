// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailVolumeLineSvg from '@airclass/icons-svg/lib/asn/MailVolumeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailVolumeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailVolumeLineSvg}></AntdIcon>;
};

MailVolumeLine.displayName = 'MailVolumeLine';
MailVolumeLine.inheritAttrs = false;
export default MailVolumeLine;