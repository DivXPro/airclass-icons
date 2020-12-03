// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HonourLineSvg from '@airclass/icons-svg/lib/asn/HonourLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HonourLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HonourLineSvg}></AntdIcon>;
};

HonourLine.displayName = 'HonourLine';
HonourLine.inheritAttrs = false;
export default HonourLine;