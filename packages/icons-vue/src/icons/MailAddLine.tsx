// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailAddLineSvg from '@airclass/icons-svg/lib/asn/MailAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailAddLineSvg}></AntdIcon>;
};

MailAddLine.displayName = 'MailAddLine';
MailAddLine.inheritAttrs = false;
export default MailAddLine;