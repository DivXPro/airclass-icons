// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderZipFillSvg from '@airclass/icons-svg/lib/asn/FolderZipFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderZipFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderZipFillSvg}></AntdIcon>;
};

FolderZipFill.displayName = 'FolderZipFill';
FolderZipFill.inheritAttrs = false;
export default FolderZipFill;