// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home3LineSvg from '@airclass/icons-svg/lib/asn/Home3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home3LineSvg}></AntdIcon>;
};

Home3Line.displayName = 'Home3Line';
Home3Line.inheritAttrs = false;
export default Home3Line;