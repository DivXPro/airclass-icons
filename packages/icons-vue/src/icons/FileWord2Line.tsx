// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileWord2LineSvg from '@airclass/icons-svg/lib/asn/FileWord2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWord2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWord2LineSvg}></AntdIcon>;
};

FileWord2Line.displayName = 'FileWord2Line';
FileWord2Line.inheritAttrs = false;
export default FileWord2Line;