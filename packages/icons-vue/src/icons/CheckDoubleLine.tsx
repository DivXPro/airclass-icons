// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckDoubleLineSvg from '@airclass/icons-svg/lib/asn/CheckDoubleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckDoubleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckDoubleLineSvg}></AntdIcon>;
};

CheckDoubleLine.displayName = 'CheckDoubleLine';
CheckDoubleLine.inheritAttrs = false;
export default CheckDoubleLine;