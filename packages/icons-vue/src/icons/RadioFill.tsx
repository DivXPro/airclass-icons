// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RadioFillSvg from '@airclass/icons-svg/lib/asn/RadioFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadioFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioFillSvg}></AntdIcon>;
};

RadioFill.displayName = 'RadioFill';
RadioFill.inheritAttrs = false;
export default RadioFill;