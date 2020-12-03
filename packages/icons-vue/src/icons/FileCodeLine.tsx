// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCodeLineSvg from '@airclass/icons-svg/lib/asn/FileCodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCodeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCodeLineSvg}></AntdIcon>;
};

FileCodeLine.displayName = 'FileCodeLine';
FileCodeLine.inheritAttrs = false;
export default FileCodeLine;