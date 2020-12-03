// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailForbidLineSvg from '@airclass/icons-svg/lib/asn/MailForbidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailForbidLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailForbidLineSvg}></AntdIcon>;
};

MailForbidLine.displayName = 'MailForbidLine';
MailForbidLine.inheritAttrs = false;
export default MailForbidLine;