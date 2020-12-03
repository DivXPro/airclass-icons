// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home2LineSvg from '@airclass/icons-svg/lib/asn/Home2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home2LineSvg}></AntdIcon>;
};

Home2Line.displayName = 'Home2Line';
Home2Line.inheritAttrs = false;
export default Home2Line;