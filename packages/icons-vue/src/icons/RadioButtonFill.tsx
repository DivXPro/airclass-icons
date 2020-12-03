// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RadioButtonFillSvg from '@airclass/icons-svg/lib/asn/RadioButtonFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadioButtonFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioButtonFillSvg}></AntdIcon>;
};

RadioButtonFill.displayName = 'RadioButtonFill';
RadioButtonFill.inheritAttrs = false;
export default RadioButtonFill;