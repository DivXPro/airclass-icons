// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderTransferLineSvg from '@airclass/icons-svg/lib/asn/FolderTransferLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderTransferLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderTransferLineSvg}></AntdIcon>;
};

FolderTransferLine.displayName = 'FolderTransferLine';
FolderTransferLine.inheritAttrs = false;
export default FolderTransferLine;