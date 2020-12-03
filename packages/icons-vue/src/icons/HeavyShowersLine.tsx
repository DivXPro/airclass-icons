// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeavyShowersLineSvg from '@airclass/icons-svg/lib/asn/HeavyShowersLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeavyShowersLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeavyShowersLineSvg}></AntdIcon>;
};

HeavyShowersLine.displayName = 'HeavyShowersLine';
HeavyShowersLine.inheritAttrs = false;
export default HeavyShowersLine;