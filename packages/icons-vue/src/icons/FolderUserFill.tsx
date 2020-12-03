// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderUserFillSvg from '@airclass/icons-svg/lib/asn/FolderUserFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderUserFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderUserFillSvg}></AntdIcon>;
};

FolderUserFill.displayName = 'FolderUserFill';
FolderUserFill.inheritAttrs = false;
export default FolderUserFill;