// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailCloseLineSvg from '@airclass/icons-svg/lib/asn/MailCloseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailCloseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailCloseLineSvg}></AntdIcon>;
};

MailCloseLine.displayName = 'MailCloseLine';
MailCloseLine.inheritAttrs = false;
export default MailCloseLine;