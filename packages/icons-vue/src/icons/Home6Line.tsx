// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home6LineSvg from '@airclass/icons-svg/lib/asn/Home6Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home6Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home6LineSvg}></AntdIcon>;
};

Home6Line.displayName = 'Home6Line';
Home6Line.inheritAttrs = false;
export default Home6Line;