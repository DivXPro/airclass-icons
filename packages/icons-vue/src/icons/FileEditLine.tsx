// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileEditLineSvg from '@airclass/icons-svg/lib/asn/FileEditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileEditLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileEditLineSvg}></AntdIcon>;
};

FileEditLine.displayName = 'FileEditLine';
FileEditLine.inheritAttrs = false;
export default FileEditLine;