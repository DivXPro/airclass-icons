// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseFillSvg from '@airclass/icons-svg/lib/asn/PauseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseFillSvg}></AntdIcon>;
};

PauseFill.displayName = 'PauseFill';
PauseFill.inheritAttrs = false;
export default PauseFill;