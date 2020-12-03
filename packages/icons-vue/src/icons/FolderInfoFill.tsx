// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderInfoFillSvg from '@airclass/icons-svg/lib/asn/FolderInfoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderInfoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderInfoFillSvg}></AntdIcon>;
};

FolderInfoFill.displayName = 'FolderInfoFill';
FolderInfoFill.inheritAttrs = false;
export default FolderInfoFill;