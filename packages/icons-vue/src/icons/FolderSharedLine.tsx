// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderSharedLineSvg from '@airclass/icons-svg/lib/asn/FolderSharedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderSharedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderSharedLineSvg}></AntdIcon>;
};

FolderSharedLine.displayName = 'FolderSharedLine';
FolderSharedLine.inheritAttrs = false;
export default FolderSharedLine;