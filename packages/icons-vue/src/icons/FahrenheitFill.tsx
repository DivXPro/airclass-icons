// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FahrenheitFillSvg from '@airclass/icons-svg/lib/asn/FahrenheitFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FahrenheitFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FahrenheitFillSvg}></AntdIcon>;
};

FahrenheitFill.displayName = 'FahrenheitFill';
FahrenheitFill.inheritAttrs = false;
export default FahrenheitFill;