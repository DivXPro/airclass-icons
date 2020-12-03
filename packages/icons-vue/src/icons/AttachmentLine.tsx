// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AttachmentLineSvg from '@airclass/icons-svg/lib/asn/AttachmentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AttachmentLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachmentLineSvg}></AntdIcon>;
};

AttachmentLine.displayName = 'AttachmentLine';
AttachmentLine.inheritAttrs = false;
export default AttachmentLine;