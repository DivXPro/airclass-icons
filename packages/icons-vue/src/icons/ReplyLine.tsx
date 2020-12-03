// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReplyLineSvg from '@airclass/icons-svg/lib/asn/ReplyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReplyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReplyLineSvg}></AntdIcon>;
};

ReplyLine.displayName = 'ReplyLine';
ReplyLine.inheritAttrs = false;
export default ReplyLine;