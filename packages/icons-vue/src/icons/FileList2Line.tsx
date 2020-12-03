// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileList2LineSvg from '@airclass/icons-svg/lib/asn/FileList2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileList2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileList2LineSvg}></AntdIcon>;
};

FileList2Line.displayName = 'FileList2Line';
FileList2Line.inheritAttrs = false;
export default FileList2Line;