// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AttachmentFillSvg from '@airclass/icons-svg/lib/asn/AttachmentFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AttachmentFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachmentFillSvg}></AntdIcon>;
};

AttachmentFill.displayName = 'AttachmentFill';
AttachmentFill.inheritAttrs = false;
export default AttachmentFill;