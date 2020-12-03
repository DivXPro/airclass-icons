// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileListLineSvg from '@airclass/icons-svg/lib/asn/FileListLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileListLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileListLineSvg}></AntdIcon>;
};

FileListLine.displayName = 'FileListLine';
FileListLine.inheritAttrs = false;
export default FileListLine;