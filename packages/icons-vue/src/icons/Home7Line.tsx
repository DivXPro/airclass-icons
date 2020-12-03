// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home7LineSvg from '@airclass/icons-svg/lib/asn/Home7Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home7Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home7LineSvg}></AntdIcon>;
};

Home7Line.displayName = 'Home7Line';
Home7Line.inheritAttrs = false;
export default Home7Line;