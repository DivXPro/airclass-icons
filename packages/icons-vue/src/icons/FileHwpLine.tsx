// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileHwpLineSvg from '@airclass/icons-svg/lib/asn/FileHwpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileHwpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileHwpLineSvg}></AntdIcon>;
};

FileHwpLine.displayName = 'FileHwpLine';
FileHwpLine.inheritAttrs = false;
export default FileHwpLine;