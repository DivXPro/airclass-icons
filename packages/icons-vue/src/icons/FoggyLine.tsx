// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FoggyLineSvg from '@airclass/icons-svg/lib/asn/FoggyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoggyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FoggyLineSvg}></AntdIcon>;
};

FoggyLine.displayName = 'FoggyLine';
FoggyLine.inheritAttrs = false;
export default FoggyLine;