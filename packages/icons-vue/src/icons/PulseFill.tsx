// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PulseFillSvg from '@airclass/icons-svg/lib/asn/PulseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PulseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PulseFillSvg}></AntdIcon>;
};

PulseFill.displayName = 'PulseFill';
PulseFill.inheritAttrs = false;
export default PulseFill;