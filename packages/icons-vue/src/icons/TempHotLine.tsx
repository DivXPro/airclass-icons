// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TempHotLineSvg from '@airclass/icons-svg/lib/asn/TempHotLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TempHotLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TempHotLineSvg}></AntdIcon>;
};

TempHotLine.displayName = 'TempHotLine';
TempHotLine.inheritAttrs = false;
export default TempHotLine;