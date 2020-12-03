// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HonourFillSvg from '@airclass/icons-svg/lib/asn/HonourFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HonourFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HonourFillSvg}></AntdIcon>;
};

HonourFill.displayName = 'HonourFill';
HonourFill.inheritAttrs = false;
export default HonourFill;