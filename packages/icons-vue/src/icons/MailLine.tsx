// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailLineSvg from '@airclass/icons-svg/lib/asn/MailLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailLineSvg}></AntdIcon>;
};

MailLine.displayName = 'MailLine';
MailLine.inheritAttrs = false;
export default MailLine;