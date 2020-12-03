// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderUploadFillSvg from '@airclass/icons-svg/lib/asn/FolderUploadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderUploadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderUploadFillSvg}></AntdIcon>;
};

FolderUploadFill.displayName = 'FolderUploadFill';
FolderUploadFill.inheritAttrs = false;
export default FolderUploadFill;