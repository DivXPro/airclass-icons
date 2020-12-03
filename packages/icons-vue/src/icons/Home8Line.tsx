// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Home8LineSvg from '@airclass/icons-svg/lib/asn/Home8Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Home8Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home8LineSvg}></AntdIcon>;
};

Home8Line.displayName = 'Home8Line';
Home8Line.inheritAttrs = false;
export default Home8Line;