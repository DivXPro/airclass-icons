// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTextLineSvg from '@airclass/icons-svg/lib/asn/FileTextLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextLineSvg}></AntdIcon>;
};

FileTextLine.displayName = 'FileTextLine';
FileTextLine.inheritAttrs = false;
export default FileTextLine;