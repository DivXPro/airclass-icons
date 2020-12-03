// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EBikeLineSvg from '@airclass/icons-svg/lib/asn/EBikeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EBikeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EBikeLineSvg}></AntdIcon>;
};

EBikeLine.displayName = 'EBikeLine';
EBikeLine.inheritAttrs = false;
export default EBikeLine;