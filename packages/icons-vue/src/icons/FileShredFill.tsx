// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileShredFillSvg from '@airclass/icons-svg/lib/asn/FileShredFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileShredFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileShredFillSvg}></AntdIcon>;
};

FileShredFill.displayName = 'FileShredFill';
FileShredFill.inheritAttrs = false;
export default FileShredFill;