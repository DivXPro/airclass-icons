// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SeedlingLineSvg from '@airclass/icons-svg/lib/asn/SeedlingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SeedlingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SeedlingLineSvg}></AntdIcon>;
};

SeedlingLine.displayName = 'SeedlingLine';
SeedlingLine.inheritAttrs = false;
export default SeedlingLine;