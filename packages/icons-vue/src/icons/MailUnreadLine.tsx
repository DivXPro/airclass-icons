// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailUnreadLineSvg from '@airclass/icons-svg/lib/asn/MailUnreadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailUnreadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailUnreadLineSvg}></AntdIcon>;
};

MailUnreadLine.displayName = 'MailUnreadLine';
MailUnreadLine.inheritAttrs = false;
export default MailUnreadLine;