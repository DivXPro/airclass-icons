// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderLockFillSvg from '@airclass/icons-svg/lib/asn/FolderLockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderLockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderLockFillSvg}></AntdIcon>;
};

FolderLockFill.displayName = 'FolderLockFill';
FolderLockFill.inheritAttrs = false;
export default FolderLockFill;