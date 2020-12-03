// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GradienterLineSvg from '@airclass/icons-svg/lib/asn/GradienterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GradienterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GradienterLineSvg}></AntdIcon>;
};

GradienterLine.displayName = 'GradienterLine';
GradienterLine.inheritAttrs = false;
export default GradienterLine;