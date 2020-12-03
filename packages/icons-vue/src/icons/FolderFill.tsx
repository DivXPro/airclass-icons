// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderFillSvg from '@airclass/icons-svg/lib/asn/FolderFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFillSvg}></AntdIcon>;
};

FolderFill.displayName = 'FolderFill';
FolderFill.inheritAttrs = false;
export default FolderFill;