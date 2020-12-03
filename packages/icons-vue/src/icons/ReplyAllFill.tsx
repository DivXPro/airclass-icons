// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReplyAllFillSvg from '@airclass/icons-svg/lib/asn/ReplyAllFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReplyAllFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReplyAllFillSvg}></AntdIcon>;
};

ReplyAllFill.displayName = 'ReplyAllFill';
ReplyAllFill.inheritAttrs = false;
export default ReplyAllFill;