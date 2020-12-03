// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileUserLineSvg from '@airclass/icons-svg/lib/asn/FileUserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUserLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUserLineSvg}></AntdIcon>;
};

FileUserLine.displayName = 'FileUserLine';
FileUserLine.inheritAttrs = false;
export default FileUserLine;