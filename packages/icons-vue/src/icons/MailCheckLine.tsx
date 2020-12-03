// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailCheckLineSvg from '@airclass/icons-svg/lib/asn/MailCheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailCheckLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailCheckLineSvg}></AntdIcon>;
};

MailCheckLine.displayName = 'MailCheckLine';
MailCheckLine.inheritAttrs = false;
export default MailCheckLine;