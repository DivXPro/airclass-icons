// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderKeyholeLineSvg from '@airclass/icons-svg/lib/asn/FolderKeyholeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderKeyholeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderKeyholeLineSvg}></AntdIcon>;
};

FolderKeyholeLine.displayName = 'FolderKeyholeLine';
FolderKeyholeLine.inheritAttrs = false;
export default FolderKeyholeLine;