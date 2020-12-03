// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReplyFillSvg from '@airclass/icons-svg/lib/asn/ReplyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReplyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReplyFillSvg}></AntdIcon>;
};

ReplyFill.displayName = 'ReplyFill';
ReplyFill.inheritAttrs = false;
export default ReplyFill;