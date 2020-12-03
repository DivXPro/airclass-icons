// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderReceivedLineSvg from '@airclass/icons-svg/lib/asn/FolderReceivedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderReceivedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderReceivedLineSvg}></AntdIcon>;
};

FolderReceivedLine.displayName = 'FolderReceivedLine';
FolderReceivedLine.inheritAttrs = false;
export default FolderReceivedLine;