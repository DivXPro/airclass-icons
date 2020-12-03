// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileListFillSvg from '@airclass/icons-svg/lib/asn/FileListFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileListFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileListFillSvg}></AntdIcon>;
};

FileListFill.displayName = 'FileListFill';
FileListFill.inheritAttrs = false;
export default FileListFill;