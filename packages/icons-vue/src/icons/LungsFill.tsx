// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LungsFillSvg from '@airclass/icons-svg/lib/asn/LungsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LungsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LungsFillSvg}></AntdIcon>;
};

LungsFill.displayName = 'LungsFill';
LungsFill.inheritAttrs = false;
export default LungsFill;