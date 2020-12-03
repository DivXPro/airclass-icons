// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileWarningLineSvg from '@airclass/icons-svg/lib/asn/FileWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWarningLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWarningLineSvg}></AntdIcon>;
};

FileWarningLine.displayName = 'FileWarningLine';
FileWarningLine.inheritAttrs = false;
export default FileWarningLine;