// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FahrenheitLineSvg from '@airclass/icons-svg/lib/asn/FahrenheitLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FahrenheitLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FahrenheitLineSvg}></AntdIcon>;
};

FahrenheitLine.displayName = 'FahrenheitLine';
FahrenheitLine.inheritAttrs = false;
export default FahrenheitLine;