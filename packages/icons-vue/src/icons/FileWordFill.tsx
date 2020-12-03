// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileWordFillSvg from '@airclass/icons-svg/lib/asn/FileWordFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWordFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWordFillSvg}></AntdIcon>;
};

FileWordFill.displayName = 'FileWordFill';
FileWordFill.inheritAttrs = false;
export default FileWordFill;