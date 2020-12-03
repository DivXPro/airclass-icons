// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCloudFillSvg from '@airclass/icons-svg/lib/asn/FileCloudFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCloudFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCloudFillSvg}></AntdIcon>;
};

FileCloudFill.displayName = 'FileCloudFill';
FileCloudFill.inheritAttrs = false;
export default FileCloudFill;