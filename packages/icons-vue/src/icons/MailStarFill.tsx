// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailStarFillSvg from '@airclass/icons-svg/lib/asn/MailStarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailStarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailStarFillSvg}></AntdIcon>;
};

MailStarFill.displayName = 'MailStarFill';
MailStarFill.inheritAttrs = false;
export default MailStarFill;