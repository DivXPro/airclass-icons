// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TempColdFillSvg from '@airclass/icons-svg/lib/asn/TempColdFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TempColdFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TempColdFillSvg}></AntdIcon>;
};

TempColdFill.displayName = 'TempColdFill';
TempColdFill.inheritAttrs = false;
export default TempColdFill;