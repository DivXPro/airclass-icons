// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EarthFillSvg from '@airclass/icons-svg/lib/asn/EarthFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EarthFillSvg}></AntdIcon>;
};

EarthFill.displayName = 'EarthFill';
EarthFill.inheritAttrs = false;
export default EarthFill;