// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileDownloadFillSvg from '@airclass/icons-svg/lib/asn/FileDownloadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDownloadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileDownloadFillSvg}></AntdIcon>;
};

FileDownloadFill.displayName = 'FileDownloadFill';
FileDownloadFill.inheritAttrs = false;
export default FileDownloadFill;