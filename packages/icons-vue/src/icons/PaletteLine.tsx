// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaletteLineSvg from '@airclass/icons-svg/lib/asn/PaletteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaletteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaletteLineSvg}></AntdIcon>;
};

PaletteLine.displayName = 'PaletteLine';
PaletteLine.inheritAttrs = false;
export default PaletteLine;