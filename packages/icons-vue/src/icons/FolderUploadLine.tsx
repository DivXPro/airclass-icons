// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderUploadLineSvg from '@airclass/icons-svg/lib/asn/FolderUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderUploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderUploadLineSvg}></AntdIcon>;
};

FolderUploadLine.displayName = 'FolderUploadLine';
FolderUploadLine.inheritAttrs = false;
export default FolderUploadLine;