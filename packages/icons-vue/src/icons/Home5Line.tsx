// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home5LineSvg from '@airclass/icons-svg/lib/asn/Home5Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home5Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home5LineSvg}></AntdIcon>;
};

Home5Line.displayName = 'Home5Line';
Home5Line.inheritAttrs = false;
export default Home5Line;