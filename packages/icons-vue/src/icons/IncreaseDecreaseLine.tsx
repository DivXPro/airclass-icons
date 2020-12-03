// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IncreaseDecreaseLineSvg from '@airclass/icons-svg/lib/asn/IncreaseDecreaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IncreaseDecreaseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IncreaseDecreaseLineSvg}></AntdIcon>;
};

IncreaseDecreaseLine.displayName = 'IncreaseDecreaseLine';
IncreaseDecreaseLine.inheritAttrs = false;
export default IncreaseDecreaseLine;