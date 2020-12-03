// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCloudLineSvg from '@airclass/icons-svg/lib/asn/FileCloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCloudLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCloudLineSvg}></AntdIcon>;
};

FileCloudLine.displayName = 'FileCloudLine';
FileCloudLine.inheritAttrs = false;
export default FileCloudLine;