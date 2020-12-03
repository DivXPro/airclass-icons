// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RadioButtonLineSvg from '@airclass/icons-svg/lib/asn/RadioButtonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadioButtonLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioButtonLineSvg}></AntdIcon>;
};

RadioButtonLine.displayName = 'RadioButtonLine';
RadioButtonLine.inheritAttrs = false;
export default RadioButtonLine;