// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IncreaseDecreaseFillSvg from '@airclass/icons-svg/lib/asn/IncreaseDecreaseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IncreaseDecreaseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IncreaseDecreaseFillSvg}></AntdIcon>;
};

IncreaseDecreaseFill.displayName = 'IncreaseDecreaseFill';
IncreaseDecreaseFill.inheritAttrs = false;
export default IncreaseDecreaseFill;