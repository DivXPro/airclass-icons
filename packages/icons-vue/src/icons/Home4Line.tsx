// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home4LineSvg from '@airclass/icons-svg/lib/asn/Home4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home4LineSvg}></AntdIcon>;
};

Home4Line.displayName = 'Home4Line';
Home4Line.inheritAttrs = false;
export default Home4Line;