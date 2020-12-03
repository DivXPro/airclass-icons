// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileReduceLineSvg from '@airclass/icons-svg/lib/asn/FileReduceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileReduceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileReduceLineSvg}></AntdIcon>;
};

FileReduceLine.displayName = 'FileReduceLine';
FileReduceLine.inheritAttrs = false;
export default FileReduceLine;