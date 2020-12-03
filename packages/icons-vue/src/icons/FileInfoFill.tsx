// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileInfoFillSvg from '@airclass/icons-svg/lib/asn/FileInfoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileInfoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileInfoFillSvg}></AntdIcon>;
};

FileInfoFill.displayName = 'FileInfoFill';
FileInfoFill.inheritAttrs = false;
export default FileInfoFill;