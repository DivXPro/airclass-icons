// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FoggyFillSvg from '@airclass/icons-svg/lib/asn/FoggyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoggyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FoggyFillSvg}></AntdIcon>;
};

FoggyFill.displayName = 'FoggyFill';
FoggyFill.inheritAttrs = false;
export default FoggyFill;