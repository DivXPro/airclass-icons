// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailStarLineSvg from '@airclass/icons-svg/lib/asn/MailStarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailStarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailStarLineSvg}></AntdIcon>;
};

MailStarLine.displayName = 'MailStarLine';
MailStarLine.inheritAttrs = false;
export default MailStarLine;