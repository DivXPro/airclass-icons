// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderAddFillSvg from '@airclass/icons-svg/lib/asn/FolderAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddFillSvg}></AntdIcon>;
};

FolderAddFill.displayName = 'FolderAddFill';
FolderAddFill.inheritAttrs = false;
export default FolderAddFill;