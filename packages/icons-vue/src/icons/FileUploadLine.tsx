// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileUploadLineSvg from '@airclass/icons-svg/lib/asn/FileUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUploadLineSvg}></AntdIcon>;
};

FileUploadLine.displayName = 'FileUploadLine';
FileUploadLine.inheritAttrs = false;
export default FileUploadLine;