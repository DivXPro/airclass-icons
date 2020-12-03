// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderLockLineSvg from '@airclass/icons-svg/lib/asn/FolderLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderLockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderLockLineSvg}></AntdIcon>;
};

FolderLockLine.displayName = 'FolderLockLine';
FolderLockLine.inheritAttrs = false;
export default FolderLockLine;