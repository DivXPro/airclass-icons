// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileZipLineSvg from '@airclass/icons-svg/lib/asn/FileZipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileZipLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileZipLineSvg}></AntdIcon>;
};

FileZipLine.displayName = 'FileZipLine';
FileZipLine.inheritAttrs = false;
export default FileZipLine;