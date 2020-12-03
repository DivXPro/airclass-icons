// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileMarkLineSvg from '@airclass/icons-svg/lib/asn/FileMarkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileMarkLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileMarkLineSvg}></AntdIcon>;
};

FileMarkLine.displayName = 'FileMarkLine';
FileMarkLine.inheritAttrs = false;
export default FileMarkLine;