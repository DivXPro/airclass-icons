// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileDownloadLineSvg from '@airclass/icons-svg/lib/asn/FileDownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDownloadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileDownloadLineSvg}></AntdIcon>;
};

FileDownloadLine.displayName = 'FileDownloadLine';
FileDownloadLine.inheritAttrs = false;
export default FileDownloadLine;