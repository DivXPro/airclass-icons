// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Heart2FillSvg from '@airclass/icons-svg/lib/asn/Heart2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Heart2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Heart2FillSvg}></AntdIcon>;
};

Heart2Fill.displayName = 'Heart2Fill';
Heart2Fill.inheritAttrs = false;
export default Heart2Fill;