// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileShieldLineSvg from '@airclass/icons-svg/lib/asn/FileShieldLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileShieldLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileShieldLineSvg}></AntdIcon>;
};

FileShieldLine.displayName = 'FileShieldLine';
FileShieldLine.inheritAttrs = false;
export default FileShieldLine;