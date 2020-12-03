// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EqualizerFillSvg from '@airclass/icons-svg/lib/asn/EqualizerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EqualizerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EqualizerFillSvg}></AntdIcon>;
};

EqualizerFill.displayName = 'EqualizerFill';
EqualizerFill.inheritAttrs = false;
export default EqualizerFill;