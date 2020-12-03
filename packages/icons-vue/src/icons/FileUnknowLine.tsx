// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileUnknowLineSvg from '@airclass/icons-svg/lib/asn/FileUnknowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUnknowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUnknowLineSvg}></AntdIcon>;
};

FileUnknowLine.displayName = 'FileUnknowLine';
FileUnknowLine.inheritAttrs = false;
export default FileUnknowLine;