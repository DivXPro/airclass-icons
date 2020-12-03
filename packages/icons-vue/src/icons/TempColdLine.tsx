// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TempColdLineSvg from '@airclass/icons-svg/lib/asn/TempColdLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TempColdLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TempColdLineSvg}></AntdIcon>;
};

TempColdLine.displayName = 'TempColdLine';
TempColdLine.inheritAttrs = false;
export default TempColdLine;