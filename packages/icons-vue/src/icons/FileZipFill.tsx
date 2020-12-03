// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileZipFillSvg from '@airclass/icons-svg/lib/asn/FileZipFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileZipFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileZipFillSvg}></AntdIcon>;
};

FileZipFill.displayName = 'FileZipFill';
FileZipFill.inheritAttrs = false;
export default FileZipFill;