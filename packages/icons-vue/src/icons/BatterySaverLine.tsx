// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatterySaverLineSvg from '@airclass/icons-svg/lib/asn/BatterySaverLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatterySaverLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatterySaverLineSvg}></AntdIcon>;
};

BatterySaverLine.displayName = 'BatterySaverLine';
BatterySaverLine.inheritAttrs = false;
export default BatterySaverLine;