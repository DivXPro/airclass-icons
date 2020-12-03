// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCodeFillSvg from '@airclass/icons-svg/lib/asn/FileCodeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCodeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCodeFillSvg}></AntdIcon>;
};

FileCodeFill.displayName = 'FileCodeFill';
FileCodeFill.inheritAttrs = false;
export default FileCodeFill;