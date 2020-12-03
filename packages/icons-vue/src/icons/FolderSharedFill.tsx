// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderSharedFillSvg from '@airclass/icons-svg/lib/asn/FolderSharedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderSharedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderSharedFillSvg}></AntdIcon>;
};

FolderSharedFill.displayName = 'FolderSharedFill';
FolderSharedFill.inheritAttrs = false;
export default FolderSharedFill;