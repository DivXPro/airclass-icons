// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Battery2FillSvg from '@airclass/icons-svg/lib/asn/Battery2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Battery2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery2FillSvg}></AntdIcon>;
};

Battery2Fill.displayName = 'Battery2Fill';
Battery2Fill.inheritAttrs = false;
export default Battery2Fill;