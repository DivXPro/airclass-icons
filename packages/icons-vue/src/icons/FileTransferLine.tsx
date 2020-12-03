// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTransferLineSvg from '@airclass/icons-svg/lib/asn/FileTransferLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTransferLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTransferLineSvg}></AntdIcon>;
};

FileTransferLine.displayName = 'FileTransferLine';
FileTransferLine.inheritAttrs = false;
export default FileTransferLine;