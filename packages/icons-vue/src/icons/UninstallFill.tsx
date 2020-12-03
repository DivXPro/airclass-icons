// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UninstallFillSvg from '@airclass/icons-svg/lib/asn/UninstallFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UninstallFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UninstallFillSvg}></AntdIcon>;
};

UninstallFill.displayName = 'UninstallFill';
UninstallFill.inheritAttrs = false;
export default UninstallFill;