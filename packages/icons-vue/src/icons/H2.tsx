// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import H2Svg from '@airclass/icons-svg/lib/asn/H2';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const H2 = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={H2Svg}></AntdIcon>;
};

H2.displayName = 'H2';
H2.inheritAttrs = false;
export default H2;