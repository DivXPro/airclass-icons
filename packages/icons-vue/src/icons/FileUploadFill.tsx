// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileUploadFillSvg from '@airclass/icons-svg/lib/asn/FileUploadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUploadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUploadFillSvg}></AntdIcon>;
};

FileUploadFill.displayName = 'FileUploadFill';
FileUploadFill.inheritAttrs = false;
export default FileUploadFill;