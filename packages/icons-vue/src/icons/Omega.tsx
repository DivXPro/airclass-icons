// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OmegaSvg from '@airclass/icons-svg/lib/asn/Omega';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Omega = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSvg}></AntdIcon>;
};

Omega.displayName = 'Omega';
Omega.inheritAttrs = false;
export default Omega;