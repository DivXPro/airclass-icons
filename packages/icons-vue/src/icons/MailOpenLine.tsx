// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailOpenLineSvg from '@airclass/icons-svg/lib/asn/MailOpenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailOpenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailOpenLineSvg}></AntdIcon>;
};

MailOpenLine.displayName = 'MailOpenLine';
MailOpenLine.inheritAttrs = false;
export default MailOpenLine;