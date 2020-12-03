// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileInfoLineSvg from '@airclass/icons-svg/lib/asn/FileInfoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileInfoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileInfoLineSvg}></AntdIcon>;
};

FileInfoLine.displayName = 'FileInfoLine';
FileInfoLine.inheritAttrs = false;
export default FileInfoLine;