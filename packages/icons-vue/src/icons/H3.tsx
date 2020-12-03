// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import H3Svg from '@airclass/icons-svg/lib/asn/H3';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const H3 = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={H3Svg}></AntdIcon>;
};

H3.displayName = 'H3';
H3.inheritAttrs = false;
export default H3;