// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Heart3FillSvg from '@airclass/icons-svg/lib/asn/Heart3Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Heart3Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Heart3FillSvg}></AntdIcon>;
};

Heart3Fill.displayName = 'Heart3Fill';
Heart3Fill.inheritAttrs = false;
export default Heart3Fill;