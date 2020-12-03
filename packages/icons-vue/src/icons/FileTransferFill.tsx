// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTransferFillSvg from '@airclass/icons-svg/lib/asn/FileTransferFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTransferFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTransferFillSvg}></AntdIcon>;
};

FileTransferFill.displayName = 'FileTransferFill';
FileTransferFill.inheritAttrs = false;
export default FileTransferFill;