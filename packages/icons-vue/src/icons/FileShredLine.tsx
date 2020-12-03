// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileShredLineSvg from '@airclass/icons-svg/lib/asn/FileShredLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileShredLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileShredLineSvg}></AntdIcon>;
};

FileShredLine.displayName = 'FileShredLine';
FileShredLine.inheritAttrs = false;
export default FileShredLine;