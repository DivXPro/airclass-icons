// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RadioLineSvg from '@airclass/icons-svg/lib/asn/RadioLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadioLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioLineSvg}></AntdIcon>;
};

RadioLine.displayName = 'RadioLine';
RadioLine.inheritAttrs = false;
export default RadioLine;