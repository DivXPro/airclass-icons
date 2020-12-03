// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderReceivedFillSvg from '@airclass/icons-svg/lib/asn/FolderReceivedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderReceivedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderReceivedFillSvg}></AntdIcon>;
};

FolderReceivedFill.displayName = 'FolderReceivedFill';
FolderReceivedFill.inheritAttrs = false;
export default FolderReceivedFill;