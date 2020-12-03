// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InstallFillSvg from '@airclass/icons-svg/lib/asn/InstallFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstallFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstallFillSvg}></AntdIcon>;
};

InstallFill.displayName = 'InstallFill';
InstallFill.inheritAttrs = false;
export default InstallFill;