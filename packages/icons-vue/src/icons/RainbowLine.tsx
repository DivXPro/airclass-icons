// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RainbowLineSvg from '@airclass/icons-svg/lib/asn/RainbowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RainbowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RainbowLineSvg}></AntdIcon>;
};

RainbowLine.displayName = 'RainbowLine';
RainbowLine.inheritAttrs = false;
export default RainbowLine;