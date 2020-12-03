// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileExcelFillSvg from '@airclass/icons-svg/lib/asn/FileExcelFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExcelFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExcelFillSvg}></AntdIcon>;
};

FileExcelFill.displayName = 'FileExcelFill';
FileExcelFill.inheritAttrs = false;
export default FileExcelFill;