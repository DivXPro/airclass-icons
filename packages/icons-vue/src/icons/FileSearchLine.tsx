// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileSearchLineSvg from '@airclass/icons-svg/lib/asn/FileSearchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSearchLineSvg}></AntdIcon>;
};

FileSearchLine.displayName = 'FileSearchLine';
FileSearchLine.inheritAttrs = false;
export default FileSearchLine;