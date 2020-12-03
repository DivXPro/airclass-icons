// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TyphoonLineSvg from '@airclass/icons-svg/lib/asn/TyphoonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TyphoonLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TyphoonLineSvg}></AntdIcon>;
};

TyphoonLine.displayName = 'TyphoonLine';
TyphoonLine.inheritAttrs = false;
export default TyphoonLine;