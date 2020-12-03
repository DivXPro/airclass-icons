// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderReduceLineSvg from '@airclass/icons-svg/lib/asn/FolderReduceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderReduceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderReduceLineSvg}></AntdIcon>;
};

FolderReduceLine.displayName = 'FolderReduceLine';
FolderReduceLine.inheritAttrs = false;
export default FolderReduceLine;