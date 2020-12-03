// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileExcelLineSvg from '@airclass/icons-svg/lib/asn/FileExcelLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExcelLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExcelLineSvg}></AntdIcon>;
};

FileExcelLine.displayName = 'FileExcelLine';
FileExcelLine.inheritAttrs = false;
export default FileExcelLine;