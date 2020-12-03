// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileAddLineSvg from '@airclass/icons-svg/lib/asn/FileAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileAddLineSvg}></AntdIcon>;
};

FileAddLine.displayName = 'FileAddLine';
FileAddLine.inheritAttrs = false;
export default FileAddLine;