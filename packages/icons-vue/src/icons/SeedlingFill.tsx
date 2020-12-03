// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SeedlingFillSvg from '@airclass/icons-svg/lib/asn/SeedlingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SeedlingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SeedlingFillSvg}></AntdIcon>;
};

SeedlingFill.displayName = 'SeedlingFill';
SeedlingFill.inheritAttrs = false;
export default SeedlingFill;