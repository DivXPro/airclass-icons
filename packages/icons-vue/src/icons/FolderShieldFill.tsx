// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderShieldFillSvg from '@airclass/icons-svg/lib/asn/FolderShieldFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderShieldFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderShieldFillSvg}></AntdIcon>;
};

FolderShieldFill.displayName = 'FolderShieldFill';
FolderShieldFill.inheritAttrs = false;
export default FolderShieldFill;