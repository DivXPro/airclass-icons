// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PulseLineSvg from '@airclass/icons-svg/lib/asn/PulseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PulseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PulseLineSvg}></AntdIcon>;
};

PulseLine.displayName = 'PulseLine';
PulseLine.inheritAttrs = false;
export default PulseLine;