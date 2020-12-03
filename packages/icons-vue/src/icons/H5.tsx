// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import H5Svg from '@airclass/icons-svg/lib/asn/H5';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const H5 = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={H5Svg}></AntdIcon>;
};

H5.displayName = 'H5';
H5.inheritAttrs = false;
export default H5;