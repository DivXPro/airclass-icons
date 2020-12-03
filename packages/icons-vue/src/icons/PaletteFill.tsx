// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaletteFillSvg from '@airclass/icons-svg/lib/asn/PaletteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaletteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaletteFillSvg}></AntdIcon>;
};

PaletteFill.displayName = 'PaletteFill';
PaletteFill.inheritAttrs = false;
export default PaletteFill;