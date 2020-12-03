// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FoldersFillSvg from '@airclass/icons-svg/lib/asn/FoldersFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoldersFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FoldersFillSvg}></AntdIcon>;
};

FoldersFill.displayName = 'FoldersFill';
FoldersFill.inheritAttrs = false;
export default FoldersFill;