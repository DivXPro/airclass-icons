// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import H1Svg from '@airclass/icons-svg/lib/asn/H1';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const H1 = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={H1Svg}></AntdIcon>;
};

H1.displayName = 'H1';
H1.inheritAttrs = false;
export default H1;