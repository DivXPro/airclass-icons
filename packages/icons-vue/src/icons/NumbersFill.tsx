// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NumbersFillSvg from '@airclass/icons-svg/lib/asn/NumbersFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumbersFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NumbersFillSvg}></AntdIcon>;
};

NumbersFill.displayName = 'NumbersFill';
NumbersFill.inheritAttrs = false;
export default NumbersFill;